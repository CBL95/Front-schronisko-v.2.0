import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Animal from '../components/Animal.vue'
import CreateAnimal from '../components/CreateAnimal.vue'
import UpdateAnimal from '../components/UpdateAnimal.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Animal',
    name: 'Animal',
    component: Animal
  },
  {
    path: '/CreateAnimal',
    name: 'CreateAnimal',
    component: CreateAnimal
  },
  {
    path: '/UpdateAnimal',
    name: 'UpdateAnimal',
    component: UpdateAnimal
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
