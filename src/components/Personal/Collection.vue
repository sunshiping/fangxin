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
                    <panel-comp :list="list1"></panel-comp>
                </div>
            </list-pull-comp>
        </div>
        <div v-if="index==1">
            <list-pull-comp :viewHeight="viewHeight">
                <div slot="list">
                    <panel-comp :list="list2"></panel-comp>
                </div>
            </list-pull-comp>
        </div>




    </div>
</template>

<script>
  import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
  import PanelComp from '../Common/PanelComp.vue'
  import ListPullComp from '../Common/ListPullComp.vue'
  export default {
    name: 'hello',
    components: {
      PanelComp,
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      ListPullComp
    },
    data () {
      return {
        tabList: ['二手房', '租房'],
        defaultItem: '二手房',
        index: 0,
        viewHeight: '-44',
        list1: [
          {
            name: '龙腾西城  3室2厅 89.61㎡ 龙腾西城',
            price: '240',
            unitPrice: '15000',
            desc: ['南北通透', '高层(共30层)', '2014'],
            tags: ['学区房', '地铁房'],
            seeCount: 20,
            stars: 3.5,
            score: 4.8
          },
          {
            name: '龙腾西城  3室2厅 89.61㎡ 龙腾西城',
            price: '240',
            unitPrice: '15000',
            desc: ['南北通透', '高层(共20层)', '2015'],
            tags: ['学区房1', '地铁房1'],
            seeCount: 23,
            stars: 4.5,
            score: 4.9
          },
          {
            name: '龙腾西城  3室2厅 89.61㎡ 龙腾西城',
            price: '240',
            unitPrice: '15000',
            desc: ['南北通透', '高层(共30层)', '2014'],
            tags: ['学区房', '地铁房'],
            seeCount: 20,
            stars: 3.5,
            score: 4.8
          },
          {
            name: '龙腾西城  3室2厅 89.61㎡ 龙腾西城',
            price: '240',
            unitPrice: '15000',
            desc: ['南北通透', '高层(共20层)', '2015'],
            tags: ['学区房1', '地铁房1'],
            seeCount: 23,
            stars: 4.5,
            score: 4.9
          },
          {
            name: '龙腾西城  3室2厅 89.61㎡ 龙腾西城',
            price: '240',
            unitPrice: '15000',
            desc: ['南北通透', '高层(共30层)', '2014'],
            tags: ['学区房', '地铁房'],
            seeCount: 20,
            stars: 3.5,
            score: 4.8
          },
          {
            name: '龙腾西城  3室2厅 89.61㎡ 龙腾西城',
            price: '240',
            unitPrice: '15000',
            desc: ['南北通透', '高层(共20层)', '2015'],
            tags: ['学区房1', '地铁房1'],
            seeCount: 23,
            stars: 4.5,
            score: 4.9
          }
        ],
        list2: [
          {
            name: '龙腾西城  3室2厅 89.61㎡ 龙腾西城',
            price: '240',
            unitPrice: '15000',
            desc: ['南北通透', '高层(共30层)', '2014'],
            tags: ['学区房', '地铁房'],
            seeCount: 20,
            stars: 3.5,
            score: 4.8
          },
          {
            name: '龙腾西城  3室2厅 89.61㎡ 龙腾西城',
            price: '240',
            unitPrice: '15000',
            desc: ['南北通透', '高层(共20层)', '2015'],
            tags: ['学区房1', '地铁房1'],
            seeCount: 23,
            stars: 4.5,
            score: 4.9
          },
          {
            name: '龙腾西城  3室2厅 89.61㎡ 龙腾西城',
            price: '240',
            unitPrice: '15000',
            desc: ['南北通透', '高层(共30层)', '2014'],
            tags: ['学区房', '地铁房'],
            seeCount: 20,
            stars: 3.5,
            score: 4.8
          }

        ]
      }
    }
  }
</script>

<style scoped>
    .list-con{
        margin-top: 44px;
    }
</style>
