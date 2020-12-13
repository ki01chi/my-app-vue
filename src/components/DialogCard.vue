<template>
  <v-row justify="center">
    <v-dialog hide-overlay v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mt-10" color="success" x-large :bind="attrs" v-on="on">
          <v-icon left dark>mdi-lead-pencil</v-icon>
          俳句を詠む
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">俳句を詠む</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="名前を入力してください"
                    v-model="name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="上の句"
                    v-model="text1"
                    :rules="rules"
                    counter="10"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="中の句"
                    v-model="text2"
                    :rules="rules"
                    counter="10"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="下の句"
                    v-model="text3"
                    :rules="rules"
                    counter="10"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="success"
            @click="
              submit();
              dialog = false;
            "
            x-large
          >
            投稿する
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    onPost: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
      name: "",
      text1: "",
      text2: "",
      text3: "",
      rules: [(v) => (!!v && 10 >= v.length) || `10文字以内で入力してください`],
    };
  },
  methods: {
    submit() {
      const newHaiku = this.createHaiku();
      this.onPost(newHaiku);
      this.name = "";
      this.text1 = "";
      this.text2 = "";
      this.text3 = "";
      this.$refs.form.reset();
    },
    createHaiku() {
      return {
        date: new Date().toLocaleString(),
        name: this.name,
        text1: this.text1,
        text2: this.text2,
        text3: this.text3,
      };
    },
  },
};
</script>