import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDKRIE886p6vMabjpZDqdgh3B8KiYkisqI",
  authDomain: "my-app-vue-1b432.firebaseapp.com",
  projectId: "my-app-vue-1b432",
  storageBucket: "my-app-vue-1b432.appspot.com",
  messagingSenderId: "387674653383",
  appId: "1:387674653383:web:54d938125f7ff3d1e2b4e2",
  measurementId: "G-TL7J4PNFKV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
export const dbHaikus = db.collection('haikus');

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
