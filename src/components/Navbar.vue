<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Shopcenter 22</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" @click="home()" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" @click="listarProductos()">Productos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" @click="carritoCompra()">Carrito</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link cursor-pointer" aria-current="page" @click="iraRegistro()">Registrar</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" @click="iniciarSesion()">Iniciar sesión</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>

export default {
    name: "Navbar",
    methods: {
        home(){
            this.$router.push({name:"Login"})
        },
        listarProductos(){
            this.$router.push({name:"Product"})
        },
        iraRegistro(){
            this.$router.push({name:"Register"})
        },
        iniciarSesion(){
            this.$router.push({name:"Login"})
        },
        carritoCompra(){
            this.$router.push({name:"Order"})
        }
    }
    
}
</script>

