<template>
  <v-row justify="center" class="mx-auto">
    <v-dialog hide-overlay v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="my-10" color="success" x-large :bind="attrs" v-on="on">
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
                    counter="8"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="中の句"
                    v-model="text2"
                    :rules="rules"
                    counter="8"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="下の句"
                    v-model="text3"
                    :rules="rules"
                    counter="8"
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
import HaikuModel from "../models/Haiku";

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
      rules: [(v) => (!!v && 8 >= v.length) || `8文字以内で入力してください`],
    };
  },
  methods: {
    async submit() {
      try {
        const haiku = await HaikuModel.save({
          name: this.name,
          date: this.date,
          text1: this.text1,
          text2: this.text2,
          text3: this.text3,
        });
        this.onPost(haiku);
        this.$refs.form.reset();
      } catch (error) {
        alert(error.message);
      }
      }
    },
};
</script>

<style lang="scss" scoped>
.headline {
  text-align: center;
}
</style>