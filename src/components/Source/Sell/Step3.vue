<template>
    <div class="rent-content">
        <x-header></x-header>
        <!--<div class="go-back"><i class="fa fa-arrow-left" aria-hidden="true"></i>返回</div>-->
        <p class="title">您房屋的户型？</p>
        <div>
            <group label-width="5em">
                <popup-picker :title="title1" :data="list1" v-model="value1" @on-show="onShow" @on-hide="onHide" @on-change="onChange" placeholder="请选择数字" ></popup-picker>
                <popup-picker :title="title2" :data="list2" v-model="value2" @on-show="onShow" @on-hide="onHide" @on-change="onChange" placeholder="请选择数字" ></popup-picker>
            </group>
            <div class="footer"><span class="weui-btn" @click='link()'>下一步</span></div>
        </div>
    </div>
</template>
<script>
  import {PopupPicker, Group, XButton, XHeader} from 'vux'
  export default {
    components: {
      PopupPicker,
      Group,
      XButton,
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
          path: 'step4'
        })
      }
    },
    data () {
      return {
        title1: '室',
        title2: '厅',
        list1: [['1', '2', '3', '4', '5', '6', '7']],
        list2: [['1', '2', '3', '4', '5', '6', '7']],
        value1: [],
        value2: []
      }
    }
  }

</script>
