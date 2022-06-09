import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SingleJoke from "../views/SingleJokeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/random-jokes",
    name: "Random Jokes",
    component: HomeView,
  },
  {
    path: "/name-picker",
    name: "Name Picker",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "NamePicker" */ "../views/NamePickerView.vue"
      ),
  },
  {
    path: "/random-jokes/:id",
    name: "Single Joke",
    props: true,
    component: SingleJoke,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
