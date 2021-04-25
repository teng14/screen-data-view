<!--
 * @Author: ywkjFE-snippets
 * @Date: 2021-04-12 21:20:16
 * @Desc:
-->
<template lang="pug">
.module
  ModuleBox.dv-box(title="茶叶分类销售占比", type="right")
    .chart
      .chart-bd
        <Chart :options="fenleiOptions" style="width:430px;height:15rem" />

  ModuleBox.dv-box(title="渠道销售信息", type="right")
    .chart
      .chart-bd
        <Chart :options="qudaoOptions" style="width:430px;height:15rem" />

  ModuleBox.dv-box(title="全年茶叶销售产值", type="right")
    .chart
      .chart-bd
        <Chart :options="chanzhiOptions" style="width:430px;height:15rem" />
</template>

<script>
import ModuleBox from "./ModuleBox";
import Chart from "../Chart";
const labelRight = {
  position: "right",
};
const labelLeft = {
  position: "left",
};
export default {
  components: { ModuleBox, Chart },
  props: {},
  data() {
    return {
      // 分类占比
      fenleiOptions: {
        tooltip: {
          trigger: "item",
        },
        // legend: {
        //   orient: "vertical",
        //   left: "left"
        // },
        series: [
          {
            name: "分类销售",
            type: "pie",
            radius: "100%",
            labelLine: {
              show: false,
            },
            label: {
              position: "inner",
              formatter: "{b} \n{d}%",
              fontSize: 12,
            },
            data: [
              {
                value: 1048,
                name: "绿茶",
              },
              { value: 735, name: "毛茶" },
              { value: 580, name: "名优" },
              { value: 484, name: "红茶" },
              { value: 300, name: "其他" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
      // 渠道
      qudaoOptions: {
        angleAxis: {
          type: "category",
          data: ["商超", "直营", "批发市场", "出口"],
        },
        radiusAxis: {},
        polar: {},
        series: [
          {
            type: "bar",
            data: [60],
            coordinateSystem: "polar",
            name: "商超",
            stack: "a",
          },
          {
            type: "bar",
            data: [20],
            coordinateSystem: "polar",
            name: "直营",
            stack: "a",
          },
          {
            type: "bar",
            data: [1, 2, 3, 4, 1, 2, 5],
            coordinateSystem: "polar",
            name: "批发市场",
            stack: "a",
          },
          {
            type: "bar",
            data: [1, 2, 3, 4, 1, 2, 5],
            coordinateSystem: "polar",
            name: "出口",
            stack: "a",
          },
        ],
        legend: {
          show: true,
          data: ["商超", "直营", "批发市场", "出口"],
        },
      },
      // 产值
      chanzhiOptions: {
        // color: ["#FF6900"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          // top: 80,
          bottom: 30,
        },
        xAxis: {
          type: "value",
          position: "top",
          splitLine: {
            lineStyle: {
              type: "dashed",
            },
          },
        },
        yAxis: {
          type: "category",
          axisLine: { show: false },
          axisLabel: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          data: ["出口", "直营", "商超", "批发", "全部"],
        },
        series: [
          {
            name: "销量产值",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              formatter: "{b}",
            },
            data: [
              {
                value: -14000,
                label: labelRight,
              },
              { value: -5000, label: labelRight },
              {
                value: 5000,
                label: labelLeft,
                itemStyle: {
                  color: "#FF6900",
                },
              },
              {
                value: 3000,
                label: labelLeft,
                itemStyle: {
                  color: "#FF6900",
                },
              },
              { value: -1000, label: labelRight },
            ],
          },
        ],
      },
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="stylus">
.chart
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
