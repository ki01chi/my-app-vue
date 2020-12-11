<template>
  <v-card>
    <v-card-title>俳句を詠む</v-card-title>
    <v-card-text>
      <v-form ref="form">
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="名前を入力してください"
              v-model="returnData.name"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="上の句"
              v-model="returnData.text1"
              :rules="rules"
              counter="10"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="中の句"
              v-model="returnData.text2"
              :rules="rules"
              counter="10"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="下の句"
              v-model="returnData.text3"
              :rules="rules"
              counter="10"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="success" @click="submit" x-large> 投稿する </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    text1: {
      type: String,
    },
    text2: {
      type: String,
    },
    text3: {
      type: String,
    },
  },

  data: function () {
    return {
      returnData: {
        name: this.name,
        text1: this.text1,
        text2: this.text2,
        text3: this.text3,
      },
      rules: [(v) => (!!v && 10 >= v.length) || `10文字以内で入力してください`],
    };
  },
  methods: {
    submit() {
      this.$emit("click-submit", this.returnData);
      this.$refs.form.reset();
    },
  },
};
</script>