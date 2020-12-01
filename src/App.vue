<template>
  <v-app id="app">
    <Header />
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

</style>