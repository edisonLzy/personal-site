import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
// use
Vue.use(mavonEditor);

import ComponentRegister from "@/components";
Vue.use(ComponentRegister);

import IconRegister from "@/common/plugins/svg";
Vue.use(IconRegister);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
