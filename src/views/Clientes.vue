<template>
    <div class="container contenedor2">
        <div class="row justify-content-around">
            <button class="btn btn-success btn-crud" data-toggle="modal" data-target="#nuevocliente"><span class="text">Nuevo</span><span class="icon"><i class="fas fa-user"></i></span></button>
            <button class="btn btn-warning btn-crud" data-toggle="modal" data-target="#actualizarcliente"><span class="text">Actualizar</span><span class="icon"><i class="fas fa-edit"></i></span></button>
            <button class="btn btn-danger btn-crud" data-toggle="modal" data-target="#eliminarcliente"><span class="text">Eliminar</span><span class="icon"><i class="fas fa-trash"></i></span></button>
            <div class="input-group mb-3" style="width: auto">
                <input type="search" placeholder="ID cliente" required v-model="cliente.idCliente">
                <div class="input-group-append">
                    <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#buscarcliente" v-on:click="searchCliente"><i class="fas fa-search"></i></button>
                </div>
            </div>
            <div class="input-group mb-3" style="width: auto">
                <input type="search" placeholder="Cliente por ID carrito" required v-model="cliente.idCarrito">
                <div class="input-group-append">
                    <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#buscarclientexcarrito" v-on:click="searchClienteXCarrito"><i class="fas fa-search"></i></button>
                </div>
            </div>
            <div class="input-group mb-3" style="width: auto">
                <input type="search" placeholder="Carrito por ID cliente" required v-model="cliente.idCliente">
                <div class="input-group-append">
                    <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#buscarcarrito" v-on:click="searchCarrito"><i class="fas fa-search"></i></button>
                </div>
            </div>
            <button class="btn btn-primary btn-crud" v-on:click="allClientes"><span class="text">Ver Clientes</span><span class="icon"><i class="fas fa-tasks"></i></span></button>
        </div>
        <div class="modal fade" id="buscarcliente" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header header-buscar">
                        <h5 class="modal-title">Cliente</h5>
                        <button type="button" class="close" v-on:click="limpiarCampos" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text input-group-text-3"><i class="fas fa-id-card"></i></span>
                                </div>
                                <input type="text" class="form-control input_user" placeholder="ID cliente" readonly v-model="cliente.idCliente">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text input-group-text-3"><i class="fas fa-barcode"></i></span>
                                </div>
                                <input type="text" class="form-control input_user" placeholder="ID carrito" readonly v-model="cliente.idCarrito">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text input-group-text-3"><i class="fas fa-user"></i></span>
                                </div>
                                <input type="text" class="form-control input_user" placeholder="Nombre" readonly v-model="cliente.nombre">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text input-group-text-3"><i class="fas fa-user"></i></span>
                                </div>
                                <input type="text" class="form-control input_user" placeholder="Apellidos" readonly v-model="cliente.apellidos">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text input-group-text-3"><i class="fas fa-at"></i></span>
                                </div>
                                <input type="email" class="form-control input_user" placeholder="Correo" readonly v-model="cliente.correo">
                            </div>
                        </div>
                        <div class="form-group">
                                <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text input-group-text-3"><i class="fas fa-mobile-alt"></i></span>
                                </div>
                                <input type="tel" class="form-control input_user" placeholder="Teléfono" readonly v-model="cliente.telefono">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text input-group-text-3"><i class="fas fa-map-marker-alt"></i></span>
                                </div>
                                <input type="text" class="form-control input_user" placeholder="Dirección" readonly v-model="cliente.direccion">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="buscarclientexcarrito" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header header-buscar">
                        <h5 class="modal-title">Cliente</h5>
                        <button type="button" class="close" v-on:click="limpiarCampos" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text input-group-text-3"><i class="fas fa-id-card"></i></span>
                                </div>
                                <input type="text" class="form-control input_user" placeholder="ID cliente" readonly v-model="cliente.idCliente">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text input-group-text-3"><i class="fas fa-barcode"></i></span>
                                </div>
                                <input type="text" class="form-control input_user" placeholder="ID carrito" readonly v-model="cliente.idCarrito">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text input-group-text-3"><i class="fas fa-user"></i></span>
                                </div>
                                <input type="text" class="form-control input_user" placeholder="Nombre" readonly v-model="cliente.nombre">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text input-group-text-3"><i class="fas fa-user"></i></span>
                                </div>
                                <input type="text" class="form-control input_user" placeholder="Apellidos" readonly v-model="cliente.apellidos">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text input-group-text-3"><i class="fas fa-at"></i></span>
                                </div>
                                <input type="email" class="form-control input_user" placeholder="Correo" readonly v-model="cliente.correo">
                            </div>
                        </div>
                        <div class="form-group">
                                <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text input-group-text-3"><i class="fas fa-mobile-alt"></i></span>
                                </div>
                                <input type="tel" class="form-control input_user" placeholder="Teléfono" readonly v-model="cliente.telefono">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text input-group-text-3"><i class="fas fa-map-marker-alt"></i></span>
                                </div>
                                <input type="text" class="form-control input_user" placeholder="Dirección" readonly v-model="cliente.direccion">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="buscarcarrito" tabindex="-1" role="dialog" aria-hidden="true">
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
        <div class="modal fade" id="nuevocliente" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header header-agregar">
                        <h5 class="modal-title">Nuevo cliente</h5>
                        <button type="button" class="close" v-on:click="limpiarCampos" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body d-flex justify-content-center form_container">
                        <form v-on:submit.prevent="newClient">
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-2"><i class="fas fa-id-card"></i></span>
                                    </div>
                                    <input type="text" class="form-control input_user" placeholder="ID cliente" required autocomplete="off" v-model="cliente.idCliente">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-2"><i class="fas fa-barcode"></i></span>
                                    </div>
                                    <input type="text" class="form-control input_user" placeholder="ID carrito" required autocomplete="off" v-model="cliente.idCarrito">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-2"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" class="form-control input_user" placeholder="Nombre" required autocomplete="off" v-model="cliente.nombre">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-2"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" class="form-control input_user" placeholder="Apellidos" required autocomplete="off" v-model="cliente.apellidos">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-2"><i class="fas fa-at"></i></span>
                                    </div>
                                    <input type="email" class="form-control input_user" placeholder="Correo" required autocomplete="off" v-model="cliente.correo">
                                </div>
                            </div>
                            <div class="form-group">
                                    <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-2"><i class="fas fa-mobile-alt"></i></span>
                                    </div>
                                    <input type="tel" class="form-control input_user" placeholder="Teléfono" required autocomplete="off" v-model="cliente.telefono">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-2"><i class="fas fa-map-marker-alt"></i></span>
                                    </div>
                                    <input type="text" class="form-control input_user" placeholder="Dirección" required autocomplete="off" v-model="cliente.direccion">
                                </div>
                            </div>
                            <button class="btn btn-success" type="submit">Crear</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="actualizarcliente" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header header-actualizar">
                        <h5 class="modal-title">Actualizar Cliente</h5>
                        <button type="button" class="close" v-on:click="limpiarCampos" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body d-flex justify-content-center form_container">
                        <form v-on:submit.prevent="updateClient">
                            <div class="form-group">
                                <div class="input-group">
                                    <input type="search" class="form-control" placeholder="ID del cliente" required autocomplete="off" v-model="cliente.idCliente">
                                    <div class="input-group-append">
                                        <button class="btn btn-warning" type="button"><i class="fas fa-search" v-on:click="searchCliente"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-4"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" class="form-control input_user" placeholder="Nombre" required autocomplete="off" v-model="cliente.nombre">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-4"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" class="form-control input_user" placeholder="Apellidos" required autocomplete="off" v-model="cliente.apellidos">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-4"><i class="fas fa-at"></i></span>
                                    </div>
                                    <input type="email" class="form-control input_user" placeholder="Email" required autocomplete="off" v-model="cliente.correo">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-4"><i class="fas fa-mobile-alt"></i></span>
                                    </div>
                                    <input type="tel" class="form-control input_user" placeholder="Teléfono" required autocomplete="off" v-model="cliente.telefono">
                                </div>
                            </div>
                            <div class="form-group">
                                    <div class="input-group mb-3">
                                        <div class="input-group-append">
                                            <span class="input-group-text input-group-text-4"><i class="fas fa-map-marker-alt"></i></span>
                                        </div>
                                        <input type="text" class="form-control input_user" placeholder="Dirección" required autocomplete="off" v-model="cliente.direccion">
                                </div>
                            </div>
                            <button class="btn btn-warning" type="submit">Actualizar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="eliminarcliente" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header header-eliminar">
                        <h5 class="modal-title">Eliminar Cliente</h5>
                        <button type="button" class="close" v-on:click="limpiarCampos" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body d-flex justify-content-center form_container">
                        <form v-on:submit.prevent="deleteClient">
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-1"><i class="fas fa-id-card"></i></span>
                                    </div>
                                    <input type="text" class="form-control input_user" placeholder="ID cliente" required autocomplete="off" v-model="cliente.idCliente">
                                </div>
                            </div>
                            <button class="btn btn-danger" type="submit" >Eliminar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="table tabla">
            <table class="table table-striped">
                <tr>
                    <th>ID cliente</th>
                    <th>ID carrito</th>
                    <th>Nombre</th>
                    <th>Apellidos</th> 
                    <th>Email</th>
                    <th>Teléfono</th>
                    <th>Dirección</th>
                </tr>
                <tr v-for="cliente in clientes_list" v-bind:key="cliente">
                    <td>{{cliente.idCliente}}</td>
                    <td>{{cliente.idCarrito}}</td>
                    <td>{{cliente.nombre}}</td>
                    <td>{{cliente.apellidos}}</td>
                    <td>{{cliente.correo}}</td>
                    <td>{{cliente.telefono}}</td>
                    <td>{{cliente.direccion}}</td>
                </tr>
            </table>
        </div>
  </div>
</template>
<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import Swal from 'sweetalert2';
export default defineComponent({
    name: "Clientes",
    data: function(){
        return{
            cliente: {
                idCliente: "",
                idCarrito: "",
                correo: "",
                nombre: "",
                apellidos: "",
                direccion: "",
                telefono: ""
            },
            carrito: {
                id:"",
                cantidad_productos: "",
                productos: [],
                precioTotal: ""
            },
            clientes_list: []
        }
    },
    methods: {
        limpiarCampos(){
            this.cliente.idCliente = ""
            this.cliente.idCarrito = ""
            this.cliente.correo = ""
            this.cliente.nombre = ""
            this.cliente.apellidos = ""
            this.cliente.direccion = ""
            this.cliente.telefono = ""
            this.carrito.id=""
            this.carrito.cantidad_productos=""
            this.carrito.precioTotal=""
            this.carrito.productos= []
        },
        newClient(){
            var cliente = this.cliente;
            axios.post("https://gamezone-e-commerce-backend.herokuapp.com/nuevoCliente/"+ cliente.idCliente +"/"+ cliente.idCarrito, cliente).then((response) => {
                this
                console.log(response, cliente);
                Swal.fire({
                    icon: 'success',
                    title:"Se ha creado el cliente "+cliente.nombre + " "+ cliente.apellidos,
                });
                }).catch(function(error){
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: error.response.data,
                });
            });
        },
        searchCliente(){
            var cliente = this.cliente;
            axios.get("https://gamezone-e-commerce-backend.herokuapp.com/verCliente/" + cliente.idCliente).then((response) => {
                this.cliente = response.data;
                console.log(response, cliente);
                }).catch(function(error){
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: error.response.data,
                });
            });
        },
        updateClient(){
            var cliente = this.cliente;
            axios.put('https://gamezone-e-commerce-backend.herokuapp.com/actualizarCliente/' + cliente.idCliente, cliente).then((response) => {
                this
                console.log(response, cliente);
                Swal.fire({
                    icon: 'success',
                    title: 'Se ha actualizado el cliente',
                });
                }).catch(function(error){
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: error.response.data,
                });
            });
        },
        deleteClient(){
            var cliente = this.cliente;
            axios.delete('https://gamezone-e-commerce-backend.herokuapp.com/eliminarCliente/' + cliente.idCliente).then((response) => {
                this
                console.log(response);
                 Swal.fire({
                    icon: 'success',
                    title: 'Se ha eliminado el cliente',
                });
            }).catch(function(error){
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: error.response.data,
                });
            });
        },
        searchClienteXCarrito(){
            var cliente = this.cliente;
            axios.get('https://gamezone-e-commerce-backend.herokuapp.com/verClienteXCarrito/' + cliente.idCarrito).then((response) => {
                this.cliente = response.data;
                console.log(response, cliente);
                }).catch(function(error){
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: error.response.data,
                });
            });
        },
        searchCarrito(){
            var carrito = this.carrito;
            var cliente = this.cliente
            axios.get("https://gamezone-e-commerce-backend.herokuapp.com/verCarritoXCliente/" + cliente.idCliente).then((response) => {
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
        allClientes(){
            this.clientes_list = [];
            axios.get("https://gamezone-e-commerce-backend.herokuapp.com/verClientes").then((response) => {this.clientes_list = response.data}).catch(function(error){
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