<template>
  <div class="container">
    <v-alert
      class="v-alert mx-auto mt-10"
      max-width="500px"
      border="top"
      colored-border
      color="warning"
      elevation="2"
    >
      <v-icon>mdi-account</v-icon>
      初めての方はこちら
      <v-btn
        dark
        color="warning"
        class="ms-5"
        @click="$router.push('/register')"
        >新規登録</v-btn
      >
    </v-alert>
    <v-card width="500px" class="mx-auto mt-10 pa-10">
      <v-card-title>
        <h2 class="v-card-title mx-auto">利用開始</h2>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            type="email"
            v-model="email"
            prepend-icon="mdi-email"
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
            class="login-btn mt-5"
            @click="login()"
            color="green"
            dark
            large
            retain-focus-on-click
            block
            >入室する
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
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
    login: function () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert(`入室しました`), this.$router.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>

<style lang="scss">
.v-card-title {
  color: $color-default;
  letter-spacing: 1rem;
}

.login-btn span {
  font-size: 1.2rem;
  letter-spacing: 1rem;
}

.v-alert__content {
  text-align: center;
}
</style>