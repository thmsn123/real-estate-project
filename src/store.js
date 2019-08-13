import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Cookie from "js-cookie";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authToken: null,
    singlePost: [],
    loadedSales: [],
    loadedRentals: [],
    loadedNews: []
  },
  getters: {
    currentPost: state => route => {
      if (route.name === "forsaledetails") {
        state.singlePost = state.loadedSales.find(x => x.id === route.params.id);
      } else if (route.name === "rentalsdetails") {
        state.singlePost = state.loadedRentals.find(x => x.id === route.params.id);
      } else {
        state.singlePost = state.loadedNews.find(x => x.id === route.params.id);
      }

      return state.singlePost;
    },
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
    getPosts(context, postType) {

      return axios.get("https://real-estate-project-e32ed.firebaseio.com/" + postType + ".json")
        .then(response => {
          const loadedPosts = [];
          for (const key in response.data) {
            loadedPosts.push({ ...response.data[key], id: key });
          }

          if (postType === "news") {
            context.commit("setLoadedNews", loadedPosts);
          } else if (postType === "sales") {
            context.commit("setLoadedSales", loadedPosts);
          } else {
            context.commit("setLoadedRentals", loadedPosts);
          }
        })
        .catch(e => context.error(e));
    },
    addPost(context, post) {
      return axios
        .post("https://real-estate-project-e32ed.firebaseio.com/" + post.postType + ".json?auth=" + context.state.token, post)
        .then(result => {
          console.log(result);
        })
        .catch(e => console.log(e));
    },
    addComment(context, post) {
      return axios
        .post("https://real-estate-project-e32ed.firebaseio.com/comments.json?auth=" + context.state.token, post)
        .then(result => {
          console.log(result);
        })
        .catch(e => console.log(e));
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

      if (expirationDate) {
        if (new Date().getTime() > +expirationDate || !token) {
          context.dispatch('logOut');
          return;
        }
      }
    },
    logOut(context) {
      context.commit('clearToken');
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
    }
  }
});
