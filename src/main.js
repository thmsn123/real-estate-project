import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuelidate);
Vue.use(BootstrapVue);
const vuetifyOptions = { }
Vue.use(Vuetify);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify: new Vuetify(vuetifyOptions),
    render: h => h(App)
}).$mount("#app");