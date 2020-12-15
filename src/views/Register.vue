<template>
  <div class="container">
    <v-card width="500px" class="mx-auto mt-16 pa-10">
      <v-card-title>
        <h2 class="v-card-title mx-auto">新規登録</h2>
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
            v-bind:type="show ? 'text' : 'password'"
            @click:append="show = !show"
            prepend-icon="mdi-lock"
            v-bind:append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            label="パスワード"
          ></v-text-field>
          <v-btn
            class="register-btn mt-5"
            @click="register()"
            color="warning"
            dark
            large
            retain-focus-on-click
            block
            >登録</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
    <v-alert
      class="v-alert mx-auto mt-10"
      border="top"
      max-width="500px"
      colored-border
      color="success"
      elevation="2"
    >
      <v-icon>mdi-login</v-icon>
      ご登録がお済みの方はこちら
      <v-btn 
        @click="$router.push('/login')"
        class="ms-5" 
        color="success" 
        dark 
        >利用開始
      </v-btn>
    </v-alert>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "register",
  data: function () {
    return {
      email: "",
      password: "",
      show: false,
    };
  },

  methods: {
    register: function () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then( () => {
          alert("新規登録完了しました"), this.$router.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.v-card-title {
  color: $color-default;
  letter-spacing: 1rem;
}

.register-btn span {
  font-size: 20px;
  letter-spacing: 1rem;
}
</style>