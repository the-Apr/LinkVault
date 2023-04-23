import { createRouter, createWebHashHistory } from 'vue-router';
import AddResources from '../components/learning-resources/AddResources.vue';
import StoredResources from '../components/learning-resources/StoredResources.vue';

const routes = [
  {
    path: '/add',
    name: 'add',
    component: AddResources
  },
  {
    path: '/storedresources',
    name: 'storedresources',
    component: StoredResources
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
