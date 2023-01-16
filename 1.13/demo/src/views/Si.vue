<template>
	<div>
		<el-button type="info" plain>对公司名称、公司地址、营业执照、公司地区的更新，将使得公司资料被重新审核，请谨慎修改</el-button>
		<el-form ref="form" label-width="80px">
  <el-form-item label="公司名称">
    <el-input disabled placeholder="江苏传智播客教育科技股份有限公司"></el-input>
  </el-form-item>
  <el-form-item label="公司地址">
    <el-input disabled placeholder="北京市昌平区建材城西路金燕龙办公楼一层"></el-input>
  </el-form-item>
  <el-form-item label="邮箱">
    <el-input disabled placeholder="bd@itcastcn"></el-input>
  </el-form-item>
  <el-form-item label="备注">
    <el-input type="textarea" disabled placeholder="传智播客官网-好口碑IT培训机构,一样的教育,不一样的品质"></el-input>
  </el-form-item>
	</el-form>
	</div>
</template>
<style lang="scss" scoped>
.el-form{
	margin-top: 20px;
}
</style>

