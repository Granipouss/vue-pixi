import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'is-active',
  routes: [{
    path: '/',
    name: 'index',
    component: () => import('./pages/index.vue')
  }, {
    path: '/renderer',
    name: 'renderer',
    component: () => import('./pages/renderer.vue')
  }, {
    path: '/sprite',
    name: 'sprite',
    component: () => import('./pages/sprite.vue')
  }, {
    path: '/text',
    name: 'text',
    component: () => import('./pages/text.vue')
  }, {
    path: '/container',
    name: 'container',
    component: () => import('./pages/container.vue')
  }]
})
