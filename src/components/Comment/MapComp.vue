<template>
    <div >
        <baidu-map :zoom="13">
            <bm-view class="map"></bm-view>
            <bm-local-search
                    :pageCapacity="1"
                    :panel="false"
                    :keyword="position"
                    :auto-viewport="true"
                    :selectFirstResult="true"
                    :forceLocal="true"
                    :location="location"
            ></bm-local-search>
        </baidu-map>

    </div>

</template>
<script>

  export default {
    props: {
      position: String
    },
    data () {
      return {
        location: '郑州'
//        keyword: '九龙城-龙腾西城'
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been rendered
      })
    },
    methods: {
//      infoWindowClose () {
//        this.show = false
//      },
//      infoWindowOpen () {
//        this.show = true
//      }
    }
  }
</script>
<style>
    .map {
        width: 100%;
        height: 200px;
    }
</style>
