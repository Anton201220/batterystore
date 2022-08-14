import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import store from './store'
import firebase from "firebase/app"
import router from './router'

Vue.use(Buefy)
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAYyiwyRhgChQfDk8EkYkIbd5zTIC990g8",
    libraries: 'places', // This is required if you use the Autocomplete plugin
  }
}),
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyA_ZN-dAx8dfvR8D-ae6VNWZevlr8M4Sk8",
  authDomain: "battarystore-3f567.firebaseapp.com",
  databaseURL: "https://battarystore-3f567-default-rtdb.firebaseio.com",
  projectId: "battarystore-3f567",
  storageBucket: "battarystore-3f567.appspot.com",
  messagingSenderId: "995074366929",
  appId: "1:995074366929:web:299bd1eb8b4d2336e914f0",
  measurementId: "G-1Z39P6LFE2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
