import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import News from "./views/News/News.vue";
import Rentals from "./views/Rentals/Rentals.vue";
import ForSale from "./views/ForSale/ForSale.vue";
import ForSaleDetails from "./views/ForSale/ForSaleDetails.vue";
import AboutUs from "./views/AboutUs.vue";
import Contact from "./views/Contact.vue";
import Auth from "./views/Admin/Auth.vue"
import Admin from "./views/Admin/AdminPanel.vue"
import ErrorComponent from "./views/Error.vue"


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
      path: '*',
      component: ErrorComponent
    }
  ]
});
