import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.filter("capitalize", function (str) {
  if (!str) return "";
  return str.toString().charAt(0).toUpperCase() + str.toString().slice(1);
});
Vue.filter("filterId", function (id) {
  if (!id) return "";
  if (id > 99) {
    return id;
  } else if (id > 9 && id < 100) {
    return "0" + id.toString();
  } else {
    return "00" + id.toString();
  }
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
