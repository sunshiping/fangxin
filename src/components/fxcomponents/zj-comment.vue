<template>
  <div>
    <div class="weui-panel">
      <div class="panel__hd" v-for="item in header">
        <div class="panel_type">{{item.type}}</div>
        <div class="panel_data">{{item.data}}</div>
      </div>
      <div v-for="item in list">
        <div class="weui-media-box_appmsg weui-media-box">
        <div class="weui-media-box__hd" v-if="item.src">
          <img class="weui-media-box__thumb" :src="item.src" alt="">
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title">{{item.name}}</h4>
          <div class="weui-media-box_appmsg">
            <div class="weui-cell__hd"></div>
            <div class="vux-cell-bd vux-cell-primary">
              <p><label class="vux-label weui-media-box__desc">{{item.mess}}</label></p>
              <span class=".vux-label-desc"></span>
            </div>
            <div class="weui-cell__ft house-price">{{item.price}}</div>
          </div>
          <p class="weui-media-box__desc">{{item.address}}</p>
          <div class="weui-media-box_appmsg">
            <div class="weui-cell__hd"></div>
            <div class="vux-cell-bd vux-cell-primary">
              <p><label class="vux-label weui-media-box__desc">{{'五星'}}</label></p>
              <span class=".vux-label-desc"></span>
            </div>
            <div class="weui-cell__ft star-right">{{'未评价'}}</div>
          </div>

        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { go, getUrl } from '../libs/router'
// import { Panel } from 'vux'

export default {
  name: 'panel',
  props: {
    header: Array,
    list: Array
  }
}
</script>

<style lang="less">
@import '../../../static/styles/weui/widget/weui_cell/weui_cell_global';
@import '../../../static/styles/weui/widget/weui_cell/weui_access';
@import '../../../static/styles/weui/widget/weui_panel/weui_panel';
@import '../../../static/styles/weui/widget/weui_media_box/weui_media_box';

.weui-panel .weui-cell:first-child:before {
  display: block;
}
  .panel__hd{
    padding: 14px 15px 10px;
    color: #999999;
    font-size: 13px;
    position: relative;
  }
  .panel__hd:after
  {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #E5E5E5;
    color: #E5E5E5;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
  .panel_type{
    font-size: 16px;
    color: #000000;
  }
  .panel_data{
    font-size: 14px;
    color: #000000;
  }
  .house-price{
    text-align: right;
    color: red !important;
  }
  .star-right{
    border-top: 1px solid lightseagreen;
    border-bottom: 1px solid lightseagreen;
    border-radius: 5px;
    color: lightseagreen !important;
    text-align: right;
    padding: 0 5px;
    font-size: 14px;
  }
.panel__hd_desc{
  color: #999999;
  font-size: 13px;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
