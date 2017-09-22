<template>
    <div>
        <div class="clearfix tab">
            <router-link to="/collection/second" active-class="active" tag="div" class="fl tab1"><span>二手房</span></router-link>
            <router-link to="/collection/rental" active-class="active" tag="div" class="fl tab2"><span>租房</span></router-link>
        </div>

        <router-view></router-view>

    </div>
</template>

<script>

  export default {
    data () {
      return {
      }
    }
  }
</script>

<style scoped lang="less">
    .tab{
        border-bottom: 1px solid #D9D9D9;
        height: 40px;
        line-height: 40px;
        font-size: 14px;

        .tab1{
            width: 50%;
            text-align: center;

        }
        .tab2{
            width: 50%;
            text-align: center;
        }
        .active span{
            border-bottom: 2px solid rgb(4, 190, 2);
            padding-bottom: 11px;
        }
        .active.tab2 span{
            padding: 0 5px 11px 5px;
        }
    }

</style>
