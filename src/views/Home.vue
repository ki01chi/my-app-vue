<template>
  <div>
    <DialogCard :onPost="addHaiku" />
    <HaikuList :haikus="reversedHaikus" />
  </div>
</template>

<script>
import DialogCard from "../components/DialogCard";
import HaikuList from "../components/HaikuList";
import HaikuModel from "../models/Haiku";

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
      haikus: [],
    };
  },
  // 新しい投稿を上に表示する
    computed: {
    reversedHaikus() {
      return this.haikus.slice().reverse();
    }
  },
  async created() {
    const haikus = await this.fetchHaikus();
    this.haikus = haikus;
  },

  methods: {
    addHaiku(haiku) {
      this.haikus.push(haiku);
    },
    async fetchHaikus() {
      let haikus = [];
      try {
        haikus = await HaikuModel.fetchHaikus();
      } catch (error) {
        alert(error.message);
      }
      return haikus;
    },
  },
};
</script>

<style>
.buttonWrap {
  text-align: center;
}
</style>