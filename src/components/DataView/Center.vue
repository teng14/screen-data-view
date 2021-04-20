<!--
 * @Author: ywkjFE-snippets
 * @Date: 2021-04-12 21:20:16
 * @Desc:
-->
<template lang="pug">
  .module
    .map
      .map-cantainer(ref='mapCantainer')
    .module-bottom
      ModuleBox.dv-box(type='small', title='19年亩均单产')
        .chart
          .chart-bd
            <dv-digital-flop :config="config1" style="width:100%;height:3rem;" />

      ModuleBox.dv-box(type='small', title='19年亩均收益')
        .chart
          .chart-bd
            <dv-digital-flop :config="config2" style="width:100%;height:3rem;" />
      ModuleBox.dv-box(type='small', title='19年平均单价')
        .chart
          .chart-bd
            <dv-digital-flop :config="config3" style="width:100%;height:3rem;" />
</template>

<script>
import ModuleBox from "./ModuleBox";
import { getAreaData } from "_UTILS_";
import * as echarts from "echarts";

export default {
  components: { ModuleBox },
  props: {},
  data() {
    return {
      mapOption: {},
      config1: {
        number: [100],
        content: "{nt}公斤/亩",
        style: {
          fill: "#fff",
          fontSize: 20
        }
      },
      config2: {
        number: [110],
        content: "{nt}元",
        style: {
          fill: "#fff",
          fontSize: 20
        }
      },
      config3: {
        number: [3200],
        content: "{nt}元/公斤",
        style: {
          fill: "#fff",
          fontSize: 20
        }
      }
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.getAreaData();
    });
  },
  methods: {
    async getAreaData() {
      // 重庆区域码 500000
      try {
        const mapDataObj = await getAreaData(500100);
        const { mapJson, mapData } = mapDataObj;
        console.log(mapData);

        this.mapOption = {
          backgroundColor: "", // 背景颜色
          // tooltip: {
          //   trigger: "item",
          //   formatter: p => {
          //     console.log(p);
          //     let val = p.value;
          //     if (window.isNaN(val)) {
          //       val = 0;
          //     }
          //     let txtCon =
          //       "<div style='text-align:center'> 地区：" +
          //       p.name +
          //       "<br />value值：" +
          //       p.data.value +
          //       "<br />code：" +
          //       p.data.cityCode +
          //       "</div>";
          //     return txtCon;
          //   }
          // },
          visualMap: {
            type: "piecewise",
            pieces: [
              { value: 1000, label: "茶产业综合示范区", color: "#0DBA29" },
              { value: 5000, label: "茶叶重点区县", color: "#0DB1B1" }
            ],
            outOfRange: {
              color: "#082671"
            }
          },
          series: [
            {
              name: "地图",
              type: "map",
              mapType: "cityMap",
              zoom: 1.2, //当前视角的缩放比例
              roam: true, //是否开启平游或缩放

              aspectScale: 1.2, //地图长度比
              label: {
                show: true
              },
              itemStyle: {
                normal: {
                  show: true,
                  areaColor: "#082671", //地图区域的颜色 也可以颜色渐变如下的 areaColor
                  // areaColor:{
                  //     type: 'radial',
                  //     x: 0.5,
                  //     y: 0.5,
                  //     r: 0.8,
                  //     colorStops: [{
                  //         offset: 0,
                  //         color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                  //     }, {
                  //         offset: 1,
                  //         color: 'rgba(147, 235, 248, .5)' // 100% 处的颜色
                  //     }],
                  //     globalCoord: false // 缺省为 false
                  // },
                  borderColor: "#545967", //边界线颜色
                  borderWidth: "1" //边界线的宽度
                },
                emphasis: {
                  // 鼠标移入时区域的样式
                  areaColor: "#74C4F0",
                  borderWidth: 0
                  // color: "white"
                }
              },
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    color: "#fff" //省市区字体颜色
                  }
                },
                emphasis: {
                  //对应的鼠标悬浮效果
                  show: true,
                  textStyle: {
                    color: "#fff" //鼠标移入对应的省市区字体颜色
                  }
                }
              },
              data: mapData // 上面添加了 name,value,level,cityCode的数据
            }
          ]
        };
        const chart = echarts.init(this.$refs.mapCantainer, "dark");
        console.log(this.$refs.mapCantainer);
        echarts.registerMap("cityMap", mapJson, {});
        chart.setOption(this.mapOption);
      } catch (error) {}
    }
  }
};
</script>

<style scoped lang="stylus">
.map
  height 78vh
  .map-cantainer
    width 100%
    height 100%
.chart
  padding 10px
  .chart-title
    font-size 16px
    color #fff
.module
  .dv-box
    width 33%
  .module-bottom
    display flex
</style>
