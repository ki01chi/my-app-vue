import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCVKWN1cepE4LP8QIqocqi-EFRnvC5Da6s",
  authDomain: "my-app-vue-acb7b.firebaseapp.com",
  projectId: "my-app-vue-acb7b",
  storageBucket: "my-app-vue-acb7b.appspot.com",
  messagingSenderId: "229490001481",
  appId: "1:229490001481:web:9c6c017335daa033102198",
  measurementId: "G-T3TGVWKPJ4"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
