<template>
    <div class="map-test">
        <baidu-map class="map" :center="center" :zoom="zoom" @ready="handler" :scroll-wheel-zoom="true">
            <bml-marker-clusterer :averageCenter="true" :styles="styles" class="hh" :title="123">
                <bm-marker
                        v-for="marker in markers"
                        :key ='marker.lng'
                        :position="{lng: marker.lng, lat: marker.lat}"
                        :title="marker.name"
                        :content="marker.name"
                >

                </bm-marker>

                <bm-label
                        v-for="marker in markers"
                        :key ='marker.lng'
                        :content="marker.name"
                        :position="{lng: marker.lng, lat: marker.lat}"
                ></bm-label>
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
  import TextIconOverlay from '../../../static/js/TextIconOverlay'
//  import BmLabel from 'vue-baidu-map'

  export default {
    components: {
//      BmLabel,
      BmlMarkerClusterer,
      TextIconOverlay
    },
    data () {
      return {
//        center: {lng: 0, lat: 0},
        center: '',
        zoom: 3,
        markers: [
//          金水区
          {
            name: '金水区',
            lng: 113.665844,
            lat: 34.807567
          },
//          河南博物院
          {
            name: '河南博物院',
            lng: 113.685104,
            lat: 34.794762
          },
//          华水
          {
            name: '河南博物院',
            lng: 113.688841,
            lat: 34.820844
          },
//          河南体育中心
          {
            name: '河南体育中心',
            lng: 113.650609,
            lat: 34.841466
          },
//          河工大
          {
            name: '河工大',
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
            name: '惠济区',
            lng: 113.621,
            lat: 34.87393
          },
//          二七区
          {
            name: '二七区',
            lng: 113.639398,
            lat: 34.729758
          },
//          中牟县
          {
            name: '中牟县',
            lng: 113.982047,
            lat: 34.726435
          },
//          管城区
          {
            name: '管城区',
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
    ready () {
    },
    mounted () {

    },
    created () {
      console.log('------------------------')
      console.log(TextIconOverlay)
      console.log(BmlMarkerClusterer)
    },
    methods: {
      handler ({BMap, map}) {
        console.log(BMap, map)
//        this.center.lng = 116.404
//        this.center.lat = 39.915
        this.center = '郑州'
        this.zoom = 12
      },
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
