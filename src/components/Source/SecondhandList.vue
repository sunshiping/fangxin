<template>
    <div>
        <source-list-comp :list="list">
            <div slot="house-type" class="house-type">推荐优质二手房</div>
        </source-list-comp>
    </div>
</template>

<script>
  import SourceListComp from './SourceList.vue'

  export default {
    name: 'hello',
    components: {
      SourceListComp
    },
    data () {
      return {
        list: [
          {
            id: '10',
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
            id: '11',
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
            id: '12',
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
            id: '13',
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
            id: '14',
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
            id: '15',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .house-type{
        padding: 15px 0 0 10px;
        color: #9d9d9d;
        font-size: 12px;
    }
</style>
