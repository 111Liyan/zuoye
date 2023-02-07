<template>
  <div class="login">
    <div class="box">
      <h1>iHRM后台登录系统</h1>
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
        <el-form-item>
          <el-input v-model="ruleForm.mobile" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="ruleForm.password"
            type="password"
            placeholder="密码"
            show-password
          />
        </el-form-item>
        <el-button class="bth" type="primary" @click="login('ruleForm')"
          >登录</el-button
        >
      </el-form>
      <div class="p">账号：13800000002 <span>密码：123456</span></div>
    </div>
  </div>
</template>
<script>
import { getLogin } from '../../Api/Login'
// import { mapActions } from "vuex"
import {setToken} from "../../unlits/auth"
import {STATUS} from "../../unlits/Status"
export default {
  data() {
    return {
      ruleForm: {
        mobile: '13800000002',
        password: '123456'
      },
			rules: {
        mobile: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur",
          },
        ],
      },
    }
  },
  methods: {
		// ...mapActions(['login/list']),
    login(formName) {
			// this['login.list'](this.ruleForm)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (
            this.ruleForm.mobile == "13800000002" &&
            this.ruleForm.password == "123456"
          ) {
            getLogin(this.ruleForm).then((res) => {
              // console.log(res);
              if (res.status == STATUS.SUCCESS) {
                setToken(res.data.data);
                this.$notify({
                  title: res.data.message,
                  message: "成功",
                  type: "success",
                  duration: 4000,
                });
                this.$router.replace("/homes");
              } else {
                this.$notify({
                  title: res.status,
                  message: "有误",
                  type: "warning",
                  duration: 2000,
                });
              }
            });
          } else {
            this.$notify.error({
              title: "账号或者密码错误",
              message: "这是一条错误的提示消息",
            });
          }
        }
      });
    },
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
