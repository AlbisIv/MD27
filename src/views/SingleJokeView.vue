<template>
  <div class="container">
    <!-- <span>{{ getJoke }}</span> -->
    <span :v-if="getJoke.joke">{{ getJoke.joke }}</span>
    <h2 :v-else="getJoke.setup">
      {{ getJoke.setup }} <br />
      {{ getJoke.delivery }}
    </h2>
    <span>Language: {{ getJoke.lang }}</span>
    <span>Category: {{ getJoke.category }}</span>
    <span>Is safe for work? {{ getJoke.safe }}</span>
    <span>Joke type {{ getJoke.type }}</span>
    <br />
    <div></div>
    <div v-for="(value, name) in getJoke.flags" v-bind:key="name">
      <span v-if="value">{{ name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Joke } from "@/store";
import { defineComponent } from "vue";
import { mapGetters, mapActions, mapState } from "vuex";

export default defineComponent({
  name: "SingleJoke",
  state: () => ({
    //  joke: {} as Joke,
  }),
  props: ["id"],
  methods: {
    ...mapActions("joke", ["loadSingleJoke"]),
  },
  computed: {
    ...mapGetters("joke", ["getJoke"]),
    // getJoke(): Joke {
    //   return this.$store.jokeModule.getJoke(this.id);
    // },
  },
  data: () => ({}),
  created() {
    // console.log(this.getJoke);
    this.loadSingleJoke(this.id);
  },
});
</script>
<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
}
</style>
