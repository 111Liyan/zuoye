<template>
	<div class="category">
		<h3>{{title}}分类</h3>
		<!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
		<slot :games="games">我是一些默认值，当使用者没有传递具体结构时，我会出现1</slot>
	</div>
</template>

<script>
	export default {
		props:['title'],
        data() {
			return {
				games:['植物大战僵尸','红色警戒','空洞骑士','王国']
			}
		},
	}
</script>

<style scoped>
	.category{
		background-color: skyblue;
		width: 200px;
		height: 300px;
	}
	h3{
		text-align: center;
		background-color: orange;
	}
	video{
		width: 100%;
	}
	img{
		width: 100%;
	}
</style>
