<template>
    <div class="rent-content">
        <x-header></x-header>
        <!--<div class="go-back"><i class="fa fa-arrow-left" aria-hidden="true"></i>返回</div>-->
        <p class="title">您对房屋的其他期望？</p>
        <div>
            <group label-width="5em">
                <popup-picker title="配套设施" :data="list1" v-model="value1" @on-show="onShow" @on-hide="onHide" @on-change="onChange" placeholder="请选择" ></popup-picker>
                <!--<x-input class="require-icon" title="入住时间" placeholder="最晚入住时间" ref="input" required></x-input>-->
                <div class="data">
                <calendar class="require-icon" v-model="demo1" title="入住时间" disable-past ></calendar>
                </div>
                <x-input title="备注" placeholder="请描述您的需求"></x-input>
            </group>
            <!--<div class="footer"><span class="weui-btn" @click='link()'>下一步</span></div>-->
            <x-button class="footer" type="primary" :disabled="disable01" @click.native="link">下一步</x-button>
        </div>
    </div>
</template>
<script>
  import {PopupPicker, Group, XButton, XInput, XHeader, Calendar} from 'vux'
  export default {
    components: {
      PopupPicker,
      Group,
      XButton,
      XInput,
      XHeader,
      Calendar
    },
    props: {
    },
    methods: {
      onChange (val) {
        console.log('val change', val)
        if (val.length !== '') {
          this.disable01 = false
        }
      },
      onShow () {
        console.log('on show')
      },
      onHide (type) {
        console.log('on hide', type)
      },
      link () {
        console.log(this.demo1.length)
        if (this.demo1.length !== 0) {
          this.$router.push({
            path: '/rentpersonal'
          })
        } else {
          alert('请选择入住时间！')
        }
      }
    },
    data () {
      return {
        list1: [['床', '衣柜', '书桌', '空调', '冰箱', '电视', '洗衣机', '宽带', '热水器']],
        value1: [],
        demo1: '',
        disable01: true
      }
    }
  }

</script>
