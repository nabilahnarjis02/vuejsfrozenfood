import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/produks/Home.vue'
import Createproduks from '../views/produks/Createproduks.vue'
import Editproduks from '../views/produks/Editproduks.vue'
import Detailproduks from '../views/produks/Detailproduks.vue'
// import Groups from '../views/groups/Index.vue'

const routes = [
  {
    path: '/',
    name: 'produks.home',
    component: Home
  },
  {
    path: '/Createproduks',
    name: 'produks.create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createproduks 
  },
{
  path: '/editproduks/:id',
  name: 'Editproduks',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: Editproduks
},
{
  path: '/detailproduks/:id',
  name: 'Detailproduks',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: Detailproduks
},
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
