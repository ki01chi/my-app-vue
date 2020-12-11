<template>
  <div>
    <div class="buttonWrap">
      <v-btn @click="dialog = true" class="mt-10" x-large>
        <v-icon left dark>mdi-lead-pencil</v-icon>
        俳句を詠む
      </v-btn>
    </div>
    <v-dialog v-model="dialog" max-width="600px">
      <dialog-card
        @click-submit="onSubmit"
        :name="name"
        :text1="text1"
        :text2="text2"
        :text3="text3"
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
  data: function () {
    return {
      dialog: false,
      name: "",
      text1: "",
      text2: "",
      text3: "",
    };
  },
  methods: {
    onSubmit(obj) {
      this.dialog = false;
      this.name = obj.name;
      this.text1 = obj.text1;
      this.text2 = obj.text2;
      this.text3 = obj.text3;
    },
  },
};
</script>

<style>
.buttonWrap {
  text-align: center;
}
</style>