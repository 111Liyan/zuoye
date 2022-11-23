<template>
  <div class="home">
    <el-container>
  <el-aside width="200px">
    <el-menu
      default-active="/home"
      class="el-menu-vertical-demo"
    router 
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>数据管理</span>
        </template>
        <el-menu-item-group>
         
          <el-menu-item index="/yong">用户列表</el-menu-item>
          <el-menu-item index="/shang">商家列表</el-menu-item>
          <el-menu-item index="/shi">食品列表</el-menu-item>
          <el-menu-item index="/ding">订单列表</el-menu-item>
          <el-menu-item index="/guan">管理员列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>添加数据</span>
        </template>
        <el-menu-item-group>
         
          <el-menu-item index="/addu">添加商铺</el-menu-item>
          <el-menu-item index="/adds">添加商品</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>图表</span>
        </template>
        <el-menu-item-group>
         
          <el-menu-item index="/tuse">用户分布</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>编辑</span>
        </template>
        <el-menu-item-group>
         
          <el-menu-item index="/wens">文本编辑</el-menu-item>
         
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>设置</span>
        </template>
        <el-menu-item-group>
         
          <el-menu-item index="/shens">管理员设置</el-menu-item>

        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>说明</span>
        </template>
        <el-menu-item-group>
         
          <el-menu-item index="/sh">说明</el-menu-item>

        </el-menu-item-group>
      </el-submenu>
      
    </el-menu>
  </el-aside>
  <el-container>
    <el-header>
      <div class="top">
        <el-breadcrumb separator="">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>{{$route.meta.title}}</el-breadcrumb-item>
  <el-breadcrumb-item>{{$route.meta.name}}</el-breadcrumb-item>
</el-breadcrumb>

        <img src="1.png" alt="">
      </div>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>
<style lang="scss" scoped>
.top{
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
}
.el-menu{
  height: 100%;
  background-color: #545c64;
}
</style>

