<template>
    <v-col cols="12" sm="6" md="3">
      <v-card height="550px" tile>
        <v-row>
          <v-col class="v-card__text">
            <p>{{ text1 }}</p>
            <p>{{ text2 }}</p>
            <p>{{ text3 }}</p>
          </v-col>
        </v-row>
        <div class="v-card__user">
          <p>{{ name }}</p>
          <p>{{ date }}</p>
        </div>
      </v-card>
    </v-col>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
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

<style lang="scss" scoped>
.v-card {
  color: $color-default;
  background-image: url("../assets/bg-sakura.jpg");
  background-size: cover;
  background-color: rgba(255,255,255,0.3);
  background-blend-mode: lighten;

 &__text {
  font-size: 2rem;
  writing-mode: vertical-rl;
  letter-spacing: 1rem;
  line-height: 2;
}

&__user {
  font-size: 1.2rem;
  position: absolute;
  bottom: 0;
}
}
</style>