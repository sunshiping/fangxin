<template>
    <div>
       <filter-tab-comp></filter-tab-comp>
       <list-pull-comp>
           <div slot="list">
               <panel-comp :houseList="houseList"></panel-comp>
           </div>
       </list-pull-comp>
    </div>
</template>




<script>
    import PanelComp from '../Common/PanelComp.vue'
    import ListPullComp from '../Common/ListPullComp.vue'
    import FilterTabComp from './FilterTabComp.vue'

    export default {
      components: {
        PanelComp,
        ListPullComp,
        FilterTabComp
      },
      data () {
        return {
          houseList: [
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
          ]
        }
      }
    }

</script>
