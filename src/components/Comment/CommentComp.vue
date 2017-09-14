<template>
  <div>
    <!---->
    <div class="weui-panel">
      <!--header-->
      <div class="panel__hd" v-for="item in header">
        <div class="panel_type">{{item.type}}</div>
        <div class="panel_data">{{item.data}}</div>
      </div>
      <!--house message-->
      <div v-for="item in list">
        <div class="weui-media-box_appmsg weui-media-box">
        <div class="weui-media-box__hd" v-if="item.src">
          <img class="weui-media-box__thumb" :src="item.src" alt="">
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title">{{item.name}}</h4>
          <div class="weui-media-box_appmsg">
            <div class="vux-cell-primary weui-media-box__desc">
              {{item.mess}}
            </div>
            <div class="house-price">{{item.price}}</div>
          </div>
          <p class="weui-media-box__desc">{{item.address}}</p>
          <div class="weui-media-box_appmsg">
            <div class="vux-cell-primary">
              <rater v-model="data1" slot="value" :max="5" :font-size="20" disabled></rater>
            </div>
            <div class="star-right">{{'未评价'}}</div>
          </div>
        </div>
        </div>
      </div>
      <!--综合评论-->
      <div class="house-comm">
        <div class="evaluate-hd weui-media-box_appmsg">
          <div class="evaluate-left">{{ '房源综合评级' }}</div>
          <rater v-model="data1" slot="value" :max="5" :margin="4" disabled></rater>
        </div>
        <div class="weui-form-preview__bd">
          <div class="weui-media-box_appmsg">
            <div class="evaluate-left">{{ '装修' }}</div>
            <rater v-model="data2" slot="value" star="☻" active-color="#FF9900" :margin="4"></rater>
          </div>
          <div class="weui-media-box_appmsg">
            <div class="evaluate-left">{{ '户型' }}</div>
            <rater v-model="data3" slot="value" star="☻" active-color="#FF9900" :margin="4"></rater>
          </div>
          <div class="weui-media-box_appmsg">
            <div class="evaluate-left">{{ '采光' }}</div>
            <rater v-model="data4" slot="value" star="☻" active-color="#FF9900" :margin="4"></rater>
          </div>
          <div class="weui-media-box_appmsg">
            <div class="evaluate-left">{{ '视野' }}</div>
            <rater v-model="data5" slot="value" star="☻" active-color="#FF9900" :margin="4"></rater>
          </div>
          <div class="weui-media-box_appmsg">
            <div class="evaluate-left">{{ '内部设施' }}</div>
            <rater v-model="data6" slot="value" star="☻" active-color="#FF9900" :margin="4"></rater>
          </div>
        </div>
      </div>
      <!--textarea-->
      <div class="vux-x-textarea">
        <div class="weui-cell__bd">
          <x-textarea :max="300"  placeholder="输入您的评论吧" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></x-textarea>
        </div>
      </div>
    </div>
    <!--业主综合评级-->
    <div class="weui-panel">
      <div class="evaluate-hd weui-media-box_appmsg">
        <div class="evaluate-left">{{ '业主综合评级' }}</div>
        <rater v-model="data1" slot="value" :max="5" :margin="4"></rater>
      </div>
      <div class="weui-media-box_appmsg weui-form-preview__bd">
        <div class="evaluate-left">{{ '配合程度' }}</div>
        <rater v-model="data2" slot="value" star="☻" active-color="#FF9900" :margin="4"></rater>
      </div>

    </div>
  </div>
</template>

<script>
// import { go, getUrl } from '../libs/router'
import {Rater, XTextarea} from 'vux'

export default {
  components: {
    Rater,
    XTextarea
  },
  name: 'panel',
  props: {
    header: Array,
    list: Array
  },
  data () {
    return {
      data1: 0,
      data2: 1,
      data3: 2,
      data4: 3,
      data5: 4,
      data6: 5
    }
  }
}
</script>

<style lang="less" scoped="scoped">
/*@import '../../../static/styles/weui/widget/weui_cell/weui_cell_global';*/
/*@import '../../../static/styles/weui/widget/weui_cell/weui_access';*/
/*@import '../../../static/styles/weui/widget/weui_panel/weui_panel';*/
/*@import '../../../static/styles/weui/widget/weui_media_box/weui_media_box';*/
/*@import '../../../static/css/weui.min.css';*/

.weui-panel .weui-cell:first-child:before {
  display: block;
}
.weui-textarea, .weui-textarea-counter{
  background-color: #e9e9e9 !important;
}
.evaluate-left{
  color: #000;
}
  .panel__hd, .evaluate-hd{
    padding: 14px 15px 10px;
    position: relative;
  }
  .panel__hd:after, .evaluate-hd:after
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
  .evaluate-left{
    min-width: 35%;
    margin-right: 20px;
    text-align: right;
  }
</style>
