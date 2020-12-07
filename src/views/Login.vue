<template>
  <v-card width="500px" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1 mx-auto">ログイン</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          type="email"
          v-model="email"
          prepend-icon="mdi-account"
          size="large"
          label="メールアドレス"
        ></v-text-field>
        <v-text-field
          v-model="password"
          v-bind:type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
          prepend-icon="mdi-lock"
          v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          label="パスワード"
        ></v-text-field>
        <v-btn
          class="mt-5"
          @click="register()"
          color="green" 
          dark large retain-focus-on-click block
          align="center"
        >ログイン</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data: function () {
    return {
      email: "",
      password: "",
      showPassword: false,
    };
  },

  methods: {
    register: function () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          alert(`${user.email} ログイン`),
          this.$router.push("/")
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>