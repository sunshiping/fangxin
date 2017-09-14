<template>
    <div>
        <tab :line-width=2  v-model="index">
            <tab-item
                    :selected="defaultItem === item"
                    v-for="(item, index) in tabList"
                    :class="{'vux-1px-r': index===0}"
                    @click="defaultItem = item"
                    :key="index"
            >
                {{item}}
            </tab-item>
        </tab>

        <div v-if="index==0">
            <list-pull-comp :viewHeight="viewHeight">
                <div slot="list">
                    <panel-checkbox-comp :list="list"></panel-checkbox-comp>
                </div>
            </list-pull-comp>
        </div>
        <div v-if="index==1">
            <list-pull-comp :viewHeight="viewHeight">
                <div slot="list">
                    <panel-checkbox-comp :list="list2"></panel-checkbox-comp>
                </div>
            </list-pull-comp>
        </div>
        <div v-if="index==2">
            <list-pull-comp :viewHeight="viewHeight">
                <div slot="list">
                    <panel-checkbox-comp :list="list3"></panel-checkbox-comp>
                </div>
            </list-pull-comp>
        </div>


    </div>
</template>

<script>
  import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
  import PanelCheckboxComp from './PanelCheckboxComp.vue'
  import ListPullComp from '../Common/ListPullComp.vue'
  export default {
    name: 'hello',
    components: {
      PanelCheckboxComp,
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      ListPullComp
    },
    data () {
      return {
        tabList: ['综合排序', '带看次数', '评级优先'],
        defaultItem: '综合排序',
        index: 0,
        viewHeight: '-44',
        list: [{
          id: 1001,
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '经纪人1',
          name: '门店：21世纪房产-心怡路店',
          desc: '成交140套 | 独家委托11套 | 带看6次',
          star: 4.5,
          score: 4.5,
          url: '/component/cell'
        }, {
          id: 1002,
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '经纪人2',
          name: '门店：21世纪房产-黄河南路店',
          desc: '成交100套 | 独家委托12套 | 带看5次',
          star: 4.9,
          score: 4.9,
          url: '/component/cell'
        }],
        list2: [{
          id: 10001,
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '经纪人3',
          name: '门店：21世纪房产-心怡路店',
          desc: '成交140套 | 独家委托11套 | 带看6次',
          star: 4.5,
          score: 4.5,
          url: '/component/cell'
        }, {
          id: 10002,
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '经纪人4',
          name: '门店：21世纪房产-黄河南路店',
          desc: '成交100套 | 独家委托12套 | 带看5次',
          star: 4.9,
          score: 4.9,
          url: '/component/cell'
        }],
        list3: [{
          id: 100001,
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '经纪人5',
          name: '门店：21世纪房产-心怡路店',
          desc: '成交140套 | 独家委托11套 | 带看6次',
          star: 4.5,
          score: 4.5,
          url: '/component/cell'
        }, {
          id: 100002,
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '经纪人6',
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
