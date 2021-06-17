<template>
  <div id="q-app">
    <keep-alive>
    <router-view />
    
    </keep-alive>
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapActions('store',['authEstado']),
  },
  mounted(){
    this.authEstado()
  }

}
</script>
