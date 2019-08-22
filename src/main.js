import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@mdi/font/css/materialdesignicons.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import NProgress from 'vue-nprogress'

const options = {
    latencyThreshold: 300, 
    router: true, 
    http: false
};

Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.use(Vuetify);
Vue.use(NProgress, options);

const nprogress = new NProgress({ parent: '.nprogress-container' })
Vue.config.productionTip = false;

const vuetifyOptions = {
    icons: {
        iconfont: 'mdi'
    }
}

Vue.filter('toEuro', function (value) {
    return `${value} €`;
});


new Vue({
    router,
    store,
    vuetify: new Vuetify(vuetifyOptions),
    nprogress,
    render: h => h(App)
}).$mount("#app");