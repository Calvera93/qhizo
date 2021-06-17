import { db, auth } from "boot/firebase";
const state = {
  DetallesUsuario: {}
};
const mutations = {
  setDetalleUsuario(state, payload) {
    state.DetallesUsuario = payload;
  }
};
const actions = {
  registarUsuario({}, payload) {
    auth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        db.ref("usuarios/" + auth.currentUser.uid).set({
          email: payload.email,
          nombre: payload.usuario,
          online: true
        });
        this.$router.push("/");
      });
  },
  iniciarsesion({}, payload) {
    auth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        this.$router.push("/contactos");
      });
  },
  CerrarSesion({state}) {
    db.ref("usuarios/" + state.DetallesUsuario.idUsuario).update({
      online:false 
    })
    auth.signOut();
    console.log("Cerrando sesion");
    this.$router.push("login");
  },
  authEstado({ commit }) {
    auth.onAuthStateChanged(user => {
      if (user) {
        const user =auth.currentUser.uid;
        db.ref("usuarios/" + user).once("value", snapshot => {
          let detallesUsuario = snapshot.val();
          commit("setDetalleUsuario", {
            email: detallesUsuario.email,
            nombre: detallesUsuario.nombre,
            idUsuario: auth.currentUser.uid
          });
        });
        db.ref("usuarios/" + user).update({
          online:true
        })
      } else {
        commit("setDetalleUsuario", {});
        //this.$router.push("/login");
      }
    });
  }
};
const getters = {};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
