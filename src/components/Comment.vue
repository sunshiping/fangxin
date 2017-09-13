<template>
    <div>
        <!--<div class="vux-demo">-->
            <!--<img class="logo" src="../assets/vux_logo.png">-->
            <!--<h1></h1>-->
        <!--</div>-->
        <!--<group title="cell demo">-->
            <!--<cell title="VUX" value="cool" is-link></cell>-->
        <!--</group>-->
        <panel :header="header" :list="list">
        </panel>
    </div>
</template>

<script>
//  import { Panel } from 'vux'
  import Panel from './fxcomponents/zj-comment.vue'

  export default {
    components: {
      Panel
    },
    data () {
      return {
        header: [{
          type: '类型：带看',
          data: '预约时间：2017年9月13日 13:20'
        }],
        list: [{
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          name: '梨园别墅',
          mess: '3室一厅·5/18层',
          price: '3000元/月',
          address: '心怡路与祥盛街交叉口东100米',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。'
//          url: '/component/cell'
        }]
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
