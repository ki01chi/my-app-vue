<template>
  <div class="Haiku-list">
    <template v-for="(Haiku, index) in Haikus">
      <HaikuView
        :key="index"
        :name="Haiku.name"
        :date="Haiku.date"
        :text1="Haiku.text1"
        :text2="Haiku.text2"
        :text3="Haiku.text3"
      />
    </template>
  </div>
</template>

<script>
import HaikuView from "../components/HaikuView";
export default {
  components: {
    HaikuView,
  },
  props: {
    Haikus: {
      type: Array,
      required: true,
    },
  },
};
</script>