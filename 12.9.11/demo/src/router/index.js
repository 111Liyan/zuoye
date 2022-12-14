import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/LoginView.vue")
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "/users",
        name: "users",
        component: () => import("../views/Users.vue"),
        meta: { title: "用户管理", name: "用户列表" }
      },
      {
        path: "/roles",
        name: "roles",
        component: () => import("../views/Roles.vue"),
        meta: { title: "权限管理", name: "角色列表" }
      },
      {
        path: "/rights",
        name: "rights",
        component: () => import("../views/Rights.vue"),
        meta: { title: "权限管理", name: "权限列表" }
      },
      {
        path: "/goods",
        name: "goods",
        component: () => import("../views/Goods.vue"),
        meta: { title: "商品管理", name: "商品列表" }
      },
      {
        path: "/params",
        name: "params",
        component: () => import("../views/Params.vue"),
        meta: { title: "商品管理", name: "分类参数" }
      },
      {
        path: "/categories",
        name: "categories",
        component: () => import("../views/Categories.vue"),
        meta: { title: "商品管理", name: "商品分类" }
      },
      {
        path: "/orders",
        name: "orders",
        component: () => import("../views/Orders.vue"),
        meta: { title: "订单管理", name: "订单列表" }
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue")
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
