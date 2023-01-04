<template>
  <div class="login">
    <div class="box">
      <h1>iHRM后台登录系统</h1>
      <el-form :model="form" >
        <el-form-item>
          <el-input  placeholder="电话" />
        </el-form-item>
        <el-form-item>
          <el-input
            type="password"
            placeholder="密码"
            show-password
          />
        </el-form-item>
				<el-button type="primary">登录</el-button>
      </el-form>
			<div class="p">还没有账号，立即注册</div>
    </div>
  </div>
</template>
<script>
import { reactive } from 'vue'
export default {
  setup(props) {
    // const form = reactive({
    // 	name:'',
    // 	password:""
    // })
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background: url(../../public/login.c75bab6.jpg) 50% 50% no-repeat;
}
.box {
  width: 300px;
  padding-top: 100px;
  text-align: center;
  color: #fff;
  margin: auto;
}
.el-button{
	width: 300px;
}
</style>
