import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
		children: [
			{
				path: '/homes',
				name: 'homes',
				component: () =>import('../views/Homes.vue')
			},
			{
				path: '/gong',
				name: 'gong',
				meta: { title: "员工"},
				component: () =>import('../views/Gong.vue')
			},
			{
				path: '/shang',
				name: 'shang',
				component: () =>import('../views/Shang.vue')
			},
			{
				path: '/gongsd',
				name: 'gongsd',
				meta: { title: "工资"},
				component: () =>import('../views/Gongsd.vue')
			},
			{
				path: '/shes',
				name: 'shes',
				meta: { title: "社保"},
				component: () =>
					import('../views/Shes.vue')
			},
			{
				path: '/dist',
				name: 'dist',
				meta: { title: "社保"},
				component: () =>
					import('../views/Dist.vue')
			},
			{
				path: '/kaose',
				name: 'kaose',
				meta: { title: "考勤"},
				component: () =>
					import('../views/Kaose.vue')
			},
			{
				path: '/quan',
				name: 'quan',
				meta: { title: "权限管理"},
				component: () =>
					import('../views/Quan.vue')
			},
			{
				path: '/shens',
				name: 'shens',
				meta: { title: "审批"},
				component: () =>
					import('../views/Shens.vue')
			},
			{
				path: '/qian',
				name: 'qian',
				meta: { title: "审批"},
				component: () =>
					import('../views/Qian.vue')
			},
			{
				path: '/shense',
				name: 'shense',
				meta: { title: "设置"},
				component: () =>
					import('../views/Shense.vue')
			},
			{
				path: '/si',
				name: 'si',
				component: () =>
					import('../views/Si.vue')
			},
			{
				path: '/zuzhis',
				name: 'zuzhis',
				meta: { title: "组织结构"},

				component: () =>
					import('../views/Zuzhis.vue')
			}
		]
  },
  {
    path: '/about',
    name: 'about',

    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
