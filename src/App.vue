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

body {
  background-color: #fbf9fe;
}
.vux-popup-mask{
  top:100px !important;
}
.fx-swiper{
  margin: 10px 0;
  .vux-swiper-item{
    width: 95% !important;
    border-radius: 10px !important;
    overflow: hidden !important;
    margin: 0px auto 0px 10px !important;
  }
}
.require-icon .weui-label:before{
  content: "*";
  color: #ff4949;
  margin-right: 4px;
}
.personal{
  background-color: #fff;
  .weui-label{
    text-align: right;
    padding-right: 10px;
    font-size: 14px;
  }
  .weui-input{
    font-size: 14px;
  }
  .weui-cells__title{
    font-size: 18px;
    color: #333;
    font-weight: 100;
    padding: 15px;
  }
  .weui-cell{
    padding: 15px;
  }
}
.check{
  label{
    font-size: 12px;
  }
}
  .line-1{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
</style>
