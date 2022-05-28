<template>
    <div class="container contenedor2">
        <div class="row justify-content-around">
            <button class="btn btn-success btn-crud" data-toggle="modal" data-target="#crearcompra"><span class="text">Nueva</span><span class="icon"><i class="fas fa-dollar-sign"></i></span></button>
            <button class="btn btn-danger btn-crud" data-toggle="modal" data-target="#eliminarcompra"><span class="text">Eliminar</span><span class="icon"><i class="fas fa-trash"></i></span></button>
            <div class="input-group mb-3" style="width: auto">
                <input type="search" placeholder="Compra por ID Cliente" required v-model="compra.idCliente">
                <div class="input-group-append">
                    <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#buscarCompra" v-on:click="searchCompra"><i class="fas fa-search"></i></button>
                </div>
            </div>
            <div class="input-group mb-3" style="width: auto">
                <input type="date" placeholder="Filtrar por fecha" required v-model="compra.fecha">
                <div class="input-group-append">
                    <button class="btn btn-primary" v-on:click="comprasByFecha"><i class="fas fa-search"></i></button>
                </div>
            </div>
            <button class="btn btn-primary btn-crud" v-on:click="allCompras"><span class="text">Ver Compras</span><span class="icon"><i class="fas fa-tasks"></i></span></button>
        </div>
        <div class="modal fade" id="crearcompra" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header header-agregar">
                        <h5 class="modal-title">Crear Compra</h5>
                        <button type="button" class="close" v-on:click="limpiarCampos" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body d-flex justify-content-center form_container">
                        <form v-on:submit.prevent="newCompra">
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-2"><i class="fas fa-id-card"></i></span>
                                    </div>
                                    <input type="text" class="form-control input_user" placeholder="ID cliente" v-model="compra.idCliente">
                                </div>
                            </div>
                            <button class="btn btn-success" type="submit">Crear</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="eliminarcompra" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header header-eliminar">
                        <h5 class="modal-title">Eliminar Compra</h5>
                        <button type="button" class="close" v-on:click="limpiarCampos" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body d-flex justify-content-center form_container">
                        <form v-on:submit.prevent="deleteCompra">
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-1"><i class="fas fa-barcode"></i></span>
                                    </div>
                                    <input type="text" class="form-control input_user" placeholder="ID compra" v-model="compra.id">
                                </div>
                            </div>
                            <button class="btn btn-danger" type="submit" >Eliminar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="buscarCompra" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header header-buscar">
                        <h5 class="modal-title">Compra</h5>
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
                                <input type="text" class="form-control input_user" placeholder="ID compra" readonly v-model="compra.id">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text input-group-text-3"><i class="fas fa-id-card"></i></span>
                                </div>
                                <input type="text" class="form-control input_user" placeholder="ID cliente" readonly v-model="compra.idCliente">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text input-group-text-3"><i class="fas fa-calendar-alt"></i></span>
                                </div>
                                <input type="text" class="form-control input_user" placeholder="Fecha" readonly v-model="compra.fecha">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="table tabla">
            <table class="table table-striped">
                <tr>
                    <th>ID Compra</th> 
                    <th>ID Cliente</th>
                    <th>Fecha</th>
                </tr>
                <tr v-for="compra in compras_list" v-bind:key="compra">
                    <td>{{compra.id}}</td>
                    <td>{{compra.idCliente}}</td>
                    <td>{{compra.fecha.substring(0,10)}}</td>
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
    name: "Compras",
    data: function(){
        return{
            compra: {
                id: "",
                idCliente: "",
                fecha: "",
            },
            compras_list: []
        }
    },
    methods: {
        limpiarCampos(){
            this.compra.id = ""
            this.compra.idCliente = ""
            this.compra.fecha = ""
        },
        newCompra(){
            var compra = this.compra;
            var nuevaFecha = new Date();
            compra.fecha = `${nuevaFecha}`
            axios.post("https://gamezone-e-commerce-backend.herokuapp.com/agregarCompra/"+ (Math.random().toString(10).slice(-4)).toString() +"/"+ compra.idCliente, compra).then((response) => {
                this
                console.log(response, compra);
                 Swal.fire({
                    icon: 'success',
                    title: "Se ha creado la compra con id: "+ response.data.id + " del cliente con id: "+ response.data.idCliente,
                });
                }).catch(function(error){
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: error.response.data,
                });
            });
        },
        deleteCompra(){
            var compra = this.compra;
            axios.delete('https://gamezone-e-commerce-backend.herokuapp.com/borrarCompra/' + compra.id).then((response) => {
                this
                console.log(response);
                 Swal.fire({
                    icon: 'success',
                    title: 'Se ha eliminado la compra',
                });
            }).catch(function(error){
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: error.response.data,
                });
            });
        },
        searchCompra(){
            var compra = this.compra;
            axios.get("https://gamezone-e-commerce-backend.herokuapp.com/verCompraXCliente/" + compra.idCliente).then((response) => {
                this.compra = response.data;
                console.log(response, compra);
                }).catch(function(error){
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: error.response.data,
                });
            });
        },
        comprasByFecha(){
            var compra = this.compra;
            axios.get('https://gamezone-e-commerce-backend.herokuapp.com/verComprasXFecha/' + compra.fecha).then((response) => {this.compras_list = response.data}).catch(function(error){
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: error.response.data,
                });
            });
        },
        allCompras(){
            this.compras_list = [];
            axios.get("https://gamezone-e-commerce-backend.herokuapp.com/verCompras").then((response) => {this.compras_list = response.data}).catch(function(error){
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