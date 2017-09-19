<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '../static/css/weui.min.css';
@import '../static/css/style.less';
body {
  /*background-color: #fbf9fe;*/
  padding: 0 !important;
}

</style>
