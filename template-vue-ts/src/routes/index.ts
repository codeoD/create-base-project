import { createRouter, createWebHistory } from 'vue-router'
import Content from '../layouts/ContentModel.vue'
import PageA from '../pages/PageA.vue'
import PageOne from '../pages/modelC/PageOne.vue'
import PageTwo from '../pages/modelC/PageTwo.vue'
import MenuC from '../pages/modelC/Main.vue'

const routes = [
  {
    path: '/a',
    name: 'PageA',
    component: PageA,
    meta: {
      type: 'page', // page
      text: 'PageA',
    },
  },
  {
    path: '/b',
    component: PageA,
    name: 'PageB',
    meta: {
      type: 'page', // page
      text: 'PageB',
    },
  },
  {
    path: '/c',
    name: 'MenuC',
    meta: {
      type: 'menu',
      text: '菜单C',
    },
    component: MenuC,
    redirect: () => ({
      name: 'one',
    }),
    children: [
      {
        path: 'one',
        name: 'one',
        component: PageOne,
        meta: {
          type: 'page',
          text: 'PageOne',
        },
      },
      {
        path: 'two',
        name: 'two',
        component: PageTwo,
        meta: {
          type: 'page',
          text: 'PageTwo',
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Content,
      children: routes,
    },
  ],
})

export { router, routes }
