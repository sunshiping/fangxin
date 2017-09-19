<template>
    <div>
        <div class="fx-pan" v-for="item in list" :key="item.id">
            <flexbox>
                <flexbox-item><div class="house-title" @click="info(item.id)">{{ item.name }}</div></flexbox-item>
                <flexbox-item>
                    <div class="fr pdr10">
                        <rater-comp v-model="item.stars" slot="value" active-color="#04BE02" :font-size="15" disabled>
                            <span class="score" slot="score" >{{ item.score }}分</span>
                        </rater-comp>
                    </div>
                </flexbox-item>

            </flexbox>
            <div class="desc"><p class="house-desc inline-div" v-for="desc in item.desc"><span>{{desc}}</span> <span class="slash">/ </span> </p></div>
            <span class="house-price">{{ item.price }}万</span><span class="house-unit-price">{{ item.unitPrice }}元/平</span>

            <scroller lock-y :scrollbar-x=false class="mgt10">
                <div class="box1">
                    <div class="box1-item" v-for="i in 7"><span>{{' ' + i + ' '}}</span></div>
                </div>
            </scroller>

            <flexbox :gutter="0" class="mgt10">
                <flexbox-item :span="3/4">
                    <div class="flex-demo">
                        <p v-for="tag in item.tags" class="inline-div">
                            <span class="house-tag">{{tag}}</span>
                        </p>

                    </div>
                </flexbox-item>
                <flexbox-item><div class="see-count">带看：{{ item.seeCount }}次</div></flexbox-item>
            </flexbox>

            <div class="divide-line"></div>


        </div>
    </div>

</template>

<script>
    import { Flexbox, FlexboxItem, Rater, Group, Cell, Scroller } from 'vux'
    import RaterComp from './RaterComp.vue'

    export default {
      components: {
        Flexbox,
        FlexboxItem,
        Rater,
        Group,
        Cell,
        RaterComp,
        Scroller
      },
      props: {
        list: Array
      },
      methods: {
        info (id) {
          console.log(id)
          this.$router.push({
            path: 'sourceInfo',
            query: {
              id: id
            }
          })
        }
      }
    }
</script>

<style scoped="scoped">
    .divide-line{
        /*border-bottom: 1px solid #eee;*/
        /*padding-top: 15px;*/
        border: 0;
        height: 0;
        border-top: 1px solid #eee;
        margin: 15px 0;
    }
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
    .inline-div{
        display: inline;
    }
    .desc .house-desc:last-child .slash{
        display: none;
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
        padding: 2px 5px;
        background-color: #ccc;
        color: #666;
        font-size: 12px;
        margin-right: 5px;
    }
    .mgt10{
        margin-top: 10px;
    }
    .see-count{
        font-size: 12px;
        color: #999;
        text-align: right;
        padding-right: 10px;
    }
</style>
