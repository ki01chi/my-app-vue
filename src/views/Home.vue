<template>
  <div>
    <DialogCard :onPost="addHaiku" />
    <HaikuList :Haikus="Haikus" />
  </div>
</template>

<script>
import DialogCard from "../components/DialogCard";
import HaikuList from "../components/HaikuList";

export default {
  components: {
    DialogCard,
    HaikuList,
  },
  data: function () {
    return {
      name: "",
      text1: "",
      text2: "",
      text3: "",
      Haikus: [],
    };
  },
  methods: {
    addHaiku(haiku) {
      this.Haikus.push(haiku);
    },
  },
};
</script>

<style>
.buttonWrap {
  text-align: center;
}
</style>