import vue from 'vue';
import VueRouter from 'vue-router';

import Home from './view/Main/Home.vue';
import About from './view/Main/About.vue';
import Main from './view/Main/Main.vue';

vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    redirect: { name: 'Home' },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
      },
      {
        path: '/about',
        name: 'About',
        component: About,
      },
    ],
  },
];
const router = new VueRouter({
  mode: 'history',
  routes,
});
export default router;
