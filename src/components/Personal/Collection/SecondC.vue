<template>
    <div>

        <list-pull-comp>
            <div slot="list">
                <panel-comp :list="list"></panel-comp>
            </div>
        </list-pull-comp>

    </div>
</template>

<script>

  import PanelComp from '../../Common/PanelComp.vue'
  import ListPullComp from '../../Common/ListPullComp.vue'
  export default {
    name: 'hello',
    components: {
      PanelComp,
      ListPullComp
    },
    data () {
      return {
        list: [
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
    },
    methods: {
    }
  }
</script>

<style scoped>
</style>
