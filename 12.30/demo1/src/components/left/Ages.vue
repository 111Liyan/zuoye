<template>
    
        <div class="age">
            <div class="one">
                <div class="oneLeft">
                    <div class="p">慕课外卖用户年龄分布&平均年龄</div>
                    <div class="h6">Distribution Of Age</div>
                </div>
                <div class="oneRight">
                    30.08<span>岁</span>
                </div>
            </div>
            <div class="center"><img src="../../../public/age.png"></div>
            <div class="bottom">
                <div class="one-tow">
                    <h3>304,378</h3>
                    <div class="ages">
                        <span class="a"></span>0-20
                    </div>
                </div>
                <div class="one-tow">
                    <h3>505,391</h3>
                    <div class="ages">
                        <span class="b"></span>20-30
                    </div>
                </div>
                <div class="one-tow">
                    <h3>725,216</h3>
                    <div class="ages">
                        <span class="c"></span>30-50
                    </div>
                </div>
                <div class="one-tow">
                    <h3>204,934</h3>
                    <div class="ages">
                        <span class="d"></span>>50
                    </div>
                </div>
            </div>
        </div>
</template>
<style lang="scss" scoped>
.age {
    width: 100%;
    box-sizing: border-box;
    color: #fff;
    // padding: 10px 15px 10px 15px;
    background-color: #2a2b2d;
    height: 170px;

    .one {
        display: flex;

        .oneLeft {
            .p {
                font-size: 13px;
                font-weight: 700;
            }

            .h6 {
                font-size: 10px;
            }
        }

        .oneRight {
            font-size: 35px;
            font-weight: 700;
            color: #fff;
            margin-left: 13px;

            span {
                font-weight: 400;
                font-size: 12px;
            }
        }
    }

    .center {
        width: 320px;
        margin-top: 10px;

        img {
            width: 100%;

        }
    }

    .bottom {
        display: flex;

        .one-tow {
            flex: 1;

            text-align: center;

            h3 {
                font-size: 16px;
            }

            .ages {
                line-height: 12px;

                .a {
                    line-height: 12px;
                    display: inline-block;
                    width: 5px;
                    height: 5px;
                    border-radius: 100%;
                    background-color: #52C41A;
                    margin-right: 3px;
                }

                .b {
                    line-height: 12px;
                    display: inline-block;
                    width: 5px;
                    height: 5px;
                    border-radius: 100%;
                    background-color: #c4ef76;
                    margin-right: 3px;
                }

                .c {
                    line-height: 12px;
                    display: inline-block;
                    width: 5px;
                    height: 5px;
                    border-radius: 100%;
                    background-color: #c9f192;
                    margin-right: 3px;
                }

                .d {
                    line-height: 12px;
                    display: inline-block;
                    width: 5px;
                    height: 5px;
                    border-radius: 100%;
                    background-color: #f9fb9d;
                    margin-right: 3px;
                }

                text-align: center;
                font-size: 12px;
            }
        }
    }
}

.m-progress {
    height: 24px;
    margin: 0 auto;
    display: flex;

    .m-progress-outer {
        width: 320px;

        .m-progress-inner {
            display: inline-block;
            width: 100%;
            background: #424345;
            // border-radius: 100px;
            border: 1px solid #ccc;

            .u-progress-bg {
                background: #929395;
                transition: all .3s cubic-bezier(.08, .82, .17, 1);
            }

            .u-success-bg {
                background: #929395;
            }
        }
    }

    .u-success {
        width: 16px;
        height: 16px;
        fill: #52C41A;
        margin-left: 8px;
        margin-top: 4px;
    }

    .u-progress-text {
        font-size: 16px;
        line-height: 24px;
        margin-left: 8px;
        color: rgba(0, 0, 0, .45);
    }
}
</style>

