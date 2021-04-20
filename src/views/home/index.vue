<!--
 * @Author: ywkjFE-snippets
 * @Date: 2021-04-12 21:20:16
 * @Desc:
-->
<template lang="pug">
  dv-full-screen-container.main
    .main-bd
      HomeHeader
      .content
        .left
          DataViewLeft
        .center
          DataViewCenter
        .right
          DataViewRight
</template>

<script>
import HomeHeader from "_COMPONENTS_/Header/Home.vue";
import DataViewLeft from "_COMPONENTS_/DataView/Left.vue";
import DataViewCenter from "_COMPONENTS_/DataView/Center.vue";
import DataViewRight from "_COMPONENTS_/DataView/Right.vue";
export default {
  components: { HomeHeader, DataViewLeft, DataViewCenter, DataViewRight },
  props: {},
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
.main
  background rgba(4, 17, 62, 1)
.main-bd
  padding 0 50px
  .content
    display flex
    justify-content space-between
    .center
      flex 1
</style>
