<template>
  <div class="import">
    <el-upload class="upload-demo" drag>
      <el-button size="small" type="primary" style="margin-top: 60px;">点击上传</el-button>
    </el-upload>
    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
 
};
</script>

<style lang='scss' scoped>
.import{
	margin: 100px 0 0 300px;
	display: flex;
}
</style>
