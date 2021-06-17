<template>
  <q-page class="flex column">
     <q-banner class="text-center">
        El usuario esta desconectado
      </q-banner>
    <div class="q-pa-md column col justify-end">
     
      <q-chat-message
        v-for="item in mensajes"
        :key="item.id"
        :text="[item.mensaje]"
        :sent="item.from =='yo'? true:false"
        :bg-color="item.from=='yo'? 'red-12':'red-2'"
      />
    </div>

    <q-footer elevated class="q-pa-sm bg-black">
      <q-form  @submit="enviar" autocomplete="off">
        <q-input ref="caja" dark rounded autofocus outlined type="text" v-model="text" label="Escriba aquí" > 
        <template class="back">
          <q-btn text-color="white" icon="send" rounded type="submit" />
        </template>
      </q-input>
      </q-form>
      
    </q-footer>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      mensajes: [
        {
          mensaje: "hola como estas?",
          from: "yo"
        },
        {
          mensaje: "bien y tu ?",
          from: "otro"
        },
        {
          mensaje: "bien gracias",
          from: "yo"

        }
      ]
    };
  },
  methods: {
    enviar() {
      this.mensajes.push({
        from:'yo',
        mensaje:this.text
      })
    this.text=''
    this.$refs.caja.focus()
    }
  }
};
</script>
