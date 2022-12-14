<template>
	<div>

    <!-- 对话框 -->
		<el-dialog  :title="!ruleForm.id ?添加用户:修改用户 :visible.sync="visible" width="50%">
      <!-- 添加的表单 -->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username"  :disabled="ruleForm,id">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="mobile">
          <el-input v-model="ruleForm.mobile"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
      <!-- 添加的表单 -->
    </el-dialog>
	</div>
</template>
<script>
export default {
	data() {
		return {
			ruleForm:{
				username:"",
				password:"",
				email:"",
				mobile:"",
				id:""
			}
		}
	},
	methods:{
		init(info) {
this.visible = true
if (info) {
this.ruleForm = info
}
		},
		adduser() {
addUser(this.ruleForm).then((res) => {console.log(res)
		})
	},
	}
}
</script>

