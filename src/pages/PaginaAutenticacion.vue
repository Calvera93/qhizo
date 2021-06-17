<template>
  <q-page class="flex flex-center">
   <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="login" label="Iniciar sesión" />

          <q-tab name="registro" label="Registrarse" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="login">
            <loginRegistro :tab="tab"/>
          </q-tab-panel>

          <q-tab-panel name="registro">
            <loginRegistro :tab="tab"/>

          </q-tab-panel>
        </q-tab-panels>
      </q-card>

  </q-page>
</template>

<script>
import loginRegistro from 'components/LoginRegistro.vue'
export default {
  data () {
    return {
      tab: 'login'
    }
  },
  components:{
    loginRegistro,
  },
}
</script>
