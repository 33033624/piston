import Vue from 'vue'
import Router from 'vue-router'
import Fadongji1 from '../page/fadongji.vue'

Vue.use(Router)

export default new Router({
  hashbang: true,
  history: false,
  routes: [
    {
      path: '/fadongji1',
      name: 'fadongji1',
      component: Fadongji1
    }
  ]
})
