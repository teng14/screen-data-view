<template lang="pug">
#app
  transition(name='fade', mode='out-in')
    keep-alive
      router-view(v-if='$route.meta.keepAlive')
  transition(name='fade', mode='out-in')
    router-view(v-if='!$route.meta.keepAlive')
</template>
<script>
export default {
  components: {},
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
<style lang="stylus">
@import '~_STYLUS_/global'
</style>
