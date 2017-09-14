<template>
    <div>
        <panelcomp></panelcomp>
    </div>
</template>

<script>
  import Panelcomp from './Entrust/PanelCheckboxComp.vue'
  export default {
    name: 'hello',
    components: {
      Panelcomp
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        commonList: ['China', 'Japan', 'America'],
        checklist003: ['China', 'Japan']
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
