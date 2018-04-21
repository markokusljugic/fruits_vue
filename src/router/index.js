import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Fruits'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Fruits',
      component: Fruits
    }
  ]
})
