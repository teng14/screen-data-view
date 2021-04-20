const pageHome = () => import('_VIEWS_/home/index' /* webpackChunkName: "home" */)

export default [
  {
    path: '/',
    name: 'home',
    component: pageHome,
    meta: { title: '首页' },
  },
]
