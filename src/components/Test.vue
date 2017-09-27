<template>
    <div>
        <h1>{{ msg }}</h1>
        <img src=""/>
    </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created () {
      console.log(this.$axios)
      this.$axios.get('../../static/data.json')
        .then(function (res) {
          console.log(res)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
