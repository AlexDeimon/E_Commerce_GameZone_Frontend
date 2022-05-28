<template>
    <div class="container contenedor2">
        <div class="row justify-content-around">
            <button class="btn btn-success btn-crud" data-toggle="modal" data-target="#agregarproducto"><span class="text">Agregar</span><span class="icon"><i class="fas fa-plus"></i></span></button>
            <button class="btn btn-warning btn-crud" data-toggle="modal" data-target="#actualizarproducto"><span class="text">Actualizar</span><span class="icon"><i class="fas fa-edit"></i></span></button>
            <button class="btn btn-danger btn-crud" data-toggle="modal" data-target="#eliminarproducto"><span class="text">Eliminar</span><span class="icon"><i class="fas fa-trash"></i></span></button>
            <div class="input-group mb-3" style="width: auto">
                <input type="search" placeholder="Nombre del producto" required v-model="product.producto" >
                <div class="input-group-append">
                    <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#buscarproducto" v-on:click="searchProduct"><i class="fas fa-search"></i></button>
                </div>
            </div>
            <div class="input-group mb-3" style="width: auto">
                <input type="search" placeholder="Filtrar por categoría" required v-model="product.categoria">
                <div class="input-group-append">
                    <button class="btn btn-primary" v-on:click="productsByCategory"><i class="fas fa-search"></i></button>
                </div>
            </div>
            <button class="btn btn-primary btn-crud" v-on:click="allProducts"><span class="text">Ver Productos</span><span class="icon"><i class="fas fa-tasks"></i></span></button>
        </div>
        <div class="modal fade" id="buscarproducto" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header header-buscar">
                        <h5 class="modal-title">Producto</h5>
                        <button type="button" class="close" v-on:click="limpiarCampos" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text input-group-text-3"><i class="fas fa-gamepad"></i></span>
                                </div>
                                <input type="text" class="form-control" placeholder="Nombre producto" readonly v-model="product.producto">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text input-group-text-3"><i class="fas fa-align-justify"></i></span>
                                </div>
                                <textarea class="form-control" placeholder="Descripción" readonly v-model="product.descripcion"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text input-group-text-3"><i class="fas fa-dollar-sign"></i></span>
                                </div>
                                <input type="text" class="form-control" placeholder="Precio" readonly v-model="product.precio">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text input-group-text-3"><i class="fas fa-boxes"></i></span>
                                </div>
                                <input type="text" class="form-control" placeholder="Cantidad disponible" readonly v-model="product.stock">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text input-group-text-3"><i class="fas fa-tasks"></i></span>
                                </div>
                                <input type="text" class="form-control" placeholder="Categoría" readonly v-model="product.categoria">
                            </div>
                            <div class="form-group">
                                <img id="imgProduct" alt="Imagen producto" :src="imagenDesc">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="agregarproducto" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header header-agregar">
                        <h5 class="modal-title">Agregar Producto</h5>
                        <button type="button" class="close" v-on:click="limpiarCampos" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body d-flex justify-content-center form_container">
                        <form v-on:submit.prevent="createProduct" enctype="multipart/form-data">
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-2"><i class="fas fa-gamepad"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Nombre producto" v-model="product.producto" required autocomplete="off">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-2"><i class="fas fa-align-justify"></i></span>
                                    </div>
                                    <textarea class="form-control" placeholder="Descripción" v-model="product.descripcion" required></textarea>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-2"><i class="fas fa-dollar-sign"></i></span>
                                    </div>
                                    <input type="number" class="form-control" placeholder="Precio" v-model="product.precio" required autocomplete="off" step="100">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-2"><i class="fas fa-boxes"></i></span>
                                    </div>
                                    <input type="number" class="form-control" placeholder="Cantidad disponible" required autocomplete="off" v-model="product.stock">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-2"><i class="fas fa-tasks"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Categoría" required autocomplete="off" v-model="product.categoria">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group mb-3 dropZone2" id="dropZone">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-2"><i class="fas fa-file-image"></i></span>
                                    </div>
                                    <div class="div" v-on:click="clickDropZone" v-on:dragover.prevent="dragOver" v-on:dragleave.prevent="dragLeave" v-on:drop.prevent="drop($event)">
                                        <input type="file" class="form-control hide" id="file" required accept="image/*" v-on:change="clickImagen($event)">
                                        <img src="https://img.icons8.com/ios-glyphs/32/28a745/upload--v1.png" alt="icon file">
                                        <p>Arrastre la imagen o de click para subir la imagen</p> 
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-success" type="submit">Agregar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="actualizarproducto" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header header-actualizar">
                        <h5 class="modal-title">Actualizar Producto</h5>
                        <button type="button" class="close" v-on:click="limpiarCampos" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body d-flex justify-content-center form_container">
                        <form v-on:submit.prevent="updateProduct">
                            <div class="form-group">
                                <div class="input-group">
                                    <input type="search" class="form-control" placeholder="Nombre del producto" required autocomplete="off" v-model="product.producto">
                                    <div class="input-group-append">
                                        <button class="btn btn-warning" type="button"><i class="fas fa-search" v-on:click="searchProduct"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-4"><i class="fas fa-align-justify"></i></span>
                                    </div>
                                    <textarea class="form-control" placeholder="Descripción" v-model="product.descripcion"></textarea>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-4"><i class="fas fa-dollar-sign"></i></span>
                                    </div>
                                    <input type="number" class="form-control" placeholder="Precio" v-model="product.precio" required autocomplete="off" step="100">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-4"><i class="fas fa-boxes"></i></span>
                                    </div>
                                    <input type="number" class="form-control" placeholder="Cantidad disponible" v-model="product.stock" required autocomplete="off">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-4"><i class="fas fa-tasks"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Categoría" v-model="product.categoria" required autocomplete="off">
                                </div>
                            </div>
                            <button class="btn btn-warning" type="submit">Actualizar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="eliminarproducto" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header header-eliminar">
                        <h5 class="modal-title">Eliminar Producto</h5>
                        <button type="button" class="close" v-on:click="limpiarCampos" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body d-flex justify-content-center form_container">
                        <form v-on:submit.prevent="deleteProduct">
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text input-group-text-1"><i class="fas fa-gamepad"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Nombre producto"  required autocomplete="off" v-model="product.producto">
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
                    <th>Nombre producto</th> 
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Cantidad disponible</th>
                    <th>Categoria</th>
                </tr>
                <tr v-for="product in productList" v-bind:key="product">
                    <td>{{product.producto}}</td>
                    <td>{{product.descripcion}}</td>
                    <td>${{product.precio}}</td>
                    <td>{{product.stock}}</td>
                    <td>{{product.categoria}}</td>
                </tr>
            </table>
        </div>
  </div>
</template>
<script>
import axios from 'axios';
import { defineComponent } from 'vue';
import { storage } from '../firebase';
import { ref,  uploadBytes, deleteObject, getDownloadURL } from 'firebase/storage'
import Swal from 'sweetalert2';
export default defineComponent({
    name: "Productos",
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
            productList: [],
            imagen: null,
            imagenDesc: null,
        }
    },
    methods: {
        limpiarCampos(){
            this.product.id=""
            this.product.producto=""
            this.product.descripcion = ""
            this.product.precio = ""
            this.product.stock = ""
            this.product.categoria = ""
            this.product.cantidadCarrito = 0
            this.imagen = null
            this.imagenDesc = null
            const dropZone = document.getElementById('dropZone');
            dropZone.classList.remove('drop-zone--active');
        },
        clickImagen(e){
            this.imagen = e.target.files[0]
            console.log(this.imagen)
        },
        clickDropZone(){
            const fileInput = document.getElementById('file');
            fileInput.click();
        },
        dragOver(){
            const dropZone = document.getElementById('dropZone');
            dropZone.classList.add('drop-zone--active');
        }, 
        dragLeave(){
            const dropZone = document.getElementById('dropZone');
            dropZone.classList.remove('drop-zone--active');
        },
        drop(e){
            const fileInput = document.getElementById('file');
            fileInput.files = e.dataTransfer.files;
            this.imagen = fileInput.files[0];
            console.log(this.imagen);
        },
        createProduct(){
            var product = this.product;
            product.id = (Math.random().toString(10).slice(-4)).toString();
            axios.post("https://gamezone-e-commerce-backend.herokuapp.com/agregarProducto", product).then((response) => {
                this
                console.log(response, product);
                const refImg = ref(storage,'imagenes/'+this.product.id );
                uploadBytes(refImg, this.imagen).then(e => console.log(e));
                Swal.fire({
                    icon: 'success',
                    title: "Se ha añadido el producto " + product.producto,
                });
            }).catch(function(error) {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: error.response.data,
                });
            });
        },
        searchProduct(){
            var product = this.product;
            axios.get("https://gamezone-e-commerce-backend.herokuapp.com/verProducto/" + product.producto).then((response) => {
                this.product = response.data;
                getDownloadURL(ref(storage, 'imagenes/'+this.product.id)).then((url) => {
                    this.imagenDesc = url;
                });
                console.log(response, product);
                }).catch(function(error){
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: error.response.data,
                });
            });
        },
        updateProduct(){
            var product = this.product;
            axios.put(`https://gamezone-e-commerce-backend.herokuapp.com/actualizarProducto/${product.id}`, product).then((response) => {
                this
                console.log(response, product);
                Swal.fire({
                    icon: 'success',
                    title: 'Se ha actualizado el producto',
                });
                }).catch(function(error){
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: error.response.data,
                });
            });
        },
        deleteProduct(){
            var product = this.product;
            axios.get("https://gamezone-e-commerce-backend.herokuapp.com/verProducto/" + product.producto).then((response) => {
                this.product = response.data;
                const refImg = ref(storage,'imagenes/'+this.product.id );
                deleteObject(refImg).then(e => console.log(e));
                axios.delete('https://gamezone-e-commerce-backend.herokuapp.com/eliminarProducto/' + product.producto).then((response) => {
                    this
                    console.log(response);
                    Swal.fire({
                        icon: 'success',
                        title: 'Se ha eliminado el producto',
                    });
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
        productsByCategory(){
            var product = this.product
            this.productList = [];
            axios.get("https://gamezone-e-commerce-backend.herokuapp.com/verProductos/" + product.categoria).then((response) => {this.productList = response.data}).catch(function(error){
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: error.response.data,
                });
            });
        },
        allProducts(){
            this.productList = [];
            axios.get("https://gamezone-e-commerce-backend.herokuapp.com/verProductos").then((response) => {this.productList = response.data}).catch(function(error){
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
.hide {
    display: block;
    position: absolute;
    z-index: -1;
}
.form-group .dropZone2 {
    border: 2px dashed black;
}
.dropZone .div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    z-index: 10;
}
.form-group .drop-zone--active {
    border: 2px solid #28a745;
    color: #28a745;
}
.form-group #imgProduct {
    width: 200px;
    margin-left: auto;
    margin-right: auto;
}
</style>