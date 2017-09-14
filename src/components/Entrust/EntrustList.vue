<template>
    <div>
        <panel-checkbox-comp></panel-checkbox-comp>
    </div>
</template>

<script>
  import PanelCheckboxComp from './PanelCheckboxComp.vue'
  export default {
    name: 'hello',
    components: {
      PanelCheckboxComp
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
