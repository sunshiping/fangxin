<template>
    <div>
        <group class="personal">
            <cell title="我的收藏" link="/collection" ></cell>
            <cell title="我的委托" :link="{path:'/demo'}" ></cell>
            <cell title="浏览记录" link="https://vux.li" ></cell>
        </group>
    </div>
</template>

<script>
  import { Cell, Group } from 'vux'
  export default {
    name: 'hello',
    components: {
      Group,
      Cell
    },
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">


</style>
