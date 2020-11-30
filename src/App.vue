<template>
  <v-app id="app">
    <Header />
  </v-app>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    Header
  }
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap');

    #app {
      font-family: 'Sawarabi Mincho', sans-serif;
    }

</style>