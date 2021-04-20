import store from "_STORE_";

export default function(router) {
  /**
   * 登录权限拦截
   */
  router.beforeEach((to, from, next) => {
    // 设置当前路由名称
    const { meta, name } = to;
    // 鉴权
    if (to.name !== "login" && meta.isAuthority && !store.state.User.token) {
      next({
        path: "/login",
        query: {
          returnUrl: to.fullPath
        },
        replace: true
      });
    } else {
      if (name) {
        store.commit("Nav/setCurrentNav", meta.parentName || name);
      }
      store.commit("Request/clearToken"); // 取消请求
      next();
    }
  });
  /**
   * 动态更新页面title
   */
  router.afterEach(to => {
    const { subTitle, title } = to.meta;
    let _title = subTitle || title || "";
    _title =
      _title !== ""
        ? `${_title}-${process.env.VUE_APP_TITLE}`
        : process.env.VUE_APP_TITLE;
    document.title = _title;
  });
}
