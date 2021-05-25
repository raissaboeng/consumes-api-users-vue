import Vue from "vue";
import App from "./App.vue";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/index.css";

Vue.use(VueToast, {
  position: "bottom-right",
  duration: 5000,
  queue: true
});

new Vue({
  render: (h) => h(App)
}).$mount("#app");
