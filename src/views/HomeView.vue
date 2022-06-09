<template>
  <div class="home">
    <RandomJokes />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RandomJokes from "@/components/RandomJokes.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    RandomJokes,
  },
});
</script>
