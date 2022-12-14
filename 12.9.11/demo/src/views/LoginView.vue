<template>
  <div class="box">
    <el-form :model="ruleForm" class="app" :rules="rules" ref="ruleForm">
      <img src="favicon.ico" alt="" />
      <el-form-item prop="username">
        <el-input v-model="ruleForm.username" prefix-icon="el-icon-user" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="ruleForm.password"
          prefix-icon="el-icon-lock"
          placeholder="请输入密码"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item class="btn">
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    }
  },
  methods: {
    dl() {
      if (this.form.username == "admin" && this.form.password == "123456") {
        this.$http.send("/login", this.form, "post").then((res) => {
          console.log(res)
          if (res.data.meta.status == 200) {
            this.$router.push("/")
          }
        })
      } else {
        this.$message.error("密码或用户名错误")
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  background-color: #2b4b6b;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.app {
  width: 500px;
  background-color: #fff;
  padding: 80px 20px;
  border-radius: 8px;
  padding-bottom: 50px;
  position: relative;
  img {
    position: absolute;
    width: 140px;
    height: 140px;
    border-radius: 150px;
    top: -100px;
    left: 190px;
    border: 10px solid #fff;
    box-shadow: 5px 5px 10px #ccc;
    background-color: #ccc;
  }
}
.btn {
  text-align: right;
}
</style>
