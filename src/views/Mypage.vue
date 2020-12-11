<template>
  <div class="container">
    <h2 class="userTitle mt-10">ようこそ、{{ currentUser }} さん</h2>
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

<style lang="scss">
.userTitle {
  text-align: center;
}
</style>
