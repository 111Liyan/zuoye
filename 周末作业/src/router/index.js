import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {
      path: 'home',
      name: 'home',
      component: () => import( '../views/Home.vue')
    },
    {
      path: 'yong',
      name: 'yong',
      component: () => import( '../views/user/Yong.vue'),
      meta:{title:'数据管理',name:'用户列表'}
    },
    {
      path: 'shang',
      name: 'shang',
      component: () => import( '../views/user/Shang.vue'),
      meta:{title:'数据管理',name:'商家列表'}
    },
    {
      path: 'shi',
      name: 'shi',
      component: () => import( '../views/user/Shi.vue'),
      meta:{title:'数据管理',name:'食品列表'}
    },
    {
      path: 'ding',
      name: 'ding',
      component: () => import( '../views/user/Ding.vue'),
      meta:{title:'数据管理',name:'订单列表'}
    },
    {
      path: 'guan',
      name: 'guan',
      component: () => import( '../views/user/Guan.vue'),
      meta:{title:'数据管理',name:'管理员列表'}
    },
    {
      path: 'addu',
      name: 'addu',
      component: () => import( '../views/add/Addu.vue'),
      meta:{title:'数据管理',name:'添加商铺'}
    },
    {
      path: 'adds',
      name: 'adds',
      component: () => import( '../views/add/Adds.vue'),
      meta:{title:'数据管理',name:'添加商品'}
    },
    {
      path: 'tuse',
      name: 'tuse',
      component: () => import( '../views/tu/Tuse.vue'),
      meta:{title:'数据管理',name:'用户分布'}
    },
    {
      path: 'wens',
      name: 'wens',
      component: () => import( '../views/wen/Wens.vue'),
      meta:{title:'数据管理',name:'用户列表'}
    },
    {
      path: 'shens',
      name: 'shens',
      component: () => import( '../views/shen/Shens.vue'),
      meta:{title:'数据管理',name:'文本编辑'}
    },
    {
      path: 'shmisd',
      name: 'shmisd',
      component: () => import( '../views/shmisd/Shmisd.vue')
    }
  ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
