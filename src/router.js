import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import News from "./views/News/News.vue";
import NewsDetails from "./views/News/NewsDetails.vue"
import Rentals from "./views/Rentals/Rentals.vue";
import RentalsDetails from './views/Rentals/RentalsDetails.vue'
import ForSale from "./views/ForSale/ForSale.vue";
import ForSaleDetails from "./views/ForSale/ForSaleDetails.vue";
import AboutUs from "./views/AboutUs.vue";
import Contact from "./views/Contact.vue";
import Auth from "./views/Admin/Auth.vue"
import Admin from "./views/Admin/AdminPanel.vue"
import NewPost from "./views/Admin/NewPost.vue"
import Comments from './views/Admin/Comments.vue'
import ErrorComponent from "./views/Error.vue"
import store from "../src/store.js"

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/news",
      name: "news",
      component: News
    },
    {
      path: "/rentals",
      name: "rentals",
      component: Rentals
    },
    {
      path: "/rentals/:id",
      name: "rentalsdetails",
      component: RentalsDetails
    },
    {
      path: "/forsale",
      name: "forsale",
      component: ForSale
    },
    {
      path: "/forsale/:id",
      name: "forsaledetails",
      component: ForSaleDetails
    },
    {
      path: "/news/:id",
      name: "newsdetails",
      component: NewsDetails
    },
    {
      path: "/aboutus",
      name: "aboutus",
      component: AboutUs
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/auth",
      name: "auth",
      component: Auth
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin
    },
    {
      path: "/admin/newpost",
      name: "newpost",
      component: NewPost
    },
    {
      path: "/admin/comments",
      name: "comments",
      component: Comments
    },
    {
      path: '*',
      component: ErrorComponent
    }
  ]
});

//add navigation guards;
router.beforeEach((to, from, next) => {
  store.dispatch('initAuth');

  if (to.fullPath === '/auth') {
    if (store.getters.isAuthenticated) {
      next('/');
    }
  }
  if (to.fullPath === '/admin') {
    if (!store.getters.isAuthenticated) {
      next('/auth');
    }
  }
  if (to.fullPath === '/admin/newpost') {
    if (!store.getters.isAuthenticated) {
      next('/auth');
    }
  }
  if (to.fullPath === '/admin/comments') {
    if (!store.getters.isAuthenticated) {
      next('/auth');
    }
  }
  next();
});

export default router;