<template>
    <div>
       Source {{msg}}
        <x-switch title="set max-height=50%" v-model="show13"></x-switch>
        <div class="show-dialog">
            <popup v-model="show13" position="top" max-height="50%">
                123
                Source {{msg}}Source {{msg}}
                <br><br><br><br>

            </popup>
        </div>
    </div>
</template>

<script>
  import { TransferDom, Popup, Group, XSwitch, XButton, Cell } from 'vux'
  export default {
    directives: {
      TransferDom
    },
    data () {
      return {
        msg: '123',

        show13: true
      }
    },
    components: {
      Popup,
      Group,
      XSwitch,
      XButton,
      Cell
    }
  }
</script>

<style scoped="scoped">
    .overlayer{
        position:fixed;
        left:0;
        top:0;
        width:100%;
        height:100%;
        z-index:10;
    }
    .vux-popup-dialog.vux-popup-top {
        width: 100%;
        top: 100px!important;
        right: auto;
        bottom: auto;
        left: 0;
    }

    .vux-popup-mask{
        top:100px !important;
    }
</style>
