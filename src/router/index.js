import Vue from 'vue'
import VueRouter from 'vue-router'

import {
  auth
} from 'boot/firebase'
import routes from './routes'

Vue.use(VueRouter)



export default function ( /* { store, ssrContext } */ ) {
  const Router = new VueRouter({
    scrollBehavior: () => ({
      x: 0,
      y: 0
    }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })
  Router.beforeEach(async (to, from, next) => {
    const user = await new Promise((resolve, reject) => {
      auth.onAuthStateChanged(user => {
        resolve(user)
      })
    });
    
    let autorizacion = to.matched.some(record => record.meta.autenticado) 
    if (autorizacion && !user) {
      next('login')
    }else if (!autorizacion && user) {
      next('contactos');
    }
     else {
      next();
    }
  })





  return Router
}
