import Vue from 'vue';
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)
const routese=[

]
const routes = [
	{
    path: '/',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
		children: [
			{
				path: '/homes',
				name: 'homes',
				component: () =>import('../views/Homes.vue')
			},
			{
				path: '/tissue',
				name: 'tissue',
				meta: { title: "组织结构"},

				component: () =>
					import('../views/Tissue.vue')
			},
			{
				path: '/staff',
				name: 'staff',
				meta: { title: "员工"},

				component: () =>
					import('../views/Staff.vue')
			},
			{
				path: '/detail',
				name: 'detail',


				component: () =>
					import('../views/Detail.vue')
			},
			{
				path: "/import",
				name: "import",
				component: () => import("../views/Import.vue"),

			},
			{
				path: '/setting',
				name: 'setting',
				meta: { title: "设置"},

				component: () =>
					import('../views/Setting.vue')
			},
			{
				path: '/author',
				name: 'author',
				meta: { title: "权限管理"},

				component: () =>
					import('../views/Author.vue')
			},
			{
				path: '/social',
				name: 'social',
				meta: { title: "社保"},

				component: () =>
					import('../views/Social.vue')
			},
			{
				path: '/examine',
				name: 'examine',
				meta: { title: "审批"},

				component: () =>
					import('../views/Examine.vue')
			},
			{
				path: '/checking',
				name: 'checking',
				meta: { title: "考勤"},

				component: () =>
					import('../views/Checking.vue')
			},
			{
				path: '/salary',
				name: 'salary',
				meta: { title: "工资"},

				component: () =>
					import('../views/Salary.vue')
			}
		]
  },
  {
    path: '/about',
    name: 'about',

    component: () => import('../views/AboutView.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
