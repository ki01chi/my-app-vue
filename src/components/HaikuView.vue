<template>
  <div>
    <div>{{ date }}</div>
    <p>{{ name }}</p>
    <p>{{ text1 }}</p>
    <p>{{ text2 }}</p>
    <p>{{ text3 }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    text1: {
      type: String,
      required: true,
    },
    text2: {
      type: String,
      required: true,
    },
    text3: {
      type: String,
      required: true,
    },
  },
};
</script>
