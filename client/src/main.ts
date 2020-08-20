import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import ComponentRegister from "@/components";
Vue.use(ComponentRegister);

import IconRegister from "@/common/plugins/svg";
Vue.use(IconRegister);

import DirectiveRegister from "@/common/directive";
Vue.use(DirectiveRegister);
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
