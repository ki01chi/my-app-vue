<template>
  <v-app id="app">
    <Header />
    <router-link to="/home" class="link">HOME</router-link>
    <router-link to="/about" class="link">ABOUT</router-link>
    <router-link to="/login" class="link">LOGIN</router-link>
    <router-link to="/register" class="link">REGISTER</router-link>
    <router-view></router-view>
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap');

    #app {
      font-family: 'Sawarabi Mincho', sans-serif;
    }

.link {
  margin-top: 80px;
}
</style>