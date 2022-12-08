<template>
  <div class="home">
    <el-container>
      <el-aside :width="[isCollapse==true?'68px':'200px']">
        <h1>电商后台管理系统</h1>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-submenu v-for="item in list" :key="item.id" :index="item.path">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item.authName }}</span>
            </template>
            <el-menu-item v-for="i in item.children" :key="i.id" :index="('/' + i.path)">{{ i.authName }}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
					<i class="el-icon-s-operation" style="color:#fff" @click="(isCollapse=!isCollapse)"></i>
					<button>退出</button>
				</el-header>
        <el-main>
					<router-view />
					<div class="aop">
						<el-breadcrumb separator="">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>{{$route.meta.title}}</el-breadcrumb-item>
  <el-breadcrumb-item>{{$route.meta.name}}</el-breadcrumb-item>
</el-breadcrumb>
					</div>

				</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      list: [],
			isCollapse: false
    }
  },
  created() {
    this.$http({ method: "get", data: {}, url: "/api/menus" }).then((res) => {
      // console.log(res)
      this.list = res.data.data
      console.log(this.list)
    })
  }
}
</script>
<style lang="scss" scoped>
.el-aside {
  background-color: #333744;
  height: 100vh;
	h1{
		padding: 10px;
		color: #fff;
		overflow: hidden;
		white-space: nowrap;
	}
}
.el-header{
	background-color:#373d41 ;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.el-main{
	position: relative;
	.aop{
		position: absolute;
		top: 0;
	}
}
</style>
