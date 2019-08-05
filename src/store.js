import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

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
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    }
  },
  actions: {
    authenticateUser(context, authData) {
      let authUrl = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDHidM-Bk0JA3eWcQ2M8iyXK4wqUWGHwmA";

      return axios.post(authUrl, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }).then(result => {
        context.commit('setToken', result.data.idToken);
      })
        .catch(e => {
          console.log(e);
        });
    },
    addPost(context, post) {
      return axios
        .post("https://real-estate-project-e32ed.firebaseio.com//sales.json?auth=" + context.state.token, post)
        .then(result => {
          console.log(result);
        })
        .catch(e => console.log(e));
    }
  }
});
