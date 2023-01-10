import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
		children: [
			{
				path: 'homes',
				name: 'homes',
				component: () =>import('../views/Homes.vue')
			},
			{
				path: 'gong',
				name: 'gong',
				component: () =>import('../views/Gong.vue')
			},
			{
				path: 'gongsd',
				name: 'gongsd',
				component: () =>import('../views/Gongsd.vue')
			},
			{
				path: 'shes',
				name: 'shes',
				component: () =>
					import('../views/Shes.vue')
			},
			{
				path: 'kaose',
				name: 'kaose',
				component: () =>
					import('../views/Kaose.vue')
			},
			{
				path: 'quan',
				name: 'quan',
				component: () =>
					import('../views/Quan.vue')
			},
			{
				path: 'shens',
				name: 'shens',
				component: () =>
					import('../views/Shens.vue')
			},
			{
				path: 'zuzhis',
				name: 'zuzhis',
				component: () =>
					import('../views/Zuzhis.vue')
			}
		]
	},
	{
		path: '/about',
		name: 'about',
		component: () =>
			import('../views/AboutView.vue')
	},
	{
		path: '/login',
		name: 'login',
		component: () =>
			import('../views/Login.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
