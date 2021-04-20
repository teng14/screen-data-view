<!--
 * @Author: ywkjFE-snippets
 * @Date: 2021-04-12 21:20:16
 * @Desc:
-->
<template lang="pug">
  .module-box(:class='type')
    .module-box-title {{title}}
    .module-box-content
      slot
</template>

<script>
export default {
  components: {},
  props: {
    type: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="stylus">
.module-box
  background url(./images/bg_module.svg) no-repeat center center
  background-size 100% 100%
  &.right
    background-image url('./images/bg_module_right.svg')
    .module-box-title
      text-align left
      padding-right 0
      padding-left 20px
  &.small
    background-image url('./images/bg_module_small.svg')
    .module-box-title
      text-align left
      padding-right 0
      padding-left 20px
  .module-box-title
    text-align: right;
    color: rgba(255, 255, 255, 0.63921568627451);
    font-family: 'PingFangSC-Regular', 'PingFang SC', sans-serif;
    font-weight: 400;
    line-height: 2.5rem;
    padding-right: 20px;
    font-size 0.8rem
</style>
