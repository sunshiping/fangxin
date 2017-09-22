<template>
    <div class="back-header">
        <x-header
                @on-click-back="back"
                title="选择经纪人"
                :left-options="{preventGoBack: true}"
        ></x-header>
        <div class="clearfix tab">
            <router-link
                    v-for="item in tabList"
                    :key="item.name"
                    :to="item.link"
                    active-class="active"
                    tag="div"
                    class="fl tab-item"
            >
                <span>{{ item.name }}</span>
            </router-link>

        </div>

        <router-view></router-view>

        <div class="btn-wrap">
            <div class="btn">
                <x-button type="primary" class="confirm" min>确认委托</x-button>
            </div>
        </div>



    </div>
</template>

<script>
  import { XButton, XHeader } from 'vux'
  export default {
    components: {
      XButton,
      XHeader
    },
    data () {
      return {
        tabList: [
          {
            link: '/broker/sort',
            name: '综合排序'
          },
          {
            link: '/broker/count',
            name: '带看次数'
          },
          {
            link: '/broker/grade',
            name: '评级优先'
          }
        ]
      }
    },
    methods: {
      back () {
        this.$router.push({
          path: '/sell/step5'
        })
      }
    }
  }
</script>

<style scoped lang="less">

    .btn-wrap{
        position: fixed;
        width: 100%;
        bottom: 0;
    }
    .btn{
        padding: 10px;
    }
    .confirm{
        font-size: 14px;
        padding: 5px 0;
    }
    .select{
        font-size: 20px;
        text-align: center;
        padding: 10px 0;
        color: #666;
    }
    .tab{
        border-bottom: 1px solid #D9D9D9;
        height: 40px;
        line-height: 40px;
        font-size: 14px;

        .tab-item{
            width: 33.33%;
            text-align: center;
        }

        .active span{
            border-bottom: 2px solid rgb(4, 190, 2);
            padding-bottom: 11px;
        }

    }

</style>
