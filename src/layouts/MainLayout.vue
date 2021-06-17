<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          dense
          round
          color="white"
          text-color="primary"
          icon="arrow_back"
          v-if="$route.fullPath !== '/'"
          @click="atras()"
        />

        <q-toolbar-title class="absolute-center">{{ title }}</q-toolbar-title>
        <div v-if="$route.fullPath !== '/login'">
          <q-btn
            text-color="white"
            flat
            class="absolute-right btnlogin"
            icon="account_circle"
            to="/login"
            v-if="!DetallesUsuario.idUsuario">
            Iniciar <br/>
            sesión
          </q-btn>

          <q-btn
            @click="CerrarSesion"
            text-color="white"
            flat
            class="absolute-right btnlogin"
            icon="account_circle"
            v-else
          >
            Cerrar <br/>
            sesión
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("store", ["DetallesUsuario"]),
    title() {
      let path = this.$route.fullPath;
      if (path == "/") return "Qhizo";
      else if(path =='/contactos')return "Contactos"
      else if (path == "/login") return "Inicio de sesión";
      else if (path == "/chat") return "Chat";
    }
  },
  methods: {
    ...mapActions("store", ['CerrarSesion']),

    atras() {
      try {
        this.$router.go(-1);
      } catch (error) {
        this.$router.push("/");
      }
    }
  }
};
</script>
<style>
.btnlogin {
  font-size: 10px;
}
</style>
