import Vue from 'vue'
import Router from 'vue-router'
import '../common/css/reset.scss'
import home from '../components/home/index.vue'
import money from '../components/money/index.vue'
import ious from '../components/ious/index.vue'
import raise from '../components/raise/index.vue'
import download from '../components/special/download.vue'
import mine from '../components/mine/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:home,
    },
    {
      path:'/money',
      component:money
    },
    {
      path:'/ious',
      component:ious
    },
    {
      path:'/raise',
      component:raise
    },
    {
      path:'/download',
      component:download
    },
    {
      path:'/mine',
      component:mine
    }
  ],
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
  }
})
