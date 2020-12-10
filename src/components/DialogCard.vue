<template>
  <v-card>
    <v-card-title>俳句を詠む</v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field 
              label="名前を入力してください"
              v-model="returnData.name" 
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="上の句" v-model="returnData.text1" required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="中の句" v-model="returnData.text2" required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="下の句" v-model="returnData.text3" required></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="success" @click="submit" x-large>
        投稿する
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    name: {},
    text1: {},
    text2: {},
    text3: {}
  },
  data() {
    return {
      returnData: {
        name: this.name,
        text1: this.text1,
        text2: this.text2,
        text3: this.text3,
      }
    }
  },
  methods: {
    submit() {
      this.$emit('clickSubmit', this.returnData)
    }
  }
}
</script>