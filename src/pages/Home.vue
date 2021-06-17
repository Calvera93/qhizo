<template>
  <q-layout view="hHr LpR lFf" class="q-pa-md">
    <q-card dark bordered class="bg-grey-9 my-card absolute-center">
      <q-card-section>
        <div class="text-h6">Bienvenido</div>
        <div class="text-subtitle2">a Qhizo</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>Un intento de red social Desarrolla por un colombiano , luego hago una mejor introduccion jajaja</q-card-section>
      <q-card-section class="q-pa-md">
        <q-btn
          text-color="white"
          color="primary"
          class="absolute-center btnlogin"
          icon="account_circle"
          to="/login"
        >
          Iniciar sesión
          <br />Registrarse
        </q-btn>
      </q-card-section>
    </q-card>
    <q-footer elevated class="q-pa-md">Desarrolado por: Edwin Calvera</q-footer>
  </q-layout>
</template>
<script>
export default {
    
};
</script>
<style>
.my-card {
  min-width: 300px;
}
</style>