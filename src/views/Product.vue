<template>
    <div class="container">
      <table class="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">Categoria</th>
            <th scope="col">Codigo</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.category_id }}</td>
            <td>{{ product.codigo }}</td>
            <td>{{ product.nombre }}</td>
            <td>{{ product.descripcion }}</td>
            <td>{{ product.precio }}</td>
            <td>{{ product.cantidad }}</td>
            <td>{{ product.estado }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  /* import Swal from "sweetalert2"; */
  export default {
    name: "Product",
    data() {
      return {
        products: "",
      };
    },
    mounted() {
      this.getProducts();
      /* Swal.fire("The Internet?", "That thing is still around?", "question"); */
    },
    methods: {
      async getProducts() {
        try {
          const response = await axios.get("http://127.0.0.1:8000/api/product");
          console.log(response.data.producto);
          this.products = response.data.producto;
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>