<template>
  <button
    v-for="(category, index) in categories"
    :key="index"
    @click="loadByCategory(category)"
  >
    {{ category }}
  </button>
  <br />
  <br />
  <div class="container" v-for="(joke, index) in getJokes" :key="index">
    <span :v-if="joke.joke">{{ joke.joke }}</span>
    <span :v-else="joke.setup">
      {{ joke.setup }} <br />
      {{ joke.delivery }}
    </span>
    <button @click="navigateToSingleJoke(joke.id)">More info</button>
  </div>
</template>

<script lang="ts">
import { Category, Joke } from "@/store";
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "RandomJokes",
  methods: {
    ...mapActions("joke", ["loadJokes", "loadByCategory", "loadSingleJoke"]),
    // loadByCategory(category: Category) {
    //   this.$store.dispatch("loadByCategory", category);
    // },
    navigateToSingleJoke(id: number) {
      // this.loadSingleJoke(id);
      this.$router.push(`/random-jokes/${id}`);
    },
  },
  computed: {
    ...mapGetters("joke", ["getJokes"]),
    // getJokes(): Joke[] {
    //   return this.$store.state.jokes;
    // },
  },
  data: () => ({
    categories: [
      "Programming",
      "Miscellaneous",
      "Dark",
      "Pun",
      "Spooky",
      "Christmas",
    ] as Category[],
  }),
  created() {
    this.loadJokes();
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
}
</style>
