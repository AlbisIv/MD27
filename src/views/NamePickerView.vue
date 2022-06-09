<template>
  <div class="home">
    <h2>Name picker</h2>
    <button @click="removeRandomName">Choose your fighter</button>
    <div v-for="name in getShowNames" :key="name">
      <span>{{ name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations, mapState, mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "NamePicker",
  computed: {
    ...mapGetters("name", ["getShowNames"]),
  },
  methods: {
    ...mapActions("name", ["removeRandomName"]),
    ...mapMutations("name", ["resetNames"]),
  },
  created() {
    this.resetNames();
  },
});
</script>
