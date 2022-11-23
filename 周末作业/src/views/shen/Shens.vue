<template>
    <div class="div">
        <h1>管理员信息</h1>
        <div class="top">
            <p>姓名：</p>
            <p>注册时间：</p>
            <p>管理员权限：</p>
            <p>管理员ID：</p>
            <p>更换头像：<el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
            >
              <img src="2.png" class="avatar" />
            </el-upload></p>
        </div> 
    </div>
</template>
<style lang="scss" scoped>
h1{
    text-align: center;
}
.top{
    width: 400px;
    height: 400px;
    margin: auto;
    background-color: #f9fafc;
    padding: 20px;
    p{
        margin-top: 30px;
    }
}
</style>
