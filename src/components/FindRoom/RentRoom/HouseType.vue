<template>
    <div class="rent-content">
        <x-header></x-header>
        <!--<div class="go-back"><i class="fa fa-arrow-left" aria-hidden="true"></i>返回</div>-->
        <p class="title">您期望的户型？</p>
        <div>
            <group label-width="5em">
            <popup-picker :title="title1" :data="list1" v-model="value1" @on-show="onShow" @on-hide="onHide" @on-change="onChange" placeholder="请选择数字" ></popup-picker>
            <popup-picker :title="title2" :data="list2" v-model="value2" @on-show="onShow" @on-hide="onHide" @on-change="onChange" placeholder="请选择数字" ></popup-picker>
            </group>
            <x-button class="footer" type="primary" :disabled="disable01" @click.native="link">下一步</x-button>
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
        console.log('this.value1.length', this.value1.length)
        console.log('this.value2.length', this.value2.length)
        if (this.value1.length !== 0 && this.value2.length !== 0) {
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
        this.$router.push({
          path: '/rentareaprice'
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
        value2: [],
        disable01: true
      }
    }
  }

</script>
