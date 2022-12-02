<template>
	<div class="container">
		<shaet title="游戏" >
			<template scope="jojo">
				<ul>
					<li v-for="(g,index) in jojo.games" :key="index">{{g}}</li>
				</ul>
			</template>
		</shaet>

		<shaet title="游戏" >
			<template scope="jojo">
				<ol>
					<li v-for="(g,index) in jojo.games" :key="index">{{g}}</li>
				</ol>
			</template>
		</shaet>

		<shaet title="游戏" >
			<template scope="jojo">
				<h4 v-for="(g,index) in jojo.games" :key="index">{{g}}</h4>
			</template>
		</shaet>
	</div>
</template>

<script>
	import shaet from '../components/Shaet'
	export default {
		name:'App',
		components:{shaet}
	}
</script>

<style>
	.container,.foot{
		display: flex;
		justify-content: space-around;
	}
	h4{
		text-align: center;
	}
</style>