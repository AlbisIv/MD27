import axios from "axios";
import { Commit, createStore } from "vuex";

//TODO pārveidot uz moduļiem
//TODO filtrs pēc flagiem
//TODO

export type Joke = {
  error?: boolean;
  category: Category;
  flags: Flags;
  id: number;
  joke?: string;
  setup?: string;
  delivery?: string;
  lang: string;
  safe: boolean;
  type: string;
};
type Flags = {
  explicit: boolean;
  nsfw: boolean;
  political: boolean;
  racist: boolean;
  religious: boolean;
  sexist: boolean;
};

export type Category =
  | "Programming"
  | "Miscellaneous"
  | "Dark"
  | "Pun"
  | "Spooky"
  | "Christmas";

const jokeModule = {
  namespaced: true,
  state: () => ({
    jokes: [] as Joke[],
    joke: {} as Joke,
  }),

  actions: {
    loadByCategory(context: any, category: Category) {
      axios
        .get(`https://v2.jokeapi.dev/joke/${category}?amount=10`)
        .then((resp) => {
          context.commit("setJokes", resp.data.jokes);
        });
    },
    loadSingleJoke(context: any, id: number) {
      axios
        .get(`https://v2.jokeapi.dev/joke/Any?idRange=${id}`)
        .then((resp) => {
          context.commit("setJoke", resp.data);
        });
    },
    loadJokes(context: any) {
      axios
        .get("https://v2.jokeapi.dev/joke/Programming?amount=10")
        .then((resp) => {
          context.commit("setJokes", resp.data.jokes);
        });
    },
  },
  mutations: {
    setJoke: function (state: any, joke: Joke) {
      console.log(state);
      state.joke = joke;
    },
    setJokes: function (state: { jokes: Joke[] }, jokes: Joke[]) {
      state.jokes = jokes;
    },
  },
  getters: {
    getJokes: function (state: { jokes: Joke[] }) {
      return state.jokes;
    },
    getJoke: function (state: Joke) {
      return state.joke;
    },
  },
};

const nameModule = {
  namespaced: true,
  state: {
    allNames: [
      "Alberts",
      "Arnis",
      "Artis",
      "Artūrs",
      "Bogdans",
      "Edgards",
      "Elvis",
      "Haralds",
      "Ieva",
      "Ilona",
      "Inta",
      "Jānis",
      "Ņikita",
      "Niklāvs",
      "Regīna",
      "Ričards",
      "Rihards",
      "Roberts",
    ] as string[],
    showNames: [],
  },
  getters: {
    getShowNames: function (state: { showNames: string[] }) {
      return state.showNames;
    },
  },
  mutations: {
    resetNames: function (state: any) {
      state.showNames = state.allNames;
    },
  },
  actions: {
    removeRandomName: function (state: any) {
      console.log(state);
      if (state.state.showNames.length > 0) {
        console.log(
          state.state.showNames.splice(
            Math.floor(Math.random() * state.state.showNames.length),
            1
          )
        );
      } else {
        console.log("notiek");
        state.state.showNames = state.state.allNames;
        // state.state.commit("resetNames", );
      }
    },
  },
};
export default createStore({
  modules: {
    joke: jokeModule,
    name: nameModule,
  },
  // state: () => ({
  //   jokes: [] as Joke[],
  //   joke: {} as Joke,
  // }),
  // getters: {},
  // actions: {
  //   loadByCategory(asd, category: Category) {
  //     console.log(asd);
  //     axios
  //       .get(`https://v2.jokeapi.dev/joke/${category}?amount=10`)
  //       .then((resp) => {
  //         asd.commit("setJokes", resp.data.jokes);
  //       });
  //   },
  //   loadSingleJoke(context, id: number) {
  //     axios
  //       .get(`https://v2.jokeapi.dev/joke/Any?idRange=${id}`)
  //       .then((resp) => {
  //         context.commit("setJoke", resp.data);
  //       });
  //   },
  //   loadJokes(context) {
  //     axios
  //       .get("https://v2.jokeapi.dev/joke/Programming?amount=10")
  //       .then((resp) => {
  //         context.commit("setJokes", resp.data.jokes);
  //       });
  //   },
  // },
  // mutations: {
  //   setJoke: function (state, joke) {
  //     state.joke = joke;
  //   },
  //   setJokes: function (state: { jokes: Joke[] }, jokes: Joke[]) {
  //     state.jokes = jokes;
  //   },
  // },
});
