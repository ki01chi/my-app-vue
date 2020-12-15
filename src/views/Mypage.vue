<template>
  <div class="container">
    <v-icon x-large class="my-8">mdi-account-heart</v-icon>
    <h2 class="userTitle">ようこそ、{{ currentUser }} さん</h2>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      currentUser: firebase.auth().currentUser.email,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}
</style>
