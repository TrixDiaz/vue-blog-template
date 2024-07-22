import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import BlogPost from '@/views/BlogPost.vue'
import About from '@/views/About.vue'
import ContactUs from '@/views/ContactUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path: '/',
    name: '/',
    component: Home
   },
   {
    path: '/blog-post',
    name: '/blog-post',
    component: BlogPost
   },
   {
    path: '/about',
    name: '/about',
    component: About
   },
   {
    path: '/contact',
    name: '/contact',
    component: ContactUs
   }
  ]
})

export default router
