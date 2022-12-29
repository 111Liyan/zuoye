<template>
  <div class="home">
   <button @click="nand">男生点名</button>
   <button @click="female">女生点名</button>
   <button @click="random">单人点名</button>
   <button @click="randoms">双人点名</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
 export default {
setup(props, ctx) {
const store = useStore();
const namelist= [
			{
				name: '李妍',
				sex: 0,
			},
			{
				name: '张世权',
				sex: 1,
			},
			{
				name: '王龙翔',
				sex: 1,
			},
			{
				name: '徐婉颖',
				sex: 0,
			},
			{
				name: '付高聪',
				sex: 1,
			},
			{
				name: '吴倩',
				sex: 0,
			},
			{
				name: '张立',
				sex: 1,
			},
			{
				name: '巴钦',
				sex: 1,
			},
			{
				name: '章奥博',
				sex: 1,
			},
			{
				name: '孙铭',
				sex: 1,
			},
			{
				name: '程怀博',
				sex: 1,
			},
			{
				name: '张建雨',
				sex: 1,
			},
			{
				name: '李宏恩',
				sex: 1,
			},
			{
				name: '王伟宸',
				sex: 1,
			},
			{
				name: '李宏恩',
				sex: 1,
			},
			{
				name: '孙旭瑶',
				sex: 0,
			},
			{
				name: '杨志豪',
				sex: 1,
			},
			{
				name: '高鹏亚',
				sex: 1,
			},
			{
				name: '宋海宇',
				sex: 1,
			},
			{
				name: '宋增杰',
				sex: 1,
			},
			{
				name: '侯建荞',
				sex: 0,
			},
			{
				name: '薛翔元',
				sex: 1,
			},
			{
				name: '郝嫚嫚',
				sex: 0,
			},
			{
				name: '代伊涵',
				sex: 1,
			},
			{
				name: '邓林柯',
				sex: 1,
			},
			{
				name: '章涵语',
				sex: 1,
			},
			{
				name: '郑锋',
				sex: 1,
			},
			{
				name: '江萌洋',
				sex: 0,
			},
			{
				name: '张宗耀',
				sex: 1,
			},
			{
				name: '周璇',
				sex: 0,
			},
			{
				name: '刘艺',
				sex: 0,
			},
			{
				name: '韩雨泽',
				sex: 1,
			},
		];

    

//男生点名
const nand = ()=>{
  // console.log(namelist);
  let malelist =  namelist.filter((item)=>item.sex === 1)
  const index = Math.floor(Math.random() * malelist.length)
  const name = malelist[index];
  console.log(name);
  store.commit('random', name);
}
//女生点名
const female =()=>{
  let femalelist = namelist.filter((item)=>item.sex === 0)
  const index = Math.floor(Math.random() * femalelist.length)
  const name = femalelist[index];
  console.log(name);
  store.commit('random', name);
}
//随机两人点名
const randoms = ()=>{
  const index = Math.floor(Math.random() * namelist.length);
  const index2 = Math.floor(Math.random() * namelist.length);
  const name = namelist[index];
  const name2 = namelist[index2];
  store.commit('random', [name,name2]);
  
}
//单人点名
const random = () => {
const index = Math.floor(Math.random() * namelist.length);
const name = namelist[index];
store.commit('random', name);
};
const data = reactive({});
return { ...toRefs(data) , random,nand,namelist,female,randoms};
 },
 };
</script>
<style lang="scss">
.home{
  display: flex;
  justify-content: center;
}
</style>

