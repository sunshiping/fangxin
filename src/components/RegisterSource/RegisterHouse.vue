<template>
    <div class="housing-content">
        <div class="header-img">
            <img src="../../../static/images/logo.png">
        </div>
        <p class="title">房信网 更专业的房产交易平台</p>
        <div class="housing-btn">
            <span class="btn-sell active" @click="link">我要出售</span>
            <span class="btn-rent">我要出租</span>
        </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      link () {
        this.$router.push({
          path: '/sell/step1'
        })
      }
    }
  }

</script>
