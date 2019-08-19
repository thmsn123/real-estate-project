import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import News from "./views/News/News";
import NewsDetails from "./views/News/NewsDetails"
import Rentals from "./views/Rentals/Rentals";
import RentalsDetails from './views/Rentals/RentalsDetails'
import Sales from "./views/Sales/Sales";
import SalesDetails from "./views/Sales/SalesDetails";
import AboutUs from "./views/AboutUs";
import Contact from "./views/Contact";
import Auth from "./views/Admin/Auth"
import Admin from "./views/Admin/AdminPanel"
import NewPost from "./views/Admin/NewPost"
import Comments from './views/Admin/Comments/Comments'
import CommentsDetails from './views/Admin/Comments/CommentsDetails'
import ErrorComponent from "./views/Error"
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
      path: "/admin/comments/:id",
      name: "commentsdetails",
      component: CommentsDetails,
      meta: {
        title: "Comments Details"
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
  if (to.fullPath === '/contact') {
    if (!store.getters.isAuthenticated) {
      next('/');
    }
  }
  if (to.fullPath === '/admin') {
    if (!store.getters.isAuthenticated || (store.getters.isAuthenticated && !store.getters.isAdmin)) {
      next('/auth');
    }
  }
  if (to.fullPath === '/admin/newpost') {
    if (!store.getters.isAuthenticated || (store.getters.isAuthenticated && !store.getters.isAdmin)) {
      next('/auth');
    }
  }
  if (to.fullPath === '/admin/comments') {
    if (!store.getters.isAuthenticated || (store.getters.isAuthenticated && !store.getters.isAdmin)) {
      next('/auth');
    }
  }
  if (to.fullPath === '/admin/comments/:id') {
    if (!store.getters.isAuthenticated || (store.getters.isAuthenticated && !store.getters.isAdmin)) {
      next('/auth');
    }
  }
  document.title = to.meta.title;
  next();
});

export default router;