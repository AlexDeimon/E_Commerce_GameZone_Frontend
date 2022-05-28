# E_commerce_Frontend

Componente web para aplicación de sistema de gestion de inventario para manipulación de los datos de la aplicación E-commerce GameZone desarrollado en Vue.js junto con Boostrap 4.

El objetivo del proyecto es brindar una interfaz de usuario agradable y sencilla de manejar para que un usuario (administrador de la tienda), tras un proceso de registro y autenticación por medio de un correo y contraseña, pueda gestionar facilmente la información de la aplicación que se registre en la aplicación.

El codigo tambien está realizado usando una arquitectura MVC en la cual el modelo esta definido por la función data, la vista está definida mediante templates HTML y styles CSS, y los controladores están definidos en los methods de cada view.
## Estructura ⚙️

**Carpeta public**

Carpeta donde se almacena el favicon de la aplicación junto con la plantilla index.html, donde se correra el proyecto Vue. 

**Carpeta src**
- **assets:** Almacenamiento de archivos estáticos como imágenes, videos, etc.
- **componets:** Componentes cuyo contenido es reutilizable varias veces dentro de otros componentes.
- **router:** Carpeta donde se almacena el archivo router (js o ts), en el cual se gestionan las rutas de la aplicación y los componentes que se carguen.
- **views:** Componentes utilizados para la renderización de las vistas de la aplicación (SPG), 4 de ellos definidos para la gestión de las 4 entidades de datos del sistema (productos, carrito de compras, clientes y compras); uno para el registro e inicio de sesión y uno de bienvenida.
- **App.vue:** Componente principal de la aplicación, desde donde se cargan los demás componentes mediante router.
- **firebase.js:** Archivo de configuración del SDK de firebase donde se exportan las APIs de authentication y de storage utilizadas en otros componentes.
- **main.ts:** Archivo principal que arranca el proyecto Vue y que se inserta en la plantilla index.html que se incluye en la carpeta public.

**Otros archivos**
- **gitignore:** Indica los archivos que Git debe ignorar al hacer el versionado.
- **Dockerfile:** Especifica los comandos con los cuales se crea la imagen del proyecto para su ejecución.
- **README:** Archivo actual de documentación sobre el proyecto.
- **package-lock.json:** Histórico de versionado de apoyo para el package.json. 
- **package.json:** Configuración del proyecto, usando NPM.
- **tsconfig.json:** Detalles de configuración y compilación de TypeScript.
- **vue.config.js:** Fichero general de configuración del proyecto Vue.
## Entendiendo el código 💻

### Archivos .vue

En los archivos .vue se puede escribir código de las 3 tecnologías principales del frontend: HTML, Javascript y CSS.

```
<template>
  <!-- Código HTML -->
</template>

<script>
  // Código Javascript
</script>

<style>
  /* Código CSS */
</style>
```

- **template:** Representa la plantilla que contiene el contenido HTML del componente. Dentro de este es posible realizar bucles, condicionales y otras acciones directamente desde las etiquetas HTML mediante directivas de Vue.
- **script:** Contiene todo código Javascript de Vue relacionado con el componente. La estructura básica de esta parte consta de un export default, el cual, tiene como argumento un objeto que, como mínimo, debe tener la propiedad name con el nombre que se le da al componente.
También son importantes las siguientes propiedades:
- **data:** Contiene una función que retorna las variables y estructuras de datos que utilizará el componente.
- **methods:** Contiene todas las funciones Javascript que utilizará el componente.
```
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Productos",
    data: function(){
        return {
            ...
        }
    },
    methods:{
        ...
    }
});
```
- **style:** Indica los estilos CSS implicados con el componente. En el caso de App.vue este indica estilos globales o generales que se pueden heredar en los demás componentes.

**Directivas de Vue**

Son atributos especiales que se colocan en las etiquetas HTML y están prefijados por v-. Permiten realizar acciones dinámicas potentes (bucles, condicionales, etc) que no se pueden realizar en HTML por si solo.
- **v-model:** Permite crear un modelo de datos bidireccional entre un elemento HTML concreto y una variable de Vue. ¿Qué significa esto? Significa que podemos sincronizar el contenido de una variable con el contenido que tenga un elemento HTML <input> (por ejemplo) en su atributo value.
```
<template>
    <input v-model="product.producto" >
</template>
<script>
    export default defineComponent({
        name: "Productos",
        data: function(){
            return{
                product: {
                    id: "",
                    producto: "",
                    ...
                },
            }
        },
        ...
    })
</script>
```
- **v-on:** Es una directiva utilizada para gestionar los eventos del DOM desde los templates de Vue.  
```
<template>
    <button v-on:click="allProducts">Ver Productos</button>
</template>
<script>
    export default defineComponent({
    name: "Productos",
    data: function(){
        return(){
            ...
            productList: [],
            ...
        }
    },
    methods: {
        ...
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
</script>
```
- **v-if:** Permite establecer condiciones directamente en el etiquetado HTML, sin tener que recurrir a lógica Javascript o realizar código más complejo. 
```
<template>
    <ul class="nav-menu" id="nav-menu" v-if="is_auth">
</template>
<script>
    export default defineComponent({
        name: "App",
        data: function(){
            return{ 
                is_auth: sessionStorage.getItem('isAuth') || false
            }  
        },
        ...
    })    
</script>
```
- **v-for:** Se basa en la posibilidad de crear un bucle for desde las templates de código HTML de Vue basado en el bucle forEach de Javascript.
```
<template>
    <table class="table table-striped">
        <tr>
        ...
        </tr>
        <tr v-for="product in productList" v-bind:key="product">
            <td>{{product.producto}}</td>
            <td>{{product.descripcion}}</td>
            <td>${{product.precio}}</td>
            <td>{{product.stock}}</td>
            <td>{{product.categoria}}</td>
        </tr>
    </table>
</template>
<script>
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
            },
            productList: [],
            ...
        }
    },
    ...
</script>
```
### router/index.ts 
- Lo primero dentro del archivo index.ts de router es importar los componentes a los cuales se les definirán las rutas:
- Se definen cada una de las rutas mediante un Array<RouteRecordRaw>, el cual almacena objetos con las propiedades de: la ruta, el nombre asignado y el componente asignado.
- Se crea y exporta una instancia del router proporcionando la implementación de historial que se utilizará.
```
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Auth from '../views/Auth.vue';
import Productos from '../views/Productos.vue';
...

const routes: Array<RouteRecordRaw> = [
  {
    path: '/userAuth',
    name: "Auth",
    component: Auth
  }, 
  {
    path: "/Productos",
    name: "Productos",
    component: Productos
  },
  ...
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
```
## Componente web desplegado ✅
El despliegue del componente web se realizó en Heroku y se puede acceder a este mediante la URL https://gamezone-ms-app.herokuapp.com

## Herramientas utilizadas 🛠️
- Firebase - SDK de Firebase para poder realizar procesos de autenticación de usuario y almacenamiento de archivos.
- node - Manejador de dependencias del proyecto.
- Vue.js - Framework de JavaScript utilizado.
- router - Librería para la gestión de rutas del proyecto.
- sweetalert - Librería para mejora de las alertas del proyecto.
- Bootstrap - Framework de CSS utilizado.
- Axios - Librería para realizar las peticiones a la API Rest del backend.
- Docker - Herramienta para crear contenedor del proyecto haciendo más facil su despliegue y ejecución.
- Heroku - Plataforma como servicio (PaaS) utilizada para desplegar el componente web en la nube.
