import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import News from "./views/News/News.vue";
import NewsDetails from "./views/News/NewsDetails.vue"
import Rentals from "./views/Rentals/Rentals.vue";
import RentalsDetails from './views/Rentals/RentalsDetails.vue'
import Sales from "./views/Sales/Sales.vue";
import SalesDetails from "./views/Sales/SalesDetails.vue";
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
      component: Home,
      meta: {
        title: "Home"
      }
    },
    {
      path: "/news",
      name: "news",
      component: News,
      meta: {
        title: "News"
      }
    },
    {
      path: "/rentals",
      name: "rentals",
      component: Rentals,
      meta: {
        title: "Rentals"
      }
    },
    {
      path: "/rentals/:id",
      name: "rentalsdetails",
      component: RentalsDetails,
      meta: {
        title: "Rentals Details"
      }
    },
    {
      path: "/sales",
      name: "sales",
      component: Sales,
      meta: {
        title: "Sales"
      }
    },
    {
      path: "/sales/:id",
      name: "salesdetails",
      component: SalesDetails,
      meta: {
        title: "Sales Details"
      }
    },
    {
      path: "/news/:id",
      name: "newsdetails",
      component: NewsDetails,
      meta: {
        title: "News Details"
      }
    },
    {
      path: "/aboutus",
      name: "aboutus",
      component: AboutUs,
      meta: {
        title: "About Us"
      }
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
      meta: {
        title: "Contact"
      }
    },
    {
      path: "/auth",
      name: "auth",
      component: Auth,
      meta: {
        title: "Log In"
      }
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      meta: {
        title: "Admin Panel"
      }
    },
    {
      path: "/admin/newpost",
      name: "newpost",
      component: NewPost,
      meta: {
        title: "Add New Post"
      }
    },
    {
      path: "/admin/comments",
      name: "comments",
      component: Comments,
      meta: {
        title: "Comments"
      }
    },
    {
      path: '*',
      component: ErrorComponent, 
      meta: {
        title: "Error"
      }
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

  document.title = to.meta.title;
  next();
});

export default router;