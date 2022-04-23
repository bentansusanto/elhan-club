import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import MentorView from '../views/MentorView.vue'
import ContactView from '../views/ContactView.vue'

import Login from '../Login/LoginView.vue'
import Register from '../Login/RegisterView.vue'
import Forgot from '../Login/ForgetView.vue'
import Verifikasi from '../Login/VerifikasiView.vue'
import Awal from '../Login/Awal.vue'

// import User from '../user/Dasboard.vue'
// import HomeUser from '../user/Home.vue'
// import AboutUser from '../user/Blog.vue'
// import CourseUser from '../user/Course.vue'
// import ProfilUser from '../user/Profil.vue'


const routes = [
  {
    path: '/',
    name: 'Landing',
    component: LandingView,
    children : [
      {
        path: '',
        name: 'home',
        component: HomeView,
      },
      {
        path: 'about',
        name: 'about',
        component: AboutView,
      },
      {
        path: 'mentor',
        name: 'mentor',
        component: MentorView,
      },
      {
        path: 'contact',
        name: 'contact',
        component: ContactView,
      },
    ]
  },
      {
        path: '/',
        name: 'start',
        component: Awal,
        children : [
           {
            path: 'login',
            name: 'login',
            component: Login,
          },
          {
            path: 'register',
            name: 'register',
            component: Register,
          },
          {
            path: 'forgot',
            name: 'forgot',
            component: Forgot,
          },
          {
            path: 'verify',
            name: 'verifikasi',
            component: Verifikasi,
          }
        ]
      },
  // {
  //   path: '/',
  //   name: 'User',
  //   component: User,
  //   children :[
  //       {
  //         path: '',
  //         component: HomeUser,
  //       },
  //       {
  //         path: 'about',
  //         component: AboutUser,
  //       },
  //       {
  //         path: 'course',
  //         component: CourseUser,
  //       },
  //       {
  //         path: 'profil',
  //         component: ProfilUser,
  //       }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
