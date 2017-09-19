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
@import '~font-awesome/css/font-awesome.css';

body {
  background-color: #fbf9fe;
  height:100%;
  margin:0;
}
html{
  height:100%;
}

</style>
