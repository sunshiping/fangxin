<template>
    <div>
        <!--<div class="vux-demo">-->
            <!--<img class="logo" src="../assets/vux_logo.png">-->
            <!--<h1></h1>-->
        <!--</div>-->
        <!--<group title="cell demo">-->
            <!--<cell title="VUX" value="cool" is-link></cell>-->
        <!--</group>-->
        <panel header="类型：带看" :text="text" :footer="footer" :list="list" :type="type">
        </panel>
    </div>
</template>

<script>
  import { Panel } from 'vux'

  export default {
    components: {
      Panel
    },
    data () {
      return {
        type: '1',
        text: '预约时间：2016年6月15日 15:30',
        list: [{
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题一',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: '/component/cell'
        }, {
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题二',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: {
            path: '/component/radio',
            replace: false
          },
          meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
          }
        }],
        footer: {
          title: '查看更多',
          url: 'http://vux.li'
        }
      }
    }
  }
</script>

<style>
    .vux-demo {
        text-align: center;
    }
    .logo {
        width: 100px;
        height: 100px
    }
</style>
