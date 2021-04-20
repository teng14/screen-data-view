module.exports = {
  lintOnSave: false,
  publicPath: "/",
  configureWebpack: {
    resolve: {
      alias: {
        _PLUGINS_: "@/plugins",
        _SERVICE_: "@/service",
        _MIXINS_: "@/mixins",
        _STORE_: "@/store",
        _VIEWS_: "@/views",
        _COMPONENTS_: "@/components",
        _STYLUS_: "@/stylus",
        _UTILS_: "@/utils"
      }
    }
  }
};
