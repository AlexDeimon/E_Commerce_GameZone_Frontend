<template>
    <div class="container contenedor1">
        <div class="card">
            <div class="card-body">
                <ul class="nav nav-tabs">
                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#signIn">Inicia sesión</a></li>
                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#signup">Regístrate</a></li>
                </ul>
                <div class="tab-content">
                    <div id="signIn" class="container tab-pane active">
                        <h2>Bienvenido</h2>
                        <form v-on:submit.prevent="singInForm">
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                </div>
                                <input autocomplete="off" type="email" class="form-control" placeholder="Ingrese email" v-model="singIn.email"/>
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                                </div>
                                <input type="password" class="form-control" placeholder="Ingrese password" v-model="singIn.password"/>
                            </div>
                            <div class="d-flex justify-content-center login_container">
                                <button type="submit" class="nav-menu_button btn5">Ingresar</button>
                            </div>
                        </form>
                    </div>
                    <div id="signup" class="container tab-pane">
                        <h2>Regístrate</h2>
                        <form v-on:submit.prevent="singUpForm">
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                </div>
                                <input autocomplete="off" type="email" class="form-control" placeholder="Ingrese email" v-model="singUp.email"/>
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                                </div>
                                <input type="password" class="form-control" placeholder="Ingrese password" v-model="singUp.password"/>
                            </div>
                            <div class="d-flex justify-content-center login_container">
                                <button type="submit" name="button" class="nav-menu_button btn5">Registrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import Swal from 'sweetalert2';
import {auth} from '../firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
export default defineComponent({
    name: "Auth",
    data: function(){
        return {
            singIn: {
                email: "",
                password: ""
            },
            singUp: {
                email: "",
                password: ""
            },
        }
    },
    methods:{
        singUpForm(){
            if(this.singUp.email.length == 0 || !this.singUp.email.includes('@') || !this.singUp.email.includes('mail') || !this.singUp.email.includes('.co')){
                Swal.fire({
                    icon: 'warning',
                    title: 'El correo que intentas registrar es invalido'
                });
            }
            else if(this.singUp.password.length < 8 || (!this.singUp.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/))) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Tu contraseña debe tener al menos una letra mayúscula y mínimo 8 caracteres alfanuméricos'
                });
            }else {
                //* Authenticate the User
                createUserWithEmailAndPassword(auth, this.singUp.email, this.singUp.password).then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Registro exitoso!'
                    });
                }).catch(() => {
                    Swal.fire({
                        icon: 'error',
                        title: 'El correo que intentas registrar ya existe!'
                    });
                });
            }
        },
        singInForm(){
            signInWithEmailAndPassword(auth, this.singIn.email, this.singIn.password).then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Autenticación exitosa!'
                });
                this.$emit('log-in', this.singIn.email);
            }).catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Parece que tu correo no está registrado o te has equivocado en tu contraseña!'
                });
            });
        }
    }
});
</script>
<style>
h2 {
    margin: 10px;
    color: #ffffff;
}
.form-control {
    border-radius: 0 0.25em 0.25em 0;
}
.contenedor1{
  text-align: center;
  max-width: 320px;
  margin: 0 auto;
  background: #000000;
  border-color: #ffffff;
  border-width: 1px;
  border-style: solid;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 2px rgb(255, 255, 255);
}
.contenedor1 .card{
  background-color: transparent;
}
.card-body {
    padding: 0 0 15px 0;
}
.nav-item a{
    color: red 
}
.nav-tabs .nav-item.show .nav-link, 
.nav-tabs .nav-link.active {
    color: red;
    background-color: #000000;
    border-bottom-color: #000000;
}

</style>
