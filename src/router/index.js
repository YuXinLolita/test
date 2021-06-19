import { createRouter, createWebHistory} from "vue-router";
import Start from "../views/Start.vue";

const routes = [
  {
    path: "/",
    name: "Start",
    component: Start,
  },
  {
    path: "/home",
    name: "Home",
    // component: Home,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/detail",
    name: "Detail",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Detail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
