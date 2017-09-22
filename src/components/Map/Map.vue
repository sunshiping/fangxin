<template>
    <div class="map-test">
        <baidu-map class="map" center="中国" :scroll-wheel-zoom="true">
            <bml-marker-clusterer :averageCenter="true" :styles="styles">
                <bm-marker
                        v-for="marker in markers"
                        :key ='marker.lng'
                        :position="{lng: marker.lng, lat: marker.lat}"
                >
                </bm-marker>
            </bml-marker-clusterer>

            <!--<bm-boundary name="北京市海淀区" :strokeWeight="2" strokeColor="blue"></bm-boundary>-->
        </baidu-map>
    {{ markers }}

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
      const markers = []
      for (let i = 0; i < 10; i++) {
        const position = {lng: Math.random() * 10 + 85, lat: Math.random() * 10 + 21}
        markers.push(position)
      }
      return {
        markers,
        styles: [
          {
            textColor: 'red',
            url: '../../static/images/red.png',
            size: {
              width: 92,
              height: 92
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
