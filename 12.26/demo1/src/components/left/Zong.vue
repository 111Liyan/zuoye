<template>
     <div class="total">
        <div class="header">
            <div class="p">慕课外卖用户总数</div>
            <div class="user">User Total Count</div>
            <div class="h3">1,739,919</div>
            <div class="sp">每日增长率:73.90% <span>每月增长率:117.37%</span></div>
            <div class="m-progress" :style="`width:${width}px;`">
                <div class="m-progress-outer">
                    <div class="m-progress-inner">
                        <div :class="['u-progress-bg', { 'u-success-bg': progress >= 100 }]"
                            :style="`width: ${progress >= 100 ? 100 : progress}%; height: ${strokeWidth}px;`"></div>
                    </div>
                </div>
                <template v-if="showInfo"></template>
                <svg class="u-success" v-if="progress >= 100" viewBox="64 64 896 896" data-icon="check-circle"
                    aria-hidden="true" focusable="false">
                    <path
                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z">
                    </path>
                </svg>
            </div>
        </div>
        <div style="width:100%;height: 5px; background-color: #2a2b2d;"></div>
        <div style="width:100%;height: 5px; background-color: #424345;"></div>
    </div>
</template>
<script>
export default {
    props: {
        width: { // 进度条总宽度
            type: Number,
            default: 600
        },
        progress: { // 当前进度
            type: Number,
            default: 73.90
        },
        strokeWidth: { // 进度条线的宽度
            type: Number,
            default: 8
        },
        showInfo: { // 是否显示进度数值或状态图标
            type: Boolean,

        }
    },
}
</script>

<style lang="scss" scoped>
.total {
    width: 100%;
    background-color: #1c1c1c;
    color: #fff;
    height: 120px;
    // font-weight: 400;
    // padding: 5px;
    box-sizing: border-box;
}

.header {
    background-color: #424345;
    height: 120px;
    // padding: 10px 15px 10px 15px;
    box-sizing: border-box;

    .p {
        font-size: 18px;
        margin-top: -10px;
        color: #fff;
    }

    .user {
        font-size: 8px;
       
        // margin: 5px 0;
        color: #fff;
    }

   .h3{
    font-size: 17px;
   }

    .sp {
        color: #b4cc80;
        font-size: 12px;

        span {
            color: #52C41A;
            margin-left: 5px;
        }
    }
}
</style>

