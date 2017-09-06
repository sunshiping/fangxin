<template>
    <div>
        <flexbox>
            <flexbox-item><div class="flex-demo">龙腾西城 3室2厅 89.61㎡</div></flexbox-item>
            <flexbox-item><div class="flex-demo"></div></flexbox-item>
        </flexbox>
    </div>
</template>

<script>
    import { Flexbox, FlexboxItem } from 'vux'

    export default {
      name: 'test',
      components: {
        Flexbox,
        FlexboxItem
      },
      data () {
        return {
          msg: '123'
        }
      }
    }
</script>

<style>

</style>
