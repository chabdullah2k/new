<template>
    <div class="container">
    <div class="row">
      <div class="col" v-for="product in products" :key="product.id">

        <div class="card" style="width: 18rem">
          <img src="https://images.samsung.com/is/image/samsung/mx-feature-the-real-4k-uhd-tv-61781423?$FB_TYPE_A_MO_JPG$" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{product.nombre}}</h5>
            <p class="card-text">
              {{product.descripcion}}
            </p>
            <hr>
            <small>Precio: ${{product.precio}}</small>
            <br>
            
            <a href="#" class="btn btn-sm btn-primary me-2">Agregar</a>
            <router-link :to="{name:'OrderDetail',params:{idProduct:product.id}}">
              <a href="#" class="btn btn-sm btn-primary">Ver mas</a>
            </router-link>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'ProductOrder',
    data() {
        return {
            products: [],
           
        }
    },
    mounted(){
        this.getProducts();
    },
    methods: {
        async getProducts(){
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/product");
                console.log(response.data.producto);
                this.products = response.data.producto;
            } catch (error) {
                console.error(error);
            }
        },
      
      
    },


}
</script>