<template>
    <div class="list">
        <p v-for="(item,index) in list" :key="index">{{item}}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list:['订单量','销售额','用户数','退单量']
        }
    },
}
</script>
<style lang="scss" scoped>
.list{
    display: flex;
    justify-content: space-around;
}
</style>


