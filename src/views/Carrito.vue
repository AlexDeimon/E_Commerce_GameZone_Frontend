<template>
    <div class="container contenedor3">
        <div>
            <h2>Tu carrito está Listo! <i class="fas fa-shopping-cart"></i></h2>
            <div class="carrito">
                <div v-for="producto in carrito.productos" v-bind:key="producto" class="cardProduct2">
                    <div>
                        <div>
                            <img :src="producto.urlImagen" alt="imagen producto" id="imgProduct">
                        </div>
                        <div>
                            <h3>{{producto.producto}}</h3>
                            <p><span class="precio">Precio:</span>  ${{producto.precio}}</p>
                            <p ><span class="cantidad">Cantidad:</span> {{producto.cantidadCarrito}}</p>
                        </div>     
                    </div>
                    <div>
                        <button class="btn btn-danger btn-crud" v-on:click="removeProduct(producto)"><span class="text">Remover producto</span><span class="icon"><i class="fas fa-trash"></i></span></button>
                    </div>   
                </div>
                <div>
                    <h2><span class="cantidad">Cantidad de productos:</span>  {{carrito.cantidad_productos}}</h2>
                    <h2><span class="precio">Total:</span> ${{carrito.precioTotal}}</h2>
                </div>    
            </div>
       </div>
       <div>
           <h2>Digite sus datos <i class="fas fa-user"></i></h2>
           <form v-on:submit.prevent="newCompra">
               <div class="form-group hide">
                    <div class="input-group mb-3">
                        <div class="input-group-append">
                            <span class="input-group-text input-group-text-3"><i class="fas fa-barcode"></i></span>
                        </div>
                        <input type="text" class="form-control input_user" placeholder="ID carrito" required autocomplete="off" v-model="carrito.id">
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group mb-3">
                        <div class="input-group-append">
                            <span class="input-group-text input-group-text-3"><i class="fas fa-id-card"></i></span>
                        </div>
                        <input type="text" class="form-control input_user" placeholder="ID" required autocomplete="off" v-model="cliente.idCliente">
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group mb-3">
                        <div class="input-group-append">
                            <span class="input-group-text input-group-text-3"><i class="fas fa-user"></i></span>
                        </div>
                        <input type="text" class="form-control input_user" placeholder="Nombre" required autocomplete="off" v-model="cliente.nombre">
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group mb-3">
                        <div class="input-group-append">
                            <span class="input-group-text input-group-text-3"><i class="fas fa-user"></i></span>
                        </div>
                        <input type="text" class="form-control input_user" placeholder="Apellidos" required autocomplete="off" v-model="cliente.apellidos">
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group mb-3">
                        <div class="input-group-append">
                            <span class="input-group-text input-group-text-3"><i class="fas fa-at"></i></span>
                        </div>
                        <input type="email" class="form-control input_user" placeholder="Correo" required autocomplete="off" v-model="cliente.correo">
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group mb-3">
                        <div class="input-group-append">
                            <span class="input-group-text input-group-text-3"><i class="fas fa-mobile-alt"></i></span>
                        </div>
                        <input type="tel" class="form-control input_user" placeholder="Teléfono" required autocomplete="off" v-model="cliente.telefono">
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group mb-3">
                        <div class="input-group-append">
                            <span class="input-group-text input-group-text-3"><i class="fas fa-map-marker-alt"></i></span>
                        </div>
                        <input type="text" class="form-control input_user" placeholder="Dirección" required autocomplete="off" v-model="cliente.direccion">
                    </div>
                </div>
                <button class="btn btn-primary btn-crud" type="submit"><span class="text">Realizar la compra</span><span class="icon"><i class="fas fa-shopping-cart"></i></span></button>
            </form>
       </div>
  </div>
</template>
<script>
import axios from 'axios';
import { defineComponent } from 'vue';
import Swal from 'sweetalert2'
import { storage } from '../firebase';
import { ref, getDownloadURL} from 'firebase/storage';
export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Carrito",
    data: function(){
        return{
            product: {
                id: "",
                producto: "",
                descripcion: "",
                precio: "",
                stock: "",
                categoria: "",
                cantidadCarrito: 0,
                urlImagen: "",
            },
            carrito: {
                id:"",
                cantidad_productos: "",
                productos: [],
                precioTotal: ""
            },
            cantidadProducto: "",
            carritos_list: [],
            cliente: {
                idCliente: "",
                idCarrito: "",
                correo: "",
                nombre: "",
                apellidos: "",
                direccion: "",
                telefono: ""
            },
            compra: {
                id: "",
                idCliente: "",
                fecha: "",
            }
        }
    },
    methods: {
        searchCarrito(){
            axios.get("https://ecommercebackend-production-2c76.up.railway.app/verCarrito/" + sessionStorage.getItem("carritoActual")).then((response) => {
                this.carrito = response.data;
                this.carrito.productos.map((product) => {
                    getDownloadURL(ref(storage, 'imagenes/'+product.id)).then((url) => {
                        product.urlImagen = url;  
                    });
                    if(product.stock == 0) {
                        product.agotado = "NO HAY DISPONIBLE";
                    }
                });
                console.log(this.carrito);
                }).catch(function(error){
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: error.response.data,
                });
            });
        },
        newCompra(){
            var cliente = this.cliente;
            var carrito = this.carrito
            axios.post("https://ecommercebackend-production-2c76.up.railway.app/nuevoCliente/"+ cliente.idCliente +"/"+ carrito.id, cliente).then(() => {
                var compra = this.compra;
                var nuevaFecha = new Date();
                compra.fecha = `${nuevaFecha}`
                axios.post("https://ecommercebackend-production-2c76.up.railway.app/agregarCompra/"+ (Math.random().toString(10).slice(-4)).toString() +"/"+ cliente.idCliente, compra).then((response) => {
                    this
                    console.log(response, compra);
                    Swal.fire({
                        icon: 'success',
                        title: "Se realizó la compra exitosamente!",
                    });
                    this.limpiarCampos();
                }).catch(function(error){
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: error.response.data,
                });
            });
                }).catch(function(error){
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: error.response.data,
                });
            });
        },
        removeProduct(product){
            axios.put("https://ecommercebackend-production-2c76.up.railway.app/borrarProducto/" + this.carrito.id +"/"+ product.producto).then((response) => {
                this
                console.log(response);
                Swal.fire({
                    icon: 'success',
                    title: "Se han borrado todos los " + product.producto + " del carrito"
                });
                this.searchCarrito();
            }).catch(function(error) {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: error.response.data,
                });
            });
        },
        limpiarCampos(){
            this.cliente.idCliente = ""
            this.cliente.correo = ""
            this.cliente.nombre = ""
            this.cliente.apellidos = ""
            this.cliente.direccion = ""
            this.cliente.telefono = ""
        }
    },
    created: function(){
      this.carrito.id = this.$route.params.carrito;
      this.searchCarrito();
    }
});
</script>
<style scoped>
h2 {
    color: white;
}
h3{
    margin-bottom: 1rem;
}
.contenedor3{
    display: grid;
    grid-template-columns: 100%;
    gap: 10px;
}
.contenedor3 div form button {
    margin-left: auto;
    margin-right: auto;
}
.cardProduct2 {
    display: grid;
    grid-template-columns: 60% 40%;
    background: rgba(0, 0, 0, 0.651);
    color: white;
    margin-bottom: 10px;
}
.cardProduct2 > div:first-child {
    display: flex;
    gap: 10px;
}
.cardProduct2 > div:last-child {
    display: flex;
    align-items: center;
}
.cantidad {
    color: dodgerblue;
}
.precio {
    color: limegreen;
}
.input-group-text-3{
    background-color: #007bff;
    color: white;
}
.cardProduct2 .btn-crud{
    width: 140px;
    margin-left: 10px;
}
.cardProduct2 .btn-crud .text{
  transform: translateX(-24px);
  white-space: pre-wrap;
}
.cardProduct2 .btn-crud .icon {
    position: absolute;
    border-left: 1px solid;
    transform: translateX(75px);
    height: 40px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.cardProduct2 .btn-crud:hover .text {
    color: transparent;
}
.cardProduct2 .btn-crud:hover .icon {
    width: 110px;
    border-left: none;
    transform: translateX(0);
}
@media all and (min-width: 830px){
    .contenedor3{
        grid-template-columns: 50% 40%;
        gap: 100px;
    }
}
#imgProduct {
    width: 100px;
    height: 140px;
    display: block;
    margin: 5% auto;
}
</style>