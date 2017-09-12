<template>
    <div>
        <scroller lock-x height="300px" :scrollbarY=true ref="scroller">
            <div>
                <!--<ul class="select-col">-->
                    <!--<li-->
                            <!--v-for="(item, index) in list"-->
                            <!--:class="{'active':ind === index}"-->
                            <!--:key = "item.id"-->
                            <!--@click="select(item.name, index)"-->
                    <!--&gt;{{ item.name }}</li>-->
                <!--</ul>-->
                <p v-for="i in 100">{{ i }}</p>
                <slot name="inputSearch"></slot>
            </div>
        </scroller>
    </div>
</template>

<script>
  import { Scroller } from 'vux'
  export default {
    props: {
      list: Array,
      ind: {
        type: Number,
        default: 0
      }
//      select: {
//        type: Function,
//        default: function () {
//          console.log('-------------------->fxSelect')
//        }
//      }
    },
    components: {
      Scroller
    },
    data () {
      return {
      }
    },
    mounted () {
      console.log('nnnnnnnnnnnnnn')
      console.log(this.ind)
      this.$nextTick(() => {
        console.log('99999999999999999')
        this.$nextTick(() => {
          this.$refs.scroller.reset({
            top: 0
          })
        })
      })
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .active{
        color: #0099CC;
    }
    ul.select-col li{
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
        position: relative;
        font-size: 14px;
    }
    ul.select-col li:after{
        content: " ";
        position: absolute;
        left: -5px;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #d9d9d9;
        color: #d9d9d9;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
    }
    .flex-bor-rg{
        border-right: 1px solid #d9d9d9;
        margin-left: 0px !important;
    }
</style>
