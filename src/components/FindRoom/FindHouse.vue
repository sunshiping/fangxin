<template>
    <div class="housing-content">
        <div class="header-img">
            <img src="../../../static/images/logo.png">
        </div>
        <p class="title">房信网 更专业的房产交易平台</p>
        <div class="housing-btn">
            <span class="btn-sell active" @click='link()'>我要租房</span>
            <span class="btn-rent" @click='open()'>我要购房</span>
        </div>
    </div>
</template>
<script>
  export default{
    methods: {
      link () {
        this.$router.push({
          path: '/houseType'
        })
      },
      open () {
        this.$router.push({
          path: '/saleareaprice'
        })
      }
    }
  }
</script>
