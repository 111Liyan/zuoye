<template>
    <div class="list">
        <!-- 子传父 -->
     <!-- <p @click="$emit('click')">{{item.name}}</p> -->
     <!-- 兄弟传值 -->
     <!-- <button @click="page">传值</button> -->
     <!-- v-model 传值 -->
     <!-- <h1>子组件的值{{pDate}}</h1>
     <p>这是父组件传过来的值：{{meg}}</p>
     <button @click="valuesClick">v-model </button> -->

     <!-- <p>子组件的值：{{chilDate}}</p>
     <p>子组件获取到的父组件的值：{{cpdata}}</p> 
    -->

    <!-- ref 传值 -->
    <!-- <div></div> -->

    <!-- vuex 传值 -->
    <p>第一个子组件获取的值：{{showDate}}</p>
    <button @click="hart">点击传给第二个</button>
    </div>
</template>
<script>
import eventBus from "../uilt/req"
export default {
    // 父传子
    // props:["item"],
    props:['value'],
    data() {
        return {
            // 兄弟的传值
            // mag:'兄弟传值',
            // v-model 传值
            // meg:this.value,
            // pDate:子组件的值
            // children 和 parent
            // chilDate:"子组件的值"
            // ref
            // chilDate:"子组件的值"
            // vuex 传值
            dateB:"第一个子组件的值"

        }
    },
    computed:{
        cpdata(){
            return this.$parent.cpdata
        } ,

        showDate(){
            return this.$store.state.dateB
        }
    },
    methods:{
        page(){
            eventBus.$emit('page',this.mag)
        },
        valuesClick(){
            this.$emit('input',this.pDate)
        },
        chidEvent(){
            console.log('子组件的方法');
        },
        hart(){
            this.$store.commit('dateBs',this.dateB)
        }
    }
}
</script>
<style lang="scss" scoped>
.list{
    display: flex;
    justify-content: space-between;
}
</style>


