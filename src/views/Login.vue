<template>
    <div class="container">
      <legend>Disabled fieldset example</legend>
      <div class="mb-3">
        <label for="disabledTextInput" class="form-label">Correo</label>
        <input
          type="email"
          id="disabledTextInput"
          class="form-control"
          placeholder="Ingrese email"
          v-model="user.email"
        />
      </div>
  
      <div class="mb-3">
        <label for="disabledTextInput" class="form-label">Contraseña</label>
        <input
          type="password"
          id="disabledTextInput"
          class="form-control"
          placeholder="Ingrese su contraseña"
          v-model="user.password"
        />
      </div>
      <!-- {{user.password}} -->
      <a class="btn btn-primary" @click="iniciarSesion()">Iniciar Sesión</a>
    </div>
  </template>
  <script>
  import axios from "axios";
  import Swal from "sweetalert2";
  export default {
    name: "Login",
    data() {
      return {
        user: {
          email: "",
          password: "",
        },
      };
    },
    methods: {
      async iniciarSesion() {
        try {
          const response = await axios.post(
            "http://127.0.0.1:8000/api/auth/login",
            this.user
          );
          if (response.data.success == true) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user_id",response.data.user_id);
            Swal.fire({
              icon: "success",
              title: "Bienvenido",
              text: "Ud, su Loggin es correcto",
            });
            return this.$router.push({ name: "Home" });
          }else{
            if (localStorage.getItem("token")) {
              localStorage.removeItem("token")
            }
             Swal.fire({
              icon: "warning",
              title: "Credenciales erroneas",
            });
          }
        } catch (error) {}
      },
    },
  };
  </script>

























