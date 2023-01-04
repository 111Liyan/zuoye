<template>
    <div class="today">
        <div class="one">
            <div class="oneday">
                <div>
                    <img src="../../../public/微信图片_20221228233805.png" alt="">
                </div>
                <div>
                    <div class="h5">今日销售额</div>
                    <div class="h6">Today's Sales Amount</div >
                    <div class="h2">56,998,472</div >
                </div>
            </div>
            <div class="oneday">
                <div>
                    <img src="../../../public/微信图片_20221228233748.png" alt="">
                </div>
                <div>
                    <div class="h5">今日订单量</div>
                    <div class="h6">Today's Total Orders</div >
                    <div class="h2">3,496,490</div >
                </div>
            </div>
            <div class="oneday">
                <div>
                    <img src="../../../public/微信图片_20221228233757.png" alt="">
                </div>
                <div>
                    <div class="h5">今日交易用户数</div>
                    <div class="h6">Today's Fayed Users</div >
                    <div class="h2">758,349</div >
                </div>
            </div>
            <div class="oneday">
                <div>
                    <img src="../../../public/微信图片_20221228233812.png" alt="">
                </div>
                <div>
                    <div class="h5">今日新增用户数</div>
                    <div class="h6">Today's New Users</div >
                    <div class="h2">1,739,919</div >
                </div>
            </div>
            <div class="towday">
                <div>
                    <img src="../../../public/微信图片_20221228233737.png" alt="">
                    <div class="p">转化率</div>
                    <div class="h4">13.00%</div>
                </div>
                <div>
                    <img src="../../../public/微信图片_20221228233818.png" alt="">
                    <div class="p">退单率</div>
                    <div class="h4">5.66%</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "",
    components: {
    },
    data () {
        return {}
    },
    methods: {},
    created () { },
}
</script>

<style lang="scss" scoped>
.one {
    background-color: #424345;
    color: #fff;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .oneday {
        display: flex;
        div {
            margin-left: 10px;
        }
        .h5{
            font-size: 14px;
        }
        .h6{
            font-size: 12px;
        }
        .h2{
            font-size: 20px;
        }
    }
    .towday {
        display: flex;
        justify-content: space-between;
        margin-right: 10px;
        text-align: center;
        div {
            margin-left: 10px;
            .p {
                font-size: 12px;
            }
        }
    }
}
</style>