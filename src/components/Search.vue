<template>
    <div>
        <search
                @on-submit="onSubmit"
                :auto-fixed="false"
                v-model="value2"
                @on-focus="onFocus"
                @on-cancel="onCancel"
        ></search>
    </div>
</template>

<script>
  import { Search } from 'vux'

  export default {
    components: {
      Search
    },
    data () {
      return {
        value2: 'vux'
      }
    },
    methods: {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
