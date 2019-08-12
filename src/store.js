import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Cookie from "js-cookie";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authToken: null,
    loadedSales: [],
    loadedRentals: [],
    loadedNews: []
  },
  getters: {
    loadedSales(state) {
      return state.loadedSales
    },
    loadedRentals(state) {
      return state.loadedRentals
    },
    loadedNews(state) {
      return state.loadedNews
    },
    isAuthenticated(state) {
      return state.authToken != null;
    }
  },
  mutations: {
    setLoadedSales(state, loadedSales) {
      state.loadedSales = loadedSales;
    },
    setLoadedRentals(state, loadedRentals) {
      state.loadedRentals = loadedRentals;
    },
    setLoadedNews(state, loadedNews) {
      state.loadedNews = loadedNews;
    },
    setToken(state, token) {
      state.authToken = token;
    },
    clearToken(state) {
      state.authToken = null;
    }
  },
  actions: {
    getNews(context) {
      return axios.get("https://real-estate-project-e32ed.firebaseio.com/news.json")
        .then(response => {
          const loadedNewsArray = [];
          for (const key in response.data) {
            loadedNewsArray.push({ ...response.data[key], id: key });
          }
          context.commit("setLoadedNews", loadedNewsArray);
        })
        .catch(e => context.error(e));
    },
    getSales(context) {
      return axios.get("https://real-estate-project-e32ed.firebaseio.com/sales.json")
        .then(response => {
          const loadedSalesArray = [];
          for (const key in response.data) {
            loadedSalesArray.push({ ...response.data[key], id: key });
          }
          context.commit("setLoadedSales", loadedSalesArray);
        })
        .catch(e => context.error(e));
    },
    getRentals(context) {
      return axios.get("https://real-estate-project-e32ed.firebaseio.com/rentals.json")
        .then(response => {
          const loadedRentalsArray = [];
          for (const key in response.data) {
            loadedRentalsArray.push({ ...response.data[key], id: key });
          }
          context.commit("setLoadedRentals", loadedRentalsArray);
        })
        .catch(e => context.error(e));
    },
    authenticateUser(context, authData) {
      let authUrl = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDHidM-Bk0JA3eWcQ2M8iyXK4wqUWGHwmA";

      return axios.post(authUrl, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }).then(result => {
        context.commit('setToken', result.data.idToken);
        localStorage.setItem("token", result.data.idToken);
        localStorage.setItem('tokenExpiration', new Date().getTime() + +result.data.expiresIn * 1000);
      })
        .catch(e => {
          console.log(e);
        });
    },
    initAuth(context) {
      let token = localStorage.getItem('token');
      let expirationDate = localStorage.getItem("tokenExpiration");

      if (token) {
        context.commit('setToken', token);
      }

      if (new Date().getTime() > +expirationDate || !token) {
        context.dispatch('logOut');
        return;
      }
    },
    logOut(context) {
      context.commit('clearToken');
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
    },
    addPost(context, post) {

      return axios
        .post("https://real-estate-project-e32ed.firebaseio.com/" + post.postType + ".json?auth=" + context.state.token, post)
        .then(result => {
          console.log(result);
        })
        .catch(e => console.log(e));
    }
  }
});
