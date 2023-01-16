<template>
  <div class="login">
    <div class="box">
      <h1>iHRM后台登录系统</h1>
			<el-form ref="form" :model="form">
  <el-form-item >
    <el-input v-model="form.name" placeholder="账号"></el-input>
  </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" type="password" placeholder="密码" show-password />
        </el-form-item>
        <el-button class="bth" type="primary" @click="login">登录</el-button>
      </el-form>
      <div class="p">账号：13800000002 <span>密码：123456</span></div>
			<el-button type="warning">学习文档</el-button>
    </div>
  </div>
</template>
<script>
export default {
data() {
	return {
		form:{
			name:'',
			password:''
		}
	}
},
methods:{
	login(){
		if(this.form.name=='13800000002'||this.form.password=='123456'){
			console.log(111);
			this.$router.push('/')
		}
	}
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
.bth {
  width: 300px;
}
</style>
