<!--
 * @Author: ywkjFE-snippets
 * @Date: 2021-04-12 21:20:16
 * @Desc:
-->
<template lang="pug">
  .module
    ModuleBox.dv-box(title='生产面积(万亩)')
      .chart
        .chart-title 测试
        .chart-bd
          <dv-charts :option="option1" style="width:430px;height:11rem" />

    ModuleBox.dv-box(title='加工厂合作社数量')
      .chart
        .chart-bd
          <Chart :options="jiagongOption" style="width:430px;height:11rem" />

    ModuleBox.dv-box(title='茶叶产量（吨）')
      .chart
        .chart-bd
          <Chart :options="chacanliangOption" style="width:430px;height:11rem" />

    ModuleBox.dv-box(title='茶叶产值(万元）')
      .chart
        .chart-bd
          <Chart :options="chacanzhiOption" style="width:430px;height:11rem" />
</template>

<script>
import ModuleBox from "./ModuleBox";
import Chart from "../Chart";
export default {
  components: { ModuleBox, Chart },
  props: {},
  data() {
    return {
      option1: {
        title: {
          text: "周销售额趋势"
        },
        xAxis: {
          name: "第一周",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          name: "销售额",
          data: "value"
        },
        series: [
          {
            data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
            type: "line"
          }
        ]
      },
      // 加工厂
      jiagongOption: {
        backgroundColor: "",
        color: ["#70B603", "#FF6900"],
        dataset: {
          source: [
            [
              "type",
              "2014年",
              "2015年",
              "2016年",
              "2017年",
              "2018年",
              "2019年"
            ],
            ["合作社", 320, 332, 301, 334, 390, 520],
            ["加工厂", 220, 182, 191, 234, 290, 310]
          ]
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["合作社", "加工厂"],
          icon: "rect",
          bottom: 0
        },
        grid: {
          left: 0,
          right: "4%",
          top: "3%",
          bottom: "15%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["2014年", "2015年", "2016年", "2017年", "2018年", "2019年"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            type: "line",
            stack: "总量",
            smooth: true,
            areaStyle: {
              opacity: 0.2
            },
            seriesLayoutBy: "row"
          },
          {
            type: "line",
            stack: "总量",
            smooth: true,
            areaStyle: {
              opacity: 0.2
            },
            seriesLayoutBy: "row"
          }
          // {
          //   name: "加工厂",
          //   type: "line",
          //   stack: "总量",
          //   smooth: true,
          //   areaStyle: {},
          //   data: [220, 182, 191, 234, 290, 330, 310]
          // }
        ]
      },
      // 茶产量
      chacanliangOption: {
        backgroundColor: "",
        dataset: {
          source: [
            [
              "type",
              "2014年",
              "2015年",
              "2016年",
              "2017年",
              "2018年",
              "2019年"
            ],
            ["绿茶", 0, 332, 301, 334, 390, 520],
            ["红茶", 0, 182, 191, 234, 290, 310],
            ["其他", 0, 282, 291, 334, 290, 410],
            ["名茶", 0, 0, 391, 434, 290, 510],
            ["春茶", 0, 482, 491, 534, 290, 710]
          ]
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["绿茶", "红茶", "其他", "名茶", "春茶"],
          icon: "rect",
          bottom: 0
        },
        grid: {
          left: 0,
          right: "4%",
          top: "3%",
          bottom: "15%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["2014年", "2015年", "2016年", "2017年", "2018年", "2019年"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row"
          },
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row"
          },
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row"
          },
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row"
          },
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row"
          }
        ]
      },
      // 茶产值
      chacanzhiOption: {
        backgroundColor: "",
        dataset: {
          source: [
            [
              "type",
              "2014年",
              "2015年",
              "2016年",
              "2017年",
              "2018年",
              "2019年"
            ],
            ["绿茶", 0, 332, 301, 334, 390, 520],
            ["红茶", 100, 182, 191, 234, 290, 310],
            ["其他", 0, 282, 291, 334, 290, 410],
            ["名茶", 20, 0, 391, 434, 290, 510],
            ["春茶", 0, 482, 491, 534, 290, 710]
          ]
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["绿茶", "红茶", "其他", "名茶", "春茶"],
          icon: "rect",
          bottom: 0
        },
        grid: {
          left: 0,
          right: "4%",
          top: "3%",
          bottom: "15%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["2014年", "2015年", "2016年", "2017年", "2018年", "2019年"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            type: "bar",
            smooth: true,
            seriesLayoutBy: "row"
          },
          {
            type: "bar",
            smooth: true,
            seriesLayoutBy: "row"
          },
          {
            type: "bar",
            smooth: true,
            seriesLayoutBy: "row"
          },
          {
            type: "bar",
            smooth: true,
            seriesLayoutBy: "row"
          },
          {
            type: "bar",
            smooth: true,
            seriesLayoutBy: "row"
          }
        ]
      }
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="stylus">
.chart
  height 100%
  padding 10px
  .chart-title
    font-size 16px
    color #fff
.module
  .dv-box
    margin-bottom 15px
    &:last-child
      margin-bottom 0
</style>
