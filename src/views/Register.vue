<template>
    <div class="container">
      <legend>Disabled fieldset example</legend>
      <div class="mb-3">
        <label for="disabledTextInput" class="form-label">Nombre</label>
        <input
          type="text"
          id="disabledTextInput"
          class="form-control"
          placeholder="Ingrese su nombre.."
          v-model="user.name"
        />
      </div>
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
  
      <a class="btn btn-primary" @click="registrarUsuario()">Registrar</a>
    </div>
  </template>
  <script>
  import axios from "axios";
  import Swal from "sweetalert2";
  export default {
    name: "Register",
    data() {
      return {
        user: {
          name: "",
          email: "",
          password: "",
        },
      };
    },
    methods: {
      async registrarUsuario() {
        try {
          const response = await axios.post(
            "http://127.0.0.1:8000/api/auth/register",
            this.user
          );
          console.log(response);
          
            localStorage.setItem("token", response.data.token);
            Swal.fire({
              icon: "success",
              title: "Bienvenido",
              text: "Ud, se ha registrado con exito",
            });
            this.$router.push({ name: "Home" });
          
          
        } catch (error) {
          /* console.log(error) */
          Swal.fire({
            icon: "error",
            title: "A ocurrido un error",
            text: "Email ya se encuentra registrado",
          });
        }
      },
    },
  };
  </script>