<template>
  <div>
    <q-form @submit="loginRegistrar" class="q-gutter-md">
  
        <q-input
        v-if="tab=='registro'"
        filled
        v-model="datos.usuario"
        label="Apodo de Usuario"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor llene el campo']"
      />
      <q-input
        filled
        type="email"
        v-model="datos.email"
        label="Email"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Por favor escriba su contraseña',
          val =>  val.length > 7|| 'Escriba una contraseña mayor de 8 digitos'
        ]"
      />

      <q-input
        filled
        type="password"
        v-model="datos.password"
        label="Contraseña"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Por favor escriba su contraseña',
          val =>  val.length > 7|| 'Escriba una contraseña mayor de 8 digitos'
        ]"
      />

      <q-toggle v-if="tab=='registro'" v-model="terminos" label="I accept the license and terms" />

      <div class="row">
        <q-space />
        <q-btn label="Listo" type="submit" color="primary" />
        <q-space />
      </div>
    </q-form>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  props: ["tab"],
  data() {
    return {
      datos: {
        usuario: "yoyolo",
        email: "calveray@gmail.com",
        password: "12345678",
      },
      terminos:false
    };
  },
  methods: {
    ...mapActions('store',['registarUsuario','iniciarsesion']),
    loginRegistrar() {
      if(this.tab=='login'){
        this.iniciarsesion(this.datos)
      }else{
        this.registarUsuario(this.datos)
      }
    }
  }
};
</script>

<style>
</style>