<template>
    <div>
       <filter-tab-comp></filter-tab-comp>
       <list-pull-comp :viewHeight="viewHeight">
           <div slot="list">
               <slot name="house-type"></slot>
               <panel-comp :list="list"></panel-comp>
           </div>
       </list-pull-comp>
    </div>
</template>




<script>
    import PanelComp from './PanelComp.vue'
    import ListPullComp from './ListPullComp.vue'
    import FilterTabComp from '../Source/FilterTabComp.vue'

    export default {
      components: {
        PanelComp,
        ListPullComp,
        FilterTabComp
      },
      props: {
        list: Array
      },
      data () {
        return {
          viewHeight: '-100'
        }
      }
    }

</script>

<style scoped="scoped">
</style>
