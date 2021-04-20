<!--
 * @Author: ywkjFE-snippets
 * @Date: 2021-04-12 21:20:16
 * @Desc:
-->
<template lang="pug">
  .header
    .text 重庆智慧茶叶-大数据中心
    .time {{time}}
</template>

<script>
import { dateFormat } from "_UTILS_";

export default {
  components: {},
  props: {},
  data() {
    return {
      time: "--:--:--"
    };
  },
  computed: {},
  watch: {},
  created() {
    this.coutDown();
  },
  mounted() {},
  methods: {
    coutDown() {
      this.time = dateFormat(+new Date());
      setInterval(() => {
        this.time = dateFormat(+new Date());
      }, 1000);
    }
  }
};
</script>

<style scoped lang="stylus">
@font-face {
  font-family: digi;
  src: url(https://dyimg.bosslib.com/ds-digi-webfont.woff2);
}
.header
  position relative
  height 85px
  background url('./images/bg_header.png') center center no-repeat
  .text
    line-height 73px
    font-size 36px
    color #fff
    text-align center
  .time
    position absolute
    left 0
    top 10px
    padding-left 40px
    height 29px
    line-height 29px
    font-size 23px
    font-family digi
    color #F7F7F7
    background url('./images/icon_clock.png') center left no-repeat
</style>
