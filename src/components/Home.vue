<template>
    <div class="home">
        <div class="header">
            <div class="search-header clearfix">
                <choice-city-comp class="fl city"></choice-city-comp>
                <div class="fr search-input">
                    <input type="search" value="" placeholder="请输入区域、小区关键字" @focus="onFocus" @blur="onBlur"/>
                    <i class="weui-icon-search"></i>
                </div>
            </div>
        </div>

        <div class="main">
            <grid :rows="3" :cols="2" class="grid-pd">
                <grid-item :label="item.label" v-for="item in gridList" :key="item.id" :link="item.link">
                    <img slot="icon" :src="item.src">
                </grid-item>
            </grid>

            <div class="recommend">
                <span class="recommend-title">推荐房源</span>
            </div>
            <panel-comp :list="list"></panel-comp>
            <divider>我是有底线的</divider>
        </div>






    </div>
</template>

<script>
  import { Search, Grid, GridItem, Divider } from 'vux'
  import PanelComp from './Common/PanelComp.vue'
  import ChoiceCityComp from './Common/ChoiceCityComp.vue'

  export default {
    components: {
      Search,
      Grid,
      GridItem,
      PanelComp,
      Divider,
      ChoiceCityComp
    },
    data () {
      return {
        isFocus: false,
        gridList: [
          {
            id: '100001',
            src: '../../static/images/logo.png',
            label: '二手房',
            link: '/secondhandList'
          },
          {
            id: '100001',
            src: '../../static/images/logo.png',
            label: '租房',
            link: '/rentalList'
          },
          {
            id: '100001',
            src: '../../static/images/logo.png',
            label: '地图找房',
            link: '/map'
          },
          {
            id: '100001',
            src: '../../static/images/logo.png',
            label: '登记房源',
            link: '/registerhouse'
          },
          {
            id: '100001',
            src: '../../static/images/logo.png',
            label: '委托找房',
            link: '/findhouse'
          },
          {
            id: '100001',
            src: '../../static/images/logo.png',
            label: '个人中心',
            link: '/mine'
          }
        ],
        list: [
          {
            id: '90001',
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
            id: '90002',
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
            id: '90003',
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
            id: '90004',
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
            id: '90005',
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
            id: '90006',
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
      onFocus () {
        this.isFocus = true
        console.log('-------------onfocus')
        this.$router.push({
          path: '/search'
        })
      },
      onBlur () {
        this.isFocus = false
        console.log('-------------onBlur')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .home{
        background-color: #fff;
        .header{
            position: fixed;
            width: 100%;
            background: #fff;
            z-index: 1;
            padding-bottom: 5px;
        }

        .main{
            padding-top: 40px;
            position: relative;
        }
    }

    .weui-grids{
        margin: 10px 0;
    }
    .weui-grid{
        padding: 10px !important;
    }
    .search-header{
        padding: 10px 10px 0 10px;
    }
    .search-input{
        width: 73%;
        position: relative;
        input{
            border: none;
            border-bottom: 1px solid #d9d9d9;
            padding: 5px;
            width: 100%;
            font-size: 14px;
            background: none;
        }
    }
    .weui-icon-search{
        position: absolute;
        right: 0px;
        top: 5px;
    }
    .grid-pd{
        padding: 15px;
    }
    .recommend{
        position: relative;
        margin-left: 10px;
    }
    .recommend-title{
        padding-left: 8px;
        font-size: 14px;
        display: inline;
    }
    .recommend-title:before{
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        width: 6px;
        bottom: 0;
        border-left: 6px solid #999;
        color: #000000;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleX(0.5);
        transform: scaleX(0.5);
    }

</style>
