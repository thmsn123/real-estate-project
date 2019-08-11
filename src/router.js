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
import ErrorComponent from "./views/Error.vue"
import store from "../src/store.js"

Vue.use(Router);

export default new Router({
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
      component: Auth,
      beforeEnter(to, from, next) {
        if (!store.getters.isAuthenticated) {
          console.log('not auth');
          
          next()
        } else {
          console.log('auth');
          next({
            name: "home"
          });
        }
      }
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      beforeEnter(to, from, next) {
        if (store.getters.isAuthenticated) {
          next()
        } else {
          next({
            name: "auth"
          });
        }
      }
    },
    {
      path: "/admin/newpost",
      name: "newpost",
      component: NewPost,
      beforeEnter(to, from, next) {
        if (store.getters.isAuthenticated) {
          next()
        } else {
          next({
            name: "auth"
          });
        }
      }
    },
    {
      path: '*',
      component: ErrorComponent
    }
  ]
});
