<template>
  <div>
    <div class="wrapButton">
      <v-btn 
        @click="dialog = true" 
        class="mt-10" 
        x-large
      >
        <v-icon left dark>mdi-lead-pencil</v-icon>
        俳句を詠む
      </v-btn>
    </div>
    <v-dialog 
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <dialog-card
        @clickSubmit="onSubmit"
        :name="name"
        :text="text"
      ></dialog-card>
    </v-dialog>
    <v-text-field v-model="name" label="なまえ" disabled></v-text-field>
    <v-text-field v-model="text1" label="上の句" disabled></v-text-field>
    <v-text-field v-model="text2" label="中の句" disabled></v-text-field>
    <v-text-field v-model="text3" label="下の句" disabled></v-text-field>
  </div>
</template>

<script>
import DialogCard from "../components/DialogCard";

export default {
  components: {
    DialogCard,
  },
  data() {
    return {
      name: "",
      text1: "",
      text2: "",
      text3: "",
      dialog: false,
    };
  },
  methods: {
    onSubmit(params) {
      this.dialog = false;
      this.name = params.name;
      this.text1 = params.text1;
      this.text2 = params.text2;
      this.text3 = params.text3;
    },
  },
};
</script>

<style>
  .wrapButton {
    text-align: center;
  }
</style>