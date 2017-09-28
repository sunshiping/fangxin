<template>
    <div  class="header">
        <flexbox>
            <flexbox-item :span="3/9">
                <div class="logo-area">
                    <img src="../../../static/images/fx-logo.png" class="fx-logo"/>
                </div>
            </flexbox-item>
            <flexbox-item :span="2/9" class="city">
                <div>
                    <choice-city-comp></choice-city-comp>
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="fa-icon">
                    <i class="fa fa-search" @click="search"></i>
                    <i class="fa fa-list-ul"></i>
                </div>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'
  import ChoiceCityComp from './ChoiceCityComp.vue'

  export default {
    components: {
      Flexbox,
      FlexboxItem,
      ChoiceCityComp
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      search () {
        this.$router.push({
          path: '/search'
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .header{
        position: fixed;
        z-index: 2;
        left: 5px;
        right: 5px;
        padding: 10px 5px;
    }
    .fx-logo{
        width: 100%;
    }
    .fa-icon{
        text-align: right;
    }
    .fa-search{
        padding-right: 10px;
        font-size: 18px;
        color: #999;
    }
    .fa-list-ul{
        font-size: 20px;
        color: #999;
    }

</style>
