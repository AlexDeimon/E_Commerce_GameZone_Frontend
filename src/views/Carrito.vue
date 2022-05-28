<template>
    <div class="container contenedor2">
        <div class="row justify-content-around">
            <button class="btn btn-success btn-crud" v-on:click="createCarrito"><span class="text">Crear</span><span class="icon"><i class="fas fa-shopping-cart"></i></span></button>
            <button class="btn btn-danger btn-crud" data-toggle="modal" data-target="#eliminarcarrito"><span class="text">Eliminar</span><span class="icon"><i class="fas fa-trash"></i></span></button>
            <button class="btn btn-success btn-crud" data-toggle="modal" data-target="#añadirproducto"><span class="text">Nuevo producto</span><span class="icon"><i class="fas fa-plus"></i></span></button>
            <button class="btn btn-danger btn-crud" data-toggle="modal" data-target="#removerproducto"><span class="text">Quitar producto</span><span class="icon"><i class="fas fa-times"></i></span></button>
            <div class="input-group mb-3" style="width: auto">
                <input type="search" placeholder="ID del carrito" required autocomplete="off" v-model="carrito.id">
                <div class="input-group-append">
                    <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#buscarCarrito" v-on:click="searchCarrito"><i class="fas fa-search"></i></button>
                </div>
            </div>
            <button class="btn btn-primary btn-crud" v-on:click="allCarritos"><span class="text">Ver Carritos</span><span class="icon"><i class="fas fa-tasks"></i></span></button>
        </div>
        <div class="modal fade" id="buscarCarrito" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header header-buscar">
                        <h5 class="modal-title">Carrito</h5>
                        <button type="button" class="close" v-on:click="limpiarCampos" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text input-group-text-3"><i class="fas fa-barcode"></i></span>
                                </div>
                                <input type="text" class="form-control input_user" placeholder="ID carrito" readonly v-model="carrito.id">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text input-group-text-3"><i class="fas fa-shopping-cart"></i></span>
                                </div>
                                <input type="number" class="form-control input_user" placeholder="cantidad de productos" readonly v-model="carrito.cantidad_productos">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group mb-3" id="listaProductos">
                                <div class="input-group-append">
                                    <span class="input-group-text input-group-text-3"><i class="fas fa-tasks"></i></span>
                                </div>
                                <ul id="productos">
                                    <li v-for="producto in carrito.productos" v-bind:key="producto">{{producto.cantidadCarrito}} {{producto.producto}} = {{producto.cantidadCarrito}} X ${{producto.precio}}</li> 
                                </ul>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text input-group-text-3"><i class="fas fa-dollar-sign"></i></span>
                                </div>
                                <input type="text" class="form-control input_user" placeholder="Precio total" readonly v-model="carrito.precioTotal">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="añadirproducto" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header header-agregar">
                        <h5 class="modal-title">Añadir Producto</h5>
                        <button type="button" class="close" v-on:click="limpiarCampos" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body d-flex justify-content-center form_container">
                        <form v-on:submit.prevent="addProduct">
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-2"><i class="fas fa-barcode"></i></span>
                                    </div>
                                    <input type="text" class="form-control input_user" placeholder="ID carrito" required autocomplete="off" v-model="carrito.id">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-2"><i class="fas fa-gamepad"></i></span>
                                    </div>
                                    <input type="text" class="form-control input_user" placeholder="Nombre producto" required autocomplete="off" v-model="product.producto">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-2"><i class="fas fa-shopping-cart"></i></span>
                                    </div>
                                    <input type="number" class="form-control input_user" placeholder="Cantidad" required autocomplete="off" v-model="cantidadProducto">
                                </div>
                            </div>
                            <button class="btn btn-success" type="submit">Añadir</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="removerproducto" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header header-eliminar">
                        <h5 class="modal-title">Remover Producto</h5>
                        <button type="button" class="close" v-on:click="limpiarCampos" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body d-flex justify-content-center form_container">
                        <form v-on:submit.prevent="removeProduct">
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-1"><i class="fas fa-barcode"></i></span>
                                    </div>
                                    <input type="text" class="form-control input_user" placeholder="ID carrito" required autocomplete="off" v-model="carrito.id">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-1"><i class="fas fa-gamepad"></i></span>
                                    </div>
                                    <input type="text" class="form-control input_user" placeholder="Nombre producto" required autocomplete="off" v-model="product.producto">
                                </div>
                            </div>
                            <button class="btn btn-danger" type="submit" >Remover</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="eliminarcarrito" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header header-eliminar">
                        <h5 class="modal-title">Eliminar carrito</h5>
                        <button type="button" class="close" v-on:click="limpiarCampos" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body d-flex justify-content-center form_container">
                        <form v-on:submit.prevent="deleteCarrito">
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-1"><i class="fas fa-barcode"></i></span>
                                    </div>
                                    <input type="text" class="form-control input_user" placeholder="ID carrito" required autocomplete="off" v-model="carrito.id">
                                </div>
                            </div>
                            <button class="btn btn-danger" type="submit" >Eliminar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="table tabla">
            <table class="table">
                <tr>
                    <th>ID Carrito</th> 
                    <th>Cantidad de productos</th>
                    <th>Lista de productos</th>
                    <th>Precio Total</th>
                </tr>
                <tr v-for="carrito in carritos_list" v-bind:key="carrito">
                    <td>{{carrito.id}}</td>
                    <td>{{carrito.cantidad_productos}}</td>
                    <td id="lista">
                        <ul class="productos">
                           <li v-for="producto in carrito.productos" v-bind:key="producto">{{producto.cantidadCarrito}} {{producto.producto}} = {{producto.cantidadCarrito}} X ${{producto.precio}}</li> 
                        </ul>
                    </td>
                    <td>${{carrito.precioTotal}}</td>
                </tr>
            </table>
        </div>
  </div>
</template>
<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import Swal from 'sweetalert2'
export default defineComponent({
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
                cantidadCarrito: 0
            },
            carrito: {
                id:"",
                cantidad_productos: "",
                productos: [],
                precioTotal: ""
            },
            cantidadProducto: "",
            carritos_list: []
        }
    },
    methods:{
        limpiarCampos(){
            this.carrito.id=""
            this.carrito.cantidad_productos= ""
            this.carrito.precioTotal= ""
            this.carrito.productos= []
            this.product.producto=""
            this.product.descripcion = ""
            this.product.precio = ""
            this.product.stock = ""
            this.product.categoria = ""
            this.product.cantidadCarrito = 0
            this.cantidadProducto= ""
        },
        createCarrito(){
            var carrito = this.carrito;
            axios.post("https://gamezone-e-commerce-backend.herokuapp.com/crearCarrito/" + (Math.random().toString(10).slice(-4)).toString(), carrito).then((response) => {
                this
                console.log(response, carrito);
                Swal.fire({
                    icon: 'success',
                    title: "Se ha creado el carrito con Id " + response.data.id,
                });
            }).catch(function(error) {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: error.response.data,
                });
            });
        },
        deleteCarrito(){
            var carrito = this.carrito;
            axios.delete("https://gamezone-e-commerce-backend.herokuapp.com/eliminarCarrito/" + carrito.id).then((response) => {
                this
                console.log(response);
                Swal.fire({
                    icon: 'success',
                    title: 'Se ha eliminado el carrito',
                });
            }).catch(function(error) {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: error.response.data,
                });
            });
        },
        addProduct(){
            var carrito = this.carrito;
            var product = this.product;
            axios.put("https://gamezone-e-commerce-backend.herokuapp.com/añadirProducto/" + carrito.id +"/"+ product.producto +"/"+ this.cantidadProducto).then((response) => {
                this
                console.log(response, carrito);
                Swal.fire({
                    icon: 'success',
                    title: "Se han añadido " + this.cantidadProducto + " " + product.producto + " al carrito " + carrito.id,
                });
            }).catch(function(error) {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: error.response.data,
                });
            });
        },
        removeProduct(){
            var carrito = this.carrito;
            var product = this.product;
            axios.put("https://gamezone-e-commerce-backend.herokuapp.com/borrarProducto/" + carrito.id +"/"+ product.producto).then((response) => {
                this
                console.log(response, carrito);
                Swal.fire({
                    icon: 'success',
                    title: "Se han borrado todos los " + product.producto + " del carrito " + carrito.id,
                });
            }).catch(function(error) {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: error.response.data,
                });
            });
        },
        searchCarrito(){
            var carrito = this.carrito;
            axios.get("https://gamezone-e-commerce-backend.herokuapp.com/verCarrito/" + carrito.id).then((response) => {
                this.carrito = response.data;
                console.log(response, carrito);
                }).catch(function(error){
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: error.response.data,
                });
            });
        },
        allCarritos(){
            this.carritos_list = [];
            axios.get("https://gamezone-e-commerce-backend.herokuapp.com/verCarritos").then((response) => {this.carritos_list = response.data}).catch(function(error){
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: error.response.data,
                });
            });
        }
    }
});
</script>
<style>
#lista ul li{
    white-space: nowrap;
}
</style>