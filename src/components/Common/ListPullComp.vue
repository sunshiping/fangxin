<template>
    <div>
        <scroller
            lock-x
            scrollbar-y
            use-pullup
            use-pulldown
            :height="viewHeight"
            @on-pullup-loading="loadMore"
            @on-pulldown-loading="refresh"
            v-model="status"
            ref="scroller"
            :pulldownConfig="pulldownConfig"
            :pullupConfig="pullupConfig"
        >
            <div class="list-main">
                <slot name="list"></slot>
                <!--<p v-for="j in n">placeholder {{j}}</p>-->
            </div>
            <!--pullup slot-->
            <div slot="pullup" class="xs-plugin-pullup-container xs-plugin-pullup-up" style="position: absolute; width: 100%; height: 40px; bottom: -40px; text-align: center;">
                <span v-show="status.pullupStatus === 'default'"></span>
                <span class="pullup-arrow" v-show="status.pullupStatus === 'down' || status.pullupStatus === 'up'" :class="{'rotate': status.pullupStatus === 'up'}">↑</span>
                <span v-show="status.pullupStatus === 'loading'"><spinner type="ios-small"></spinner></span>
            </div>
        </scroller>

    </div>
</template>




<script>
  import { Scroller, Spinner } from 'vux'
  export default {
    components: {
      Scroller,
      Spinner
    },
    props: {
      viewHeight: String
    },
    data () {
      return {
        n: 10,
        status: {
          pullupStatus: 'default',
          pulldownStatus: 'default'
        },
        pulldownConfig: {
          content: '下拉刷新',
          height: 60,
          autoRefresh: false,
          downContent: '下拉刷新',
          upContent: '松开刷新',
          loadingContent: '加载...',
          clsPrefix: 'xs-plugin-pulldown-'
        },
        pullupConfig: {
          content: '上拉加载',
          pullUpHeight: 60,
          height: 40,
          autoRefresh: false,
          downContent: '松开刷新',
          upContent: '上拉加载',
          loadingContent: '加载...',
          clsPrefix: 'xs-plugin-pullup-'
        }
      }
    },
    methods: {
      loadMore () {
        setTimeout(() => {
          this.n += 10
          this.$nextTick(() => {
            this.$refs.scroller.donePullup()
            if (this.n >= 30) {
              this.$refs.scroller.disablePullup()
              console.log('No more data, Pullup disabled!')
            }
          })
        }, 2000)
      },
      refresh () {
        setTimeout(() => {
          this.n = 10
          this.$nextTick(() => {
            setTimeout(() => {
              this.$refs.scroller.donePulldown()
              this.pullupEnabled && this.$refs.scroller.enablePullup()
            }, 10)
          })
        }, 2000)
      }
    }
  }

</script>
