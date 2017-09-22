<template>
    <div>
        <list-pull-comp>
            <div slot="list">
                <panel-checkbox-comp :list="list"></panel-checkbox-comp>
            </div>
        </list-pull-comp>

    </div>
</template>

<script>
  import PanelCheckboxComp from '../PanelCheckboxComp.vue'
  import ListPullComp from '../../../../Common/ListPullComp.vue'

  export default {
    components: {
      PanelCheckboxComp,
      ListPullComp
    },
    data () {
      return {
        list: [{
          id: 10001,
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '经纪人32',
          name: '门店：21世纪房产-心怡路店',
          desc: '成交140套 | 独家委托11套 | 带看6次',
          star: 4.5,
          score: 4.5,
          url: '/component/cell'
        }, {
          id: 10002,
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '经纪人42',
          name: '门店：21世纪房产-黄河南路店',
          desc: '成交100套 | 独家委托12套 | 带看5次',
          star: 4.9,
          score: 4.9,
          url: '/component/cell'
        }]
      }
    }
  }
</script>

<style scoped>
</style>
