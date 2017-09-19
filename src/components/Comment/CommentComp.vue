<template>
  <div class="comment-content">
    <!---->
    <div class="weui-panel">
      <!--header-->
      <div class="panel__hd" v-for="item in header">
        <div class="panel_type">类型：{{item.type}}</div>
        <div class="panel_data">预约时间：{{item.data}}</div>
      </div>
      <!--house message-->
      <div v-for="item in list">
        <div class="weui-media-box_appmsg weui-media-box">
        <div class="weui-media-box__hd img-box" v-if="item.src">
          <img class="weui-media-box__thumb" :src="item.src" alt="">
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title">{{item.name}}</h4>
          <div class="weui-media-box_appmsg">
            <div class="vux-cell-primary weui-media-box__desc">
              {{item.mess}}
            </div>
            <div class="house-price">{{item.price}}元/月</div>
          </div>
          <p class="weui-media-box__desc">{{item.address}}</p>
          <div class="weui-media-box_appmsg">
            <div class="vux-cell-primary">
              <rater v-model="data1" slot="value" :max="5" :font-size="22" disabled></rater>
            </div>
            <div class="star-right">{{'未评价'}}</div>
          </div>
        </div>
        </div>
      </div>
      <!--综合评论-->
      <div class="house-comm">
        <div class="evaluate-hd weui-media-box_appmsg">
          <div class="evaluate-left">房源综合评级</div>
          <rater v-model="data1" slot="value" :max="5" :margin="4" :font-size="30" disabled></rater>
        </div>
        <div class="weui-form-preview__bd">
          <div class="weui-media-box_appmsg">
            <div class="evaluate-left">装修</div>
            <rater v-model="data2" slot="value" star="☻" active-color="#FF9900" :margin="4" :font-size="30"></rater>
          </div>
          <div class="weui-media-box_appmsg">
            <div class="evaluate-left">户型</div>
            <rater v-model="data3" slot="value" star="☻" active-color="#FF9900" :margin="4" :font-size="30"></rater>
          </div>
          <div class="weui-media-box_appmsg">
            <div class="evaluate-left">采光</div>
            <rater v-model="data4" slot="value" star="☻" active-color="#FF9900" :margin="4" :font-size="30"></rater>
          </div>
          <div class="weui-media-box_appmsg">
            <div class="evaluate-left">视野</div>
            <rater v-model="data5" slot="value" star="☻" active-color="#FF9900" :margin="4" :font-size="30"></rater>
          </div>
          <div class="weui-media-box_appmsg">
            <div class="evaluate-left">内部设施</div>
            <rater v-model="data6" slot="value" star="☻" active-color="#FF9900" :margin="4" :font-size="30"></rater>
          </div>
        </div>
      </div>
      <!--textarea-->
      <div class="vux-x-textarea">
        <div class="weui-cell__bd">
          <x-textarea :max="300"  placeholder="输入您的评论吧"></x-textarea>
        </div>
      </div>
    </div>
    <!--业主综合评级-->
    <div class="weui-panel">
      <!--综合评级-->
      <div>
        <div class="evaluate-hd weui-media-box_appmsg">
          <div class="evaluate-left">业主综合评级</div>
          <rater v-model="data1" slot="value" :max="5" :margin="4" :font-size="30"></rater>
        </div>
        <div class="weui-media-box_appmsg weui-form-preview__bd">
          <div class="evaluate-left">配合程度</div>
          <rater v-model="data2" slot="value" star="☻" active-color="#FF9900" :margin="4" :font-size="30"></rater>
        </div>
      </div>
      <!--textarea-->
      <div class="vux-x-textarea">
        <div class="weui-cell__bd">
          <x-textarea :max="300"  placeholder="输入您的评论吧" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></x-textarea>
        </div>
      </div>
      <div class="btn-padding">
      <x-button type="primary">确定</x-button>
      </div>
      <!--house message-->
      <div v-for="item in list">
        <div class="weui-media-box_appmsg weui-media-box">
          <div class="weui-media-box__hd img-box" v-if="item.src">
            <img class="weui-media-box__thumb" :src="item.src" alt="">
          </div>
          <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title">{{item.name}}</h4>
            <div class="weui-media-box_appmsg">
              <div class="vux-cell-primary weui-media-box__desc">
                {{item.mess}}
              </div>
              <div class="house-price">{{item.price}}元/月</div>
            </div>
            <p class="weui-media-box__desc">{{item.address}}</p>
            <div class="weui-media-box_appmsg">
              <div class="vux-cell-primary">
                <rater v-model="data1" slot="value" :max="5" :font-size="22" disabled></rater>
              </div>
              <div class="star-right active">{{'已评价'}}</div>
            </div>
          </div>
        </div>
          <p class="vux-divider">本次看房{{ item.count }}次</p>
      </div>
      <!--经纪人信息-->
      <div v-for="item in broker">
        <div class="weui-media-box_appmsg weui-media-box">
          <div class="weui-media-box__hd" v-if="item.src">
            <img class="weui-media-box__thumb img-border" :src="item.src" alt="">
          </div>
          <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title">{{item.name}}</h4>
            <p class="weui-media-box__desc">从业时间：{{item.workyear}}年</p>
          </div>
        </div>
      </div>
      <div>
        <div class="evaluate-hd weui-media-box_appmsg">
          <div class="evaluate-left">{{ '经纪人综合评级' }}</div>
          <rater v-model="data1" slot="value" :max="5" :margin="4" :font-size="30"></rater>
        </div>
        <div class="weui-form-preview__bd">
          <div class="weui-media-box_appmsg">
            <div class="evaluate-left">{{ '专业知识点评' }}</div>
            <rater v-model="data2" slot="value" star="☻" active-color="#FF9900" :margin="4" :font-size="30"></rater>
          </div>
          <div class="weui-media-box_appmsg">
            <div class="evaluate-left">{{ '服务点评' }}</div>
            <rater v-model="data4" slot="value" star="☻" active-color="#FF9900" :margin="4" :font-size="30"></rater>
          </div>
        </div>
      </div>
      <div class="vux-x-textarea">
        <div class="weui-cell__bd text-padding">
          <x-textarea :max="300"  placeholder="输入您的评论吧" ></x-textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { go, getUrl } from '../libs/router'
import {Rater, XTextarea, XButton} from 'vux'

export default {
  components: {
    Rater,
    XTextarea,
    XButton
  },
  name: 'panel',
  props: {
    header: Array,
    list: Array,
    broker: Array
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
  },
  methods: {
    onEvent (event) {
      console.log('on', event)
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

</style>
