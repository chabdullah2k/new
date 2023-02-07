<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-6">
                    <div class="mb-3">
                        <label for="">Método de pago</label>
                        <select class="form-select" aria-label="Default select example" v-model="order.pay_id">
                            <option selected>seleccione una opcion del menu..</option>
                            <option v-for="pay in pays" :key="pay.id" :value="pay.id">{{pay.metodo_pago}}</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="">Dirección de envio</label>
                        <select class="form-select" aria-label="Default select example" v-model="order.site_id">
                            <option selected>seleccione una opcion del menu..</option>
                            <option v-for="site in sites" :key="site.id" :value="site.id">{{site.direccion}}
                                {{site.barrio}}</option>
                        </select>
                    </div>
                    {{order}}
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>

            </div>
        </form>
    </div>
</template>
  
<script>
import axios from "axios";
export default {
    name: "Order",
    data() {
        return {
            pays: "",
            sites: "",
            order: {
                pay_id: "",
                site_id: ""
            }
        };
    },
    mounted() {
        this.getPays();
        this.getSites();
    },
    methods: {
        async getPays() {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/pay");
                this.pays = response.data.pago;
                console.log(this.pays);
            } catch (error) {
                console.error(error);
            }
        },
        async getSites() {
            try {
                const user_id = localStorage.getItem("user_id")
                const response = await axios.get(`http://127.0.0.1:8000/api/site/${user_id}/`);
                this.sites = response.data.domicilio;
                console.log(this.sites);
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>