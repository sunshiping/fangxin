<template>
    <div class="map-test">
        <baidu-map class="map" center="郑州" zoom=12 :scroll-wheel-zoom="true">
            <bml-marker-clusterer :averageCenter="true" :styles="styles" class="hh" :title="123">
                <bm-marker
                        v-for="marker in markers"
                        :key ='marker.lng'
                        :position="{lng: marker.lng, lat: marker.lat}"
                        :title="marker.name"
                        :content="marker.name"
                >

                </bm-marker>
                <div>123</div>
            </bml-marker-clusterer>

            <!--<bm-boundary name="北京市海淀区" :strokeWeight="2" strokeColor="blue"></bm-boundary>-->
        </baidu-map>
    <!--{{ markers }}-->

        <!--<baidu-map class="map" :center="{lng: 116.403765, lat: 39.914850}" :zoom="11">-->
            <!--<bm-boundary-->
                    <!--name="北京市海淀区"-->
                    <!--:strokeWeight="2"-->
                    <!--strokeColor="blue"-->
                    <!--@mouseover="over"-->
                    <!--@remove="leave"-->
            <!--&gt;</bm-boundary>-->
        <!--</baidu-map>-->

    </div>
</template>

<script>
  import { BmlMarkerClusterer } from 'vue-baidu-map'

  export default {
    components: {
      BmlMarkerClusterer
    },
    data () {
      // 插入 10 个随机点
//      const markers = []
//      for (let i = 0; i < 10; i++) {
//        const position = {lng: Math.random() * 10 + 85, lat: Math.random() * 10 + 21}
//        markers.push(position)
//      }
      return {
        markers: [
//          金水区
          {
            name: '金水区',
            lng: 113.665844,
            lat: 34.807567
          },
//          河南博物院
          {
            lng: 113.685104,
            lat: 34.794762
          },
//          华水
          {
            lng: 113.688841,
            lat: 34.820844
          },
//          河南体育中心
          {
            lng: 113.650609,
            lat: 34.841466
          },
//          河工大
          {
            lng: 113.679211,
            lat: 34.814324
          },
//          郑大
          {
            name: '郑大',
            lng: 113.673605,
            lat: 34.788121
          },
//          惠济区
          {
            lng: 113.621,
            lat: 34.87393
          },
//          二七区
          {
            lng: 113.639398,
            lat: 34.729758
          },
//          中牟县
          {
            lng: 113.982047,
            lat: 34.726435
          },
//          管城区
          {
            lng: 113.680217,
            lat: 34.760368
          }
        ],
        styles: [
          {
            textColor: 'red',
            url: '../../static/images/red.png',
            size: {
              width: 40,
              height: 40
            }
          }
        ],
        isOver: false
      }
    },
    methods: {
      over () {
        console.log('--------------over')
        this.isOver = true
      },
      leave () {
        console.log('---------------leave')
        this.isOver = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .map-test{
        height: 100%;
    }
    .map{
        height: 100%;
    }
</style>
