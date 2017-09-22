<template>
    <div class="rent-content">
        <x-header></x-header>
        <!--<div class="go-back"><i class="fa fa-arrow-left" aria-hidden="true"></i>返回</div>-->
        <p class="title">您求购房屋的用途？</p>
        <div>
            <group label-width="5em">
                <popup-picker class="require-icon" title="用途" :data="list1" v-model="value1" @on-show="onShow" @on-hide="onHide" @on-change="onChange" placeholder="请选择" ></popup-picker>
                <x-input title="备注" placeholder="请描述您的需求"></x-input>
            </group>
            <check-icon :value.sync="isGreen" class="check">我已阅读并且同意<a href="#">《房屋委托协议》</a>
            </check-icon>
            <!--<div class="footer"><span class="weui-btn" @click='link()'>下一步</span></div>-->
            <x-button class="footer" type="primary" :disabled="!isGreen" @click.native="link">下一步</x-button>
        </div>
    </div>
</template>
<script>
  import {PopupPicker, Group, XButton, XInput, XHeader, CheckIcon} from 'vux'
  export default {
    components: {
      PopupPicker,
      Group,
      XButton,
      XInput,
      XHeader,
      CheckIcon
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
        console.log(this.value1.length)
        if (this.value1.length !== 0) {
          this.$router.push({
            path: ''
          })
        } else {
          alert('请选择用途!')
        }
      }
    },
    data () {
      return {
        list1: [['自主', '商用', '投资', '度假', '其他']],
        value1: [],
        isGreen: false
      }
    }
  }

</script>
<style scoped="scoped">
    .check{
        margin: 20px 0 0 15px;
    }
</style>
