<template>
    <div class="rent-content">
        <x-header></x-header>
        <!--<div class="go-back"><i class="fa fa-arrow-left" aria-hidden="true"></i>返回</div>-->
        <p class="title">您期望的面积及价位？</p>
        <div>
            <group label-width="5em">
                <x-input class="require-icon" title="面积" placeholder="平米" required ></x-input>
                <div class="vux-x-input weui-cell require-icon">
                    <div class="weui-cell__hd">
                        <label class="weui-label" style="width: 5em;">价位区间</label>
                    </div>
                    <div class="weui-cell__bd weui-cell__primary">
                        <input class="weui-input" type="number" placeholder="最低">
                    </div><span>―</span>
                    <div class="weui-cell__bd weui-cell__primary">
                        <input class="weui-input" type="number" placeholder="最高"/>
                    </div>
                </div>
                <popup-picker class="require-icon" title="付租类型" :data="list1" v-model="value1" @on-show="onShow" @on-hide="onHide" @on-change="onChange" placeholder="请选择" ></popup-picker>
            </group>
            <div class="footer"><span class="weui-btn" @click='link()'>下一步</span></div>
        </div>
    </div>
</template>
<script>
  import {PopupPicker, Group, XButton, XInput, XHeader} from 'vux'
  export default {
    components: {
      PopupPicker,
      Group,
      XButton,
      XInput,
      XHeader
    },
    props: {
    },
    methods: {
      onChange (val) {
        console.log('val change', val)
      },
      onShow () {
        console.log('on show')
      },
      onHide (type) {
        console.log('on hide', type)
      },
      link () {
        this.$router.push({
          path: '/rentother'
        })
      }
    },
    data () {
      return {
        list1: [['不限', '押一付三', '月租', '半年付', '年付']],
        value1: []
      }
    }
  }

</script>
