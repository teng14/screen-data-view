<!--
 * @Author: ywkjFE-snippets
 * @Date: 2021-04-18 14:33:17
 * @Desc:
-->
<template lang="pug">
  .cantainer(ref='cantainer')

</template>

<script>
import * as echarts from "echarts";
export default {
  components: {},
  props: {
    options: {
      type: Object,
      default: {},
      required: true
    }
  },
  data() {
    return {
      chart: null
    };
  },
  computed: {},
  watch: {
    options: {
      hanlder(val) {
        this.chart.setOption(val);
      },
      deep: true
    }
  },
  created() {},
  mounted() {
    const chart = echarts.init(this.$refs.cantainer, "dark");
    chart.setOption(this.options);
    this.chart = chart;
  },
  methods: {}
};
</script>

<style scoped lang="stylus">
.cantainer
  width 100%
  height 100%
</style>
