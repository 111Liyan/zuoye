import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/common/HomeView.vue"

Vue.use(VueRouter)

const routes = [
	{
    path: "/longin",
    name: "longin",
    component: () => import("../views/common/Longin.vue")
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
		children:[
			{
				path: "welcome",
				name: "welcome",
				component: () => import("../views/common/Welcome.vue")
			},
			{
				path: "users",
				name: "users",
				component: () => import("../views/Users/Users.vue"),
				meta: { title: "用户管理", name: "用户列表" }
			},
			{
				path: "roles",
				name: "roles",
				meta: { title: "权限管理", name: "角色列表" },
				component: () => import("../views/AuthorityManagement/Roles.vue")
			},
			{
				path: "rights",
				name: "rights",
				meta: { title: "权限管理", name: "权限列表" },
				component: () => import("../views/AuthorityManagement/Rights.vue")
			},
			{
				path: 'goods',
				name: "ShopList",
				component: () => import("../views/Shop/ShopList.vue"),
				meta: { title: "商品管理", name: "商品列表" },
			},
			{
				path: '/shopadd',
				name: "/Shopadd",
				component: () => import("../views/Shop/Shopadd.vue"),
				meta: { title: "商品管理", name: "分类参数" },
			},
			{
				path: '/params',
				name: "/ClassParameter",
				component: () => import("../views/Shop/ClassParameter.vue"),
				meta: { title: "商品管理", name: "分类参数" },
			},
			{
				path: '/categories',
				name: "/ShopClass",
				component: () => import("../views/Shop/ShopClass.vue"),
				meta: { title: "商品管理", name: "商品分类" },
			},
			{
				path: '/orders',
				name: "/Orders",
				component: () => import("../views/Order/Orders.vue"),
				meta: { title: "订单管理", name: "订单列表" },
			},
			// 数据统计
			{
				path: '/reports',
				name: "/Reports",
				component: () => import("../views/Rept/Reports.vue"),
				meta: { title: "数据统计", name: "数据报表" }
			},

		]
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/common/AboutView.vue")
  },
 
]

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
})

export default router
