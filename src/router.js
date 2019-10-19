import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import News from "./views/News/News";
import NewsDetails from "./views/News/NewsDetails"
import Rentals from "./views/Rentals/Rentals";
import RentalsDetails from './views/Rentals/RentalsDetails'
import Sales from "./views/Sales/Sales";
import SalesDetails from "./views/Sales/SalesDetails";
import Aboutus from "./views/Aboutus";
import BgNews from "./views/Good to know/BgNews";
import RentalsCost from "./views/Good to know/RentalsCost";
import SalesCost from "./views/Good to know/SalesCost";
import Expenses from "./views/Good to know/Expenses";
import Contact from "./views/Contact";
import Auth from "./views/Admin/Auth"
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
        title: "Startseite"
      }
    },
    {
      path: "/news",
      name: "news",
      component: News,
      meta: {
        title: "Allgemeines"
      }
    },
    {
      path: "/rentals",
      name: "rentals",
      component: Rentals,
      meta: {
        title: "Zu mieten"
      }
    },
    {
      path: "/rentals/:id",
      name: "rentalsdetails",
      component: RentalsDetails,
      meta: {
        title: "Zu mieten"
      }
    },
    {
      path: "/sales",
      name: "sales",
      component: Sales,
      meta: {
        title: "Zu kaufen"
      }
    },
    {
      path: "/sales/:id",
      name: "salesdetails",
      component: SalesDetails,
      meta: {
        title: "Zu kaufen"
      }
    },
    {
      path: "/news/:id",
      name: "newsdetails",
      component: NewsDetails,
      meta: {
        title: "Allgemeines"
      }
    },
    {
      path: "/bgnews",
      name: "bgnews",
      component: BgNews,
      meta: {
        title: "Allgemeines zu Bulgarien"
      }
    },

    {
      path: "/rentalscost",
      name: "rentalscost",
      component: RentalsCost,
      meta: {
        title: "Kosten für eine Mietwohnung"
      }
    },
    {
      path: "/salescost",
      name: "salescost",
      component: SalesCost,
      meta: {
        title: "Kosten für ein Haus in Bulgarien"
      }
    },
    {
      path: "/expenses",
      name: "expenses",
      component: Expenses,
      meta: {
        title: "Taxipreise, Kosten für Lebensmittel"
      }
    },

    

    {
      path: "/aboutus",
      name: "aboutus",
      component: Aboutus,
      meta: {
        title: "Über uns"
      }
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
      meta: {
        title: "Kontakt"
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
      path: "/newpost",
      name: "newpost",
      component: NewPost,
      meta: {
        title: "Add New Post"
      }
    },
    {
      path: "/comments",
      name: "comments",
      component: Comments,
      meta: {
        title: "Comments"
      }
    },
    {
      path: "/comments/:id",
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
  // if (to.fullPath === '/contact') {
  //   if (!store.getters.isAuthenticated) {
  //     next('/auth');
  //   }
  // }
  if (to.fullPath === '/newpost') {
    if (!store.getters.isAuthenticated || (store.getters.isAuthenticated && !store.getters.isAdmin)) {
      next('/auth');
    }
  }
  if (to.fullPath === '/comments') {
    if (!store.getters.isAuthenticated || (store.getters.isAuthenticated && !store.getters.isAdmin)) {
      next('/auth');
    }
  }
  if (to.fullPath === '/comments/:id') {
    if (!store.getters.isAuthenticated || (store.getters.isAuthenticated && !store.getters.isAdmin)) {
      next('/auth');
    }
  }
  document.title = to.meta.title;
  next();
});

export default router;