import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactManager from '../views/ContactManager.vue'
import AddContact from '../views/AddContact.vue'
import EditContact from '../views/EditContact.vue'
import ViewContact from '../views/ViewContact.vue'
import NotFound from '../views/NotFound.vue'
/* eslint-disable */
const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/contacts',
    component: HomeView
  },
  {
    path: '/contacts',
    name: 'ContactManager',
    component: ContactManager
  },
  {
    path: '/contacts/create',
    name: 'AddContact',
    component: AddContact
  },
  {
    path: '/contacts/edit/:id',
    name: 'EditContact',
    component: EditContact
  },
  {
    path: '/contacts/view/:id',
    name: 'ViewContact',
    component: ViewContact
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
  // {
  //   path: '/about',
  //   name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
