<template>
    <div>
        <group :title="'no placeholder, the current value is : ' + defaultValue">
            <selector title="省份"  placeholder="请选择省份" :options="list" v-model="defaultValue"></selector>
        </group>

        <group title='multi selector'>
            <selector placeholder="请选择省份" title="省份" :options="list" v-model="defaultValue"></selector>
            <selector  title="省份" :options="list"></selector>
        </group>

        

    </div>
</template>

<script>
  import { Selector, Group } from 'vux'
  export default {
    components: {
      Group,
      Selector
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
        value2: 'gd'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
