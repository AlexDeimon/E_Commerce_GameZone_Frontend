<template>
    <div class="container contenedor2">
      <loading
        v-model:active="isLoading"
       :can-cancel=false
       :is-full-page=true
       color="red"
       background-color="#000"
       opacity="0.9"
       />
      <div class="cardProduct" v-for="product in productList" v-bind:key="product">
        <img id="imgProduct" alt="Imagen producto" :src="product.urlImagen">
        <h3>{{product.producto}}</h3>
        <p class="descripcion">{{product.descripcion}}</p>
        <p class="precio"><span>Precio:</span>  ${{product.precio}}</p>
        <div class="flex">
          <p class="categoria">{{product.categoria}}</p>
          <p class="agotado">{{product.agotado}}</p>
        </div>
        <form v-on:submit.prevent="addProduct(product)" name="myform" novalidate>
          <div class="form-group">
            <div class="input-group mb-3">
              <input type="text" class="form-control hide" placeholder="Nombre producto" required autocomplete="off" v-model="this.product.producto">
            </div>
          </div> 
          <div class="form-group">
            <div class="input-group mb-3">
              <div class="input-group-append">
                <span class="input-group-text input-group-text-2"><i class="fas fa-shopping-cart"></i></span>
              </div>
              <input type="number" class="form-control" required autocomplete="off" v-model="product.cantidadCarrito">
            </div>
          </div>
          <button class="btn btn-success btn-crud" type="submit"><span class="text">Agregar producto</span><span class="icon"><i class="fas fa-plus"></i></span></button>
        </form>
      </div>
    </div>
    <button v-on:click="goCarrito" class="botonCarrito"><i class="fas fa-shopping-cart"></i></button>
</template>
<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import Swal from 'sweetalert2';
import { defineComponent } from 'vue';
import axios from 'axios';
import { storage } from '../firebase';
import { ref, getDownloadURL} from 'firebase/storage';
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    Loading
  },
  data: function(){
    return{
      isLoading: true,
      fullpage: true,
      product: {
        id: "",
        producto: "",
        descripcion: "",
        precio: "",
        stock: "",
        categoria: "",
        cantidadCarrito: 0,
        urlImagen: "",
        agotado: ""
      },
      productList: [],
      carrito: {
        id:"",
        cantidad_productos: "",
        productos: [],
        precioTotal: ""
      },
    }
  },
  methods: {
    async allProducts(){
      this.productList = [];
      await axios.get("https://ecommercebackend-production-2c76.up.railway.app/verProductos").then((response) => {
        this.productList = response.data;
        this.productList.map((product) => {
          product.cantidadCarrito = 0;
          getDownloadURL(ref(storage, 'imagenes/'+product.id)).then((url) => {
            product.urlImagen = url;  
          });
          if(product.stock == 0) {
            product.agotado = "NO HAY DISPONIBLE";
          }
        });
        console.log(this.productList);
      }).catch(function(error){console.log(error);});
      this.isLoading = false;
    },
    createCarrito(){
      axios.post("https://ecommercebackend-production-2c76.up.railway.app/crearCarrito/" + (Math.random().toString(10).slice(-4)).toString(), this.carrito).then((response) => {
        this.carrito = response.data;
        sessionStorage.setItem("carritoActual",this.carrito.id)
        console.log('carrito actual '+ sessionStorage.getItem("carritoActual"))
      }).catch(function(error) {
        console.log(error);
      });
    },
    addProduct(product){
      axios.put("https://ecommercebackend-production-2c76.up.railway.app/añadirProducto/" + sessionStorage.getItem("carritoActual") +"/"+ product.producto +"/"+ product.cantidadCarrito).then((response) => {
        this
        console.log(response, this.carrito);
        Swal.fire({
          icon: 'success',
          title: "Se han añadido " + product.cantidadCarrito + " " + product.producto + " al carrito"
        });
      }).catch(function(error) {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: error.response.data,
        });
      });
    },
    goCarrito(){
      let carrito = sessionStorage.getItem("carritoActual");
      axios.get("https://ecommercebackend-production-2c76.up.railway.app/verCarrito/" + sessionStorage.getItem("carritoActual")).then((response) => {
        carrito = response.data;
        if(carrito.cantidad_productos == 0){
          Swal.fire({
            icon: 'error',
            title: "No has agregado ningún producto al carrito",
          });
        } else {
          let gocarrito = sessionStorage.getItem("carritoActual");
          this.$router.push({name: "Carrito", params:{ carrito: gocarrito }})
        }
      }).catch(function(error){
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: error.response.data,
        });
      });
    }
  },
  created: function(){
    this.allProducts();
    if(sessionStorage.getItem("carritoActual") == null){
      this.createCarrito();
    }
  }
})
</script>
<style>
.contenedor2 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.cardProduct {
  width: 300px;
  margin: 3% 3%;
  padding: 2%;
  background: rgba(0, 0, 0, 0.651);
  color: white;
  border: 1px solid white;
  border-radius: 30px;
}
.cardProduct .descripcion {
  height: 80px;
  overflow: auto;
}
.cardProduct .categoria {
  font-weight: bold;
}
.cardProduct .flex {
  display: flex;
  justify-content: space-between;
}
.agotado {
  color: red;
  font-size: large;
  font-weight: bold;
}
.input-group-text-2 {
  background: #28a745;
  color: white;
  border: 1px solid white;
}
.hide {
  display: none;
}
.botonCarrito {
  box-sizing: border-box;
  height: 80px;
  width: 80px;
  position: fixed;
  bottom: 15px;
  right: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: x-large;
  background-color: red;
  border: 5px solid white;
  border-radius: 50%;
  text-decoration: none;
  transition: transform 0.5s;
}
.botonCarrito:hover{
  cursor: pointer;
  transform: scale(1.3,1.3);
}
.cardProduct .precio span {
  font-size: x-large;
  font-weight: bold;
  color: limegreen;
}
.cardProduct #imgProduct {
  width: 200px;
  height: 240px;
  display: block;
  margin: 5% auto;
}
</style>
