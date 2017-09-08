<template>
    <div>
       <list-view>
           <div slot="list">
               <fx-panel :houseList="houseList"></fx-panel>
           </div>
       </list-view>
    </div>
</template>




<script>
    import FxPanel from './common/fx-panel.vue'
    import ListView from './common/ListView.vue'

    export default {
      components: {
        FxPanel,
        ListView
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
