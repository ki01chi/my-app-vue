<template>
  <v-app id="app">
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 游明朝体, sans-serif;
  color: $color-default;
}

.link {
  margin-top: 80px;
}
</style>