<template>
  <div class="login">
    <div class="box">
      <h1>elm后台管理系统</h1>
      <div class="top">
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px">
            <van-button round block type="info" 
              >登录</van-button
            >
            <p>温馨提示：</p>
            <p>未登录过的新用户，自动注册</p>
            <p>注册过的用户可凭账号密码登录</p>
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      if(this.username=='admin'||this.password=='123456'){
        Notify({ type: 'danger', message: '登录失败' });
      }else{
        this.$router.push('/')
        Notify({ type: 'success', message: '登录成功' });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
  background-color: #324057;
  width: 100%;
  height: 100vh;
}
.box {
  width: 100%;
  padding: 100px 0;
  text-align: center;
  margin-top: 20px;
  color: #fff;

  .top {
    width: 400px;
    height: 300px;
    background-color: #fff;
    margin: auto;
    p {
      color: red;
    }
  }
}
</style>
