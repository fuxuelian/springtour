import Vue from "vue";
import App from "./App.vue";
import Observer from "./observer.js";
import Reset from "./common/css/reset.css";


import Flexble from "./common/js/flexble.js";
import router from "./router";



Vue.prototype.$observer = Observer;
new Vue({
    router,

    render: h => h(App)
}).$mount("#app")