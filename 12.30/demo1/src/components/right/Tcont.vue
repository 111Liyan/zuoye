<template>
    <div class="list">
        <p :class="[cue===index ?'active':'']"  v-for="(item,index) in list" :key="index" @click="add(index)"> {{ item }}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list:['ALL','北京','上海','深圳','杭州','南京','武汉'],
            cue:0
        }
    },
    methods:{
        add(index){
            this.cue=index
        }
    }
}
</script>
<style lang="scss" scoped>
.list{
    display: flex;
    justify-content:  space-around;
    color: #717a86;
    .active{
      background-color: #8f9daa;
        width: 100px;
        color: #fff;
    }
}
</style>



