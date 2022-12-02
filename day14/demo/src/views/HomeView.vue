<template>
	<div class="container">
		<stre title="美食" >
			<img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
		</stre>

		<stre title="游戏" >
			<ul>
				<li v-for="(g,index) in games" :key="index">{{g}}</li>
			</ul>
		</stre>

		<stre title="电影">
			<video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
		</stre>
	</div>
</template>

<script>
import stre from "../components/Stre.vue"
	export default {
		name:'App',
		components:{stre},
		data() {
			return {
				games:['植物大战僵尸','红色警戒','空洞骑士','王国']
			}
		},
	}
</script>

<style scoped>
	.container{
		display: flex;
		justify-content: space-around;
	}
</style>
