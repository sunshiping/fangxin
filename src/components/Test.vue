<template>
    <div>
        <fx-panel></fx-panel>
    </div>
</template>

<script>
    import FxPanel from './common/fx-panel.vue'
    export default {
      components: {
        FxPanel
      },
      data () {
        return {
          msg: '456'
        }
      }
    }
</script>
