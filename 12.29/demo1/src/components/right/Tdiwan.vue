<template>
    <div class="map">
      <div class="title">
        <h4>慕课外卖销售大盘</h4>
        <div class="text">User Total Count</div>
      </div>
      <div id="DT" style="width: 96%; height: 350px"></div>
    </div>
  </template>
  
  <script>
  import * as echarts from "echarts"
  import data from "../../requer.json"
  export default {
    mounted() {
      this.getEchart()
    },
    methods: {
      getEchart() {
        var myChart = echarts.init(document.getElementById("DT"))
        var geoGpsMap = {
          1: [127.9688, 45.368],
          2: [116.4551, 40.2539],
          3: [109.1162, 34.2004],
          4: [113.12244, 23.009505],
          5: [87.9236, 43.5883],
          6: [87.9236, 43.5883],
          7: [91.11, 29.97]
        }
        var geoCoordMap = {
          台湾: [121.5135, 25.0308],
          黑龙江: [127.9688, 45.368],
          内蒙古: [110.3467, 41.4899],
          吉林: [125.8154, 44.2584],
          北京市: [116.4551, 40.2539],
          辽宁: [123.1238, 42.1216],
          河北: [114.4995, 38.1006],
          天津: [117.4219, 39.4189],
          山西: [112.3352, 37.9413],
          陕西: [109.1162, 34.2004],
          甘肃: [103.5901, 36.3043],
          宁夏: [106.3586, 38.1775],
          青海: [101.4038, 36.8207],
          新疆: [87.9236, 43.5883],
          西藏: [91.11, 29.97],
          四川: [103.9526, 30.7617],
          重庆: [108.384366, 30.439702],
          山东: [117.1582, 36.8701],
          河南: [113.4668, 34.6234],
          // 江苏: [118.8062, 31.9208],
          // 安徽: [117.29, 32.0581],
          // 湖北: [114.3896, 30.6628],
          // 浙江: [119.5313, 29.8773],
          // 福建: [119.4543, 25.9222],
          // 江西: [116.0046, 28.6633],
          // 湖南: [113.0823, 28.2568],
          // 贵州: [106.6992, 26.7682],
          云南: [102.9199, 25.4663]
          // 广东: [113.12244, 23.009505],
          // 广西: [108.479, 23.1152],
          // 海南: [110.3893, 19.8516],
          // 上海: [121.4648, 31.2891],
        }
        var colors = [
          ["#1DE9B6", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
          [
            "#37A2DA",
            "#67E0E3",
            "#32C5E9",
            "#9FE6B8",
            "#FFDB5C",
            "#FF9F7F",
            "#FB7293",
            "#E062AE",
            "#E690D1",
            "#E7BCF3",
            "#9D96F5",
            "#8378EA",
            "#8378EA"
          ],
          [
            "#DD6B66",
            "#759AA0",
            "#E69D87",
            "#8DC1A9",
            "#EA7E53",
            "#EEDD78",
            "#73A373",
            "#73B9BC",
            "#7289AB",
            "#91CA8C",
            "#F49F42"
          ]
        ]
        var colorIndex = 0
        $(function () {
          var year = ["北京", "上海", "深圳", "杭州", "南京", "武汉"]
          var mapData = [[], [], [], [], [], []]
          /*柱子Y名称*/
          var categoryData = []
          var barData = []
          for (var key in geoCoordMap) {
            categoryData.push(key)
            mapData[0].push({
              year: "北京",
              name: key,
              value: randomNum(100, 300)
            })
            mapData[1].push({
              year: "上海",
              name: key,
              value: randomNum(100, 300)
            })
            mapData[2].push({
              year: "深圳",
              name: key,
              value: randomNum(100, 300)
            })
            mapData[3].push({
              year: "杭州",
              name: key,
              value: randomNum(100, 300)
            })
            mapData[4].push({
              year: "南京",
              name: key,
              value: randomNum(100, 300)
            })
            mapData[4].push({
              year: "武汉",
              name: key,
              value: randomNum(100, 300)
            })
          }
          for (var i = 0; i < mapData.length; i++) {
            barData.push([])
            for (var j = 0; j < mapData[i].length; j++) {
              barData[i].push(mapData[i][j].value)
            }
          }
          // dataType: "jsonp",
          // jsonp: "callback", //回掉函数名（右边）的参数名（左边），默认callback，服务端通过它来获取到回掉函数名
          // jsonpCallback: "callback", //默认jquery自动生成，返回的回调函数名字 callback
          function fn() {
            echarts.registerMap("china", data)
            var convertData = function (data) {
              var res = []
              for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name]
                if (geoCoord) {
                  res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                  })
                }
              }
              return res
            }
            var convertToLineData = function (data, gps) {
              var res = []
              for (var i = 0; i < data.length; i++) {
                var dataItem = data[i]
                var fromCoord = geoCoordMap[dataItem.name]
                debugger
                var toCoord = gps //郑州
                //  var toCoord = geoGps[Math.random()*3];
                if (fromCoord && toCoord) {
                  res.push([
                    {
                      coord: fromCoord,
                      value: dataItem.value
                    },
                    {
                      coord: toCoord
                    }
                  ])
                }
              }
              return res
            }
            var optionXyMap01 = {
              timeline: {
                data: year,
                axisType: "category",
                autoPlay: true,
                playInterval: 3000,
                left: "10%",
                right: "10%",
                bottom: "3%",
                width: "80%",
                //  height: null,
                label: {
                  normal: {
                    textStyle: {
                      color: "#ddd"
                    }
                  },
                  emphasis: {
                    textStyle: {
                      color: "#fff"
                    }
                  }
                },
                symbolSize: 10,
                lineStyle: {
                  color: "#555"
                },
                checkpointStyle: {
                  borderColor: "#777",
                  borderWidth: 2
                },
                controlStyle: {
                  showNextBtn: true,
                  showPrevBtn: true,
                  normal: {
                    color: "#666",
                    borderColor: "#666"
                  },
                  emphasis: {
                    color: "#aaa",
                    borderColor: "#aaa"
                  }
                }
              },
              baseOption: {
                animation: true,
                animationDuration: 1000,
                animationEasing: "cubicInOut",
                animationDurationUpdate: 1000,
                animationEasingUpdate: "cubicInOut",
                grid: {
                  right: "1%",
                  top: "15%",
                  bottom: "10%",
                  width: "20%"
                },
                tooltip: {
                  trigger: "axis", // hover触发器
                  axisPointer: {
                    // 坐标轴指示器，坐标轴触发有效
                    type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                    shadowStyle: {
                      color: "rgba(150,150,150,0.1)" //hover颜色
                    }
                  }
                },
                geo: {
                  show: true,
                  map: "china",
                  roam: true,
                  zoom: 1,
                  center: [113.83531246, 34.0267395887],
                  label: {
                    emphasis: {
                      show: false
                    }
                  },
                  itemStyle: {
                    normal: {
                      borderColor: "rgba(147, 235, 248, 1)",
                      borderWidth: 1,
                      areaColor: {
                        type: "radial",
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [
                          {
                            offset: 0,
                            color: "rgba(147, 235, 248, 0)" // 0% 处的颜色
                          },
                          {
                            offset: 1,
                            color: "rgba(147, 235, 248, .2)" // 100% 处的颜色
                          }
                        ],
                        globalCoord: false // 缺省为 false
                      },
                      shadowColor: "rgba(128, 217, 248, 1)",
                      // shadowColor: 'rgba(255, 255, 255, 1)',
                      shadowOffsetX: -2,
                      shadowOffsetY: 2,
                      shadowBlur: 10
                    },
                    emphasis: {
                      areaColor: "#389BB7",
                      borderWidth: 0
                    }
                  }
                }
              },
              options: []
            }
            for (var n = 0; n < year.length; n++) {
              optionXyMap01.options.push({
                backgroundColor: "#424345",
                title: [
                  {
                    /* text: '地图',
                           subtext: '内部数据请勿外传',
                           left: 'center',
                           textStyle: {
                               color: '#fff'
                           }*/
                  },
                  {
                    id: "statistic",
                    text: year[n] + "年数据统计情况",
                    left: "76%",
                    top: "6%",
                    textStyle: {
                      color: "#fff",
                      fontSize: 14
                    }
                  }
                ],
                xAxis: {
                  type: "value",
                  scale: true,
                  position: "top",
                  min: 0,
                  boundaryGap: false,
                  splitLine: {
                    show: false
                  },
                  axisLine: {
                    show: false
                  },
                  axisTick: {
                    show: false
                  },
                  axisLabel: {
                    margin: 2,
                    textStyle: {
                      color: "#aaa"
                    }
                  }
                },
                yAxis: {
                  type: "category",
                  //  name: 'TOP 20',
                  nameGap: 16,
                  axisLine: {
                    show: true,
                    lineStyle: {
                      color: "#ddd"
                    }
                  },
                  axisTick: {
                    show: false,
                    lineStyle: {
                      color: "#ddd"
                    }
                  },
                  axisLabel: {
                    interval: 0,
                    textStyle: {
                      color: "#ddd"
                    }
                  },
                  data: categoryData
                },
                series: [
                  //未知作用
                  {
                    //文字和标志
                    name: "light",
                    type: "scatter",
                    coordinateSystem: "geo",
                    data: convertData(mapData[n]),
                    symbolSize: function (val) {
                      return val[2] / 10
                    },
                    label: {
                      normal: {
                        formatter: "{b}",
                        position: "right",
                        show: true
                      },
                      emphasis: {
                        show: true
                      }
                    },
                    itemStyle: {
                      normal: {
                        color: colors[colorIndex][n]
                      }
                    }
                  },
                  //地图
                  {
                    type: "map",
                    map: "china",
                    geoIndex: 0,
                    aspectScale: 0.75, //长宽比
                    showLegendSymbol: false, // 存在legend时显示
                    label: {
                      normal: {
                        show: false
                      },
                      emphasis: {
                        show: false,
                        textStyle: {
                          color: "#fff"
                        }
                      }
                    },
                    roam: true,
                    itemStyle: {
                      normal: {
                        areaColor: "#031525",
                        borderColor: "#FFFFFF"
                      },
                      emphasis: {
                        areaColor: "#2B91B7"
                      }
                    },
                    animation: false,
                    data: mapData
                  },
                  //地图点的动画效果
                  {
                    //  name: 'Top 5',
                    type: "effectScatter",
                    coordinateSystem: "geo",
                    data: convertData(
                      mapData[n]
                        .sort(function (a, b) {
                          return b.value - a.value
                        })
                        .slice(0, 20)
                    ),
                    symbolSize: function (val) {
                      return val[2] / 10
                    },
                    showEffectOn: "render",
                    rippleEffect: {
                      brushType: "stroke"
                    },
                    hoverAnimation: true,
                    label: {
                      normal: {
                        formatter: "{b}",
                        position: "right",
                        show: true
                      }
                    },
                    itemStyle: {
                      normal: {
                        color: colors[colorIndex][n],
                        shadowBlur: 10,
                        shadowColor: colors[colorIndex][n]
                      }
                    },
                    zlevel: 1
                  },
                  //地图线的动画效果
                  {
                    type: "lines",
                    zlevel: 2,
                    effect: {
                      show: true,
                      period: 4, //箭头指向速度，值越小速度越快
                      trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                      symbol: "arrow", //箭头图标
                      symbolSize: 2 //图标大小
                    },
                    lineStyle: {
                      normal: {
                        color: colors[colorIndex][n],
                        width: 0.1, //尾迹线条宽度
                        opacity: 0.5, //尾迹线条透明度
                        curveness: 0.3 //尾迹线条曲直度
                      }
                    },
                    data: convertToLineData(mapData[n], geoGpsMap[Math.ceil(Math.random() * 6)])
                  },
                  //柱状图
                  {
                    zlevel: 1.5,
                    type: "bar",
                    symbol: "none",
                    itemStyle: {
                      normal: {
                        color: colors[colorIndex][n]
                      }
                    },
                    data: barData[n]
                  }
                ]
              })
            }
            myChart.setOption(optionXyMap01)
          }
          fn()
        })
        function randomNum(minNum, maxNum) {
          switch (arguments.length) {
            case 1:
              return parseInt(Math.random() * minNum + 1, 10)
              break
            case 2:
              return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
              break
            default:
              return 0
              break
          }
        }
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .map {
    color: #fff;
    width: 900px;
    height: 450px;
    background-color: #424446;
    overflow: hidden;
    padding: 10px;
    box-sizing: border-box;
    position: relative;
  }
  .title {
    position: absolute;
    left: 15;
    z-index: 10;
  }
  #DT {
    position: absolute;
    top: 0;
  }
  h4 {
    margin: 0;
  }
  .text {
    font-size: 12px;
    transform: scale(0.8); // 缩放
    width: 90px;
  }
  </style>