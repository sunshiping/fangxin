<template>
    <div class="rent-content step">
        <x-header></x-header>
        <p class="title">您要出售的小区名称？</p>
        <search
                @on-submit="onSubmit"
                :auto-fixed="false"
                v-model="value2"
                :results="results"
                @on-focus="onFocus"
                @on-cancel="onCancel"
                class="search"
        >
        </search>

        <div class="footer"><span class="weui-btn" @click='link'>下一步</span></div>
    </div>
</template>
<script>
  import { XButton, XHeader, Search } from 'vux'

  export default {
    components: {
      XButton,
      XHeader,
      Search
    },
    data () {
      return {
        value2: 'vux',
        results: ['1', '2']
      }
    },
    methods: {
      link () {
        this.$router.push({
          path: '/sell/step2'
        })
      },
      onSubmit (val) {
        window.alert('on submit' + val)
      },
      onCancel () {
        console.log('on cancel')
      },
      onFocus () {
        console.log('on focus')
      }
    }
  }

</script>
<style scoped lang="less">
</style>
