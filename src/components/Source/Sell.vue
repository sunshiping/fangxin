<template>
    <div>
        <group title="您房源的具体位置?" label-width="5em">
            <popup-picker
                    :title="title1"
                    :data="list1"
                    v-model="value1"
                    @on-show="onShow"
                    @on-hide="onHide"
                    @on-change="onChange"
                    placeholder="请选择"
            >
            </popup-picker>
        </group>
        <group title="您房源的具体位置?" label-width="5em">
            <popup-picker
                    :title="title1"
                    :data="list1"
                    v-model="value1"
                    @on-show="onShow"
                    @on-hide="onHide"
                    @on-change="onChange"
                    placeholder="请选择"
            >
            </popup-picker>
        </group>

        

    </div>
</template>

<script>
  import { Selector, Group, PopupRadio, PopupPicker } from 'vux'
  export default {
    components: {
      Group,
      Selector,
      PopupRadio,
      PopupPicker
    },
    data () {
      return {
        defaultValue: '',
        plainList: ['广东', '广西'],
        list: [
          {
            key: 'gd',
            value: '广东'
          },
          {
            key: 'gx',
            value: '广西'
          },
          {
            key: 'gd',
            value: '广东'
          },
          {
            key: 'gx',
            value: '广西'
          },
          {
            key: 'gd',
            value: '广东'
          },
          {
            key: 'gx',
            value: '广西'
          },
          {
            key: 'gd',
            value: '广东'
          },
          {
            key: 'gx',
            value: '广西'
          },
          {
            key: 'gd',
            value: '广东'
          },
          {
            key: 'gx',
            value: '广西'
          }, {
            key: 'gd',
            value: '广东'
          },
          {
            key: 'gx',
            value: '广西'
          }
        ],
        value2: 'gd',
        title1: '楼栋号',
        list1: [['1', '2', '3', '4', '5', '6', '7']],
        value1: ['1']
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
