<template>
  <div class="container">
    <div class="row">
      <template v-for="(haiku) in haikus">
        <HaikuView
          :key="haiku.id"
          :name="haiku.name"
          :date="haiku.date"
          :text1="haiku.text1"
          :text2="haiku.text2"
          :text3="haiku.text3"
        />
      </template>
    </div>
  </div>
</template>

<script>
import HaikuView from "../components/HaikuView";
export default {
  components: {
    HaikuView,
  },
  props: {
    haikus: {
      type: Array,
      required: true,
    },
  },
}
</script>