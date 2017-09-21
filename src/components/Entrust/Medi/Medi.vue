<template>
    <div>
        <div class="select">选择中介公司</div>
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

    </div>
</template>

<script>

  export default {
    data () {
      return {
        tabList: [
          {
            link: '/medi/sort',
            name: '综合排序'
          },
          {
            link: '/medi/count',
            name: '成交量'
          },
          {
            link: '/medi/grade',
            name: '评级优先'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="less">
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
