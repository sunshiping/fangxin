<template>
    <div class="rent-content">
        <x-header></x-header>
        <p class="title">您期望的面积及价位？</p>
        <div>
            <group label-width="5em">
                <x-input class="require-icon" type="number" title="面积" placeholder="平米" ref="input01" required>
                </x-input>
                <div class="vux-x-input weui-cell require-icon">
                    <div class="weui-cell__hd">
                        <label class="weui-label" style="width: 5em;">价位区间</label>
                    </div>
                    <div class="weui-cell__bd weui-cell__primary">
                        <input class="weui-input" type="number" placeholder="最低" v-model="val1"/>
                    </div>
                    <span>―</span>
                    <div class="weui-cell__bd weui-cell__primary">
                        <input class="weui-input" type="number" placeholder="最高" v-model="val2"/>
                    </div>
                </div>
                <popup-picker class="require-icon" title="付款方式" :data="list1" v-model="value1"
                              ref="list" @on-show="onShow" @on-hide="onHide" @on-change="onChange"
                              placeholder="请选择"></popup-picker>
            </group>
            <x-button class="footer" type="primary" :disabled="disable01" @click.native="link">下一步</x-button>

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
    props: {},
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
        console.log(type)
      },
      link () {
        if (this.$refs.input01.valid === true && this.val1 !== '' && this.val2 !== '' && this.value1.length !== 0) {
          this.$router.push({
            path: '/saleother'
          })
        } else {
          alert('请把信息填写完整！')
        }
      }
    },
    data () {
      return {
        list1: [['一次性', '按揭贷款', '公积金']],
        value1: [],
        val1: '',
        val2: '',
        disable01: true
      }
    }
  }

</script>
