import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/profile",
      name: "profile",
      // lazy-loaded
      component: () => import("./views/Profile.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("./views/BoardAdmin.vue"),
    },
    {
      path: "/sales",
      name: "sales",
      component: () => import("./views/BoardSales.vue"),
    },
    {
      path: "/warehouse",
      name: "warehouse",
      component: () => import("./views/BoardWarehouse"),
    } /*
        {
            path: '/user',
            name: 'user',
            component: () => import('./views/BoardUser.vue')
        }*/,
  ],
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/register", "/home"];
  const authRequire = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  if (authRequire && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});
