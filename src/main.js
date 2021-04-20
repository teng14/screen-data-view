import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUi from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// 将自动注册所有组件为全局组件
import dataV from "@jiaminghi/data-view";
import echarts from "echarts";

Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;
Vue.use(ElementUi);
Vue.use(dataV);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
