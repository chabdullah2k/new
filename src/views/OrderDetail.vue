<template>
    <div class="container">
        <section class="mt-4">
            <div class="card-body">
                <div class="row">
                    <div class="col-8">
                        <div style="width: 250px;">
                            <img src="https://images.samsung.com/is/image/samsung/mx-feature-the-real-4k-uhd-tv-61781423?$FB_TYPE_A_MO_JPG$" class="card-img-top" alt="imagen">
                        </div>
                        <div class="mt-2">
                            <h2>Codigo: {{product.codigo}}</h2>
                        </div>
                        <div class="mt-2">
                            <h2>Nombre: {{product.nombre}}</h2>
                        </div>
                        <h5>Descripción: {{product.descripcion}}</h5>
                        <h5>Precio: {{product.precio}}</h5>
                    </div>
                    <div class="col-4">
                        <a href="#" class="btn btn-primary" @click="selectProduct(product.id,product.precio)">agregar</a><br>
                        <strong><small>agregar cantidad</small></strong>
                        <input type="number" class="form-control mb-2 mt-2" v-model="cantidad">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'OrderDetail',
    data() {
        return {
            product: '',
            producto_seleccionado: [],
            cantidad: 0
        }
    },
    mounted(){
        //recuperamos el parametro de la vista ProductOrder para enviarlo al Backend
        console.log(this.$route.params.idProduct)
        this.getProduct(this.$route.params.idProduct)
        
    },
    methods: {
        async getProduct(id){
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/product/"+id);
                console.log(response.data.producto);
                this.product = response.data.producto;
            } catch (error) {
                console.error(error);
            }
        },
        selectProduct(id,precio){
          const producto = {
            cantidad: this.cantidad, 
            product_id: id,
            precio_total: precio*this.cantidad
          }
          this.producto_seleccionado.push(producto)
          console.log(this.producto_seleccionado)
        }
    }

}
</script>