import Vue from "vue";
import App from "./App.vue";
import firebase from "firebase";

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyBMO0eP09bybSuKY6BzLLHjJqY3zCy_I_c",
  authDomain: "cheat-app-86312.firebaseapp.com",
  databaseURL: "https://cheat-app-86312.firebaseio.com",
  projectId: "cheat-app-86312",
  storageBucket: "cheat-app-86312.appspot.com",
  messagingSenderId: "371959594127",
  appId: "1:371959594127:web:d34c521cd601520a4f44fa",
  measurementId: "G-1XBQ6P5PF6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  render: (h) => h(App),
}).$mount("#app");
