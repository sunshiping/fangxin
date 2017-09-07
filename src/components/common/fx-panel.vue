<template>
    <div class="fx-pan">
        <flexbox>
            <flexbox-item><div class="house-title">龙腾西城  3室2厅 89.61㎡ 龙腾西城</div></flexbox-item>
            <flexbox-item>
                <div class="fr pdr10">
                    <fx-rater v-model="starCount" slot="value" active-color="#04BE02" :font-size="15">
                        <span class="score" slot="score" >4.8分</span>
                    </fx-rater>
                </div>
            </flexbox-item>

        </flexbox>
        <p class="house-desc"><span>南北通透</span> / <span>高层(共30层)</span> / <span>2014</span></span></p>
        <span class="house-price">240万</span><span class="house-unit-price">15600元/平</span>

        <scroller lock-y :scrollbar-x=false>
            <div class="box1">
                <div class="box1-item" v-for="i in 7"><span>{{' ' + i + ' '}}</span></div>
            </div>
        </scroller>

        <flexbox :gutter="0" class="mgt20">
            <flexbox-item :span="3/4">
                <div class="flex-demo">
                    <span class="house-tag">学区房</span><span class="house-tag">地铁房</span>
                </div>
            </flexbox-item>
            <flexbox-item><div class="flex-demo">rest</div></flexbox-item>
        </flexbox>



    </div>
</template>

<script>
    import { Flexbox, FlexboxItem, Rater, Group, Cell, Scroller } from 'vux'
    import FxRater from './fx-rater.vue'

    export default {
      components: {
        Flexbox,
        FlexboxItem,
        Rater,
        Group,
        Cell,
        FxRater,
        Scroller
      },
      data () {
        return {
          msg: '123',
          starCount: 3.5
        }
      }
    }
</script>

<style scoped="scoped">
    .fx-pan{
        padding: 10px;
    }
    .score{
        font-size: 12px;
    }
    .fr{
        text-align: right;
    }
    .pdr10{
        /*padding-right: 10px;*/
    }
    .house-title{
        font-size: 14px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .house-desc{
        font-size: 12px;
        color: #999;
    }
    .house-price{
        font-size: 16px;
        color: #ff0000;
        padding-right: 20px;
    }
    .house-unit-price{
        font-size: 12px;
        color: #999;
    }
    .box1 {
        height: 100px;
        position: relative;
        width: 1490px;
    }
    .box1-item {
        width: 200px;
        height: 100px;
        background-color: #ccc;
        display:inline-block;
        margin-left: 15px;
        float: left;
        text-align: center;
        line-height: 100px;
    }
    .box1-item:first-child {
        margin-left: 0;
    }
    .house-tag{
        display: inline-block;
        padding: 3px;
        background-color: #ccc;
        color: #666;
        font-size: 12px;
        margin-right: 5px;
    }
    .mgt20{
        margin-top: 20px;
    }
</style>
