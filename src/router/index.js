import Vue from "vue";
import Router from "vue-router";
import routes from "./modules";
import routerControl from "./routesControl";
Vue.use(Router);

let router = new Router({
  mode: "history",
  base: "/",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};

      if (to.hash) {
        position.selector = to.hash;

        if (document.querySelector(to.hash)) {
          return {
            selector: to.hash,
            behavior: "smooth"
          };
        }

        return false;
      }

      return { x: 0, y: 0 };
    }
  }
});

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};

routerControl(router);
export default router;
