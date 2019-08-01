import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import FireBase from "firebase";

const config = {
  apiKey: "AIzaSyDHidM-Bk0JA3eWcQ2M8iyXK4wqUWGHwmA",
  authDomain: "localhost",
  databaseURL: "https://real-estate-project-e32ed.firebaseio.com/",
  projectId: "real-estate-project-e32ed",
  storageBucket: "gs://real-estate-project-e32ed.appspot.com/",
  messagingSenderId: "833417375005"
};

FireBase.initializeApp(config);

Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");