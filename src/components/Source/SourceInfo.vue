<template>
    <div>
        <swiper :list="imgList" v-model="demo_index" @on-index-change="demo01_onIndexChange" class="fx-swiper"></swiper>
        <div class="house-desc">
            <flexbox :gutter="0">
                <flexbox-item>
                    <div class="stars font-lf">
                        <rater-comp v-model="stars" slot="value" active-color="#04BE02" :font-size="15" disabled>
                            <span class="score" slot="score" >4.9</span>
                        </rater-comp>
                        <div>房源评价 5人</div>
                    </div>
                </flexbox-item>
                <flexbox-item>
                    <div class="see font-cen">
                        <div>带看</div>
                        <div>130次</div>
                    </div>
                </flexbox-item>
                <flexbox-item>
                    <div class="price font-rg">
                        <div><span class="money">4500 </span> 元/月</div>
                        <div>45平方</div>
                    </div>
                </flexbox-item>
            </flexbox>
            <div class="divide-line"></div>
        </div>

        <div class="info">
            <div class="house-info">
                <flexbox :gutter="0" wrap="wrap" :class="{ isFold: isFold }">
                    <flexbox-item :span="1/2" v-for="item in houseInfo" :key="item.label">
                        <div class="info-item">
                            <label>{{ item.label }}</label>
                            <span>{{ item.info }}</span>
                        </div>
                    </flexbox-item>
                </flexbox>
                <div class="fold"  @click="fold"><span class="arrow-icon" :class="{ change : !isFold }"></span></div>

                <div class="divide-line"></div>
            </div>

            <div class="position">
                <div class="position-title">小区位置</div>
                <div class="position-map">
                    <baidu-map :position="position"></baidu-map>
                </div>
            </div>

            <div class="divide-line"></div>

            <div class="recommend">
                <span class="recommend-title">推荐房源</span>
            </div>
            <col2-comp :list="list" class="recommend-list"></col2-comp>

            <div class="operation-btn">
                <div class="btns">
                    <flexbox :gutter="0">
                        <flexbox-item :span="1/5">
                            <div class="collection">
                                收藏
                            </div>
                        </flexbox-item>
                        <flexbox-item :span="2/5">
                            <div class="btn">预约看房</div>
                        </flexbox-item>
                        <flexbox-item :span="2/5">
                            <div class="btn">联系经纪人</div>
                        </flexbox-item>
                    </flexbox>
                </div>

            </div>
        </div>



    </div>
</template>

<script>
  import { Swiper, Flexbox, FlexboxItem } from 'vux'
  import RaterComp from '../Common/RaterComp.vue'
  import BaiduMap from '../Comment/MapComp.vue'
  import Col2Comp from '../Common/Col2Comp.vue'

  export default {
    name: 'hello',
    components: {
      Swiper,
      Flexbox,
      FlexboxItem,
      RaterComp,
      BaiduMap,
      Col2Comp
    },
    data () {
      return {
        imgList: [{
          url: 'javascript:',
          img: 'https://static.vux.li/demo/1.jpg',
          title: '送你一朵fua'
        }, {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/2.jpg',
          title: '送你一辆车'
        }, {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/3.jpg',
          title: '送你一次旅行'
        }],
        demo_index: 1,
        stars: 4.9,
        houseInfo: [
          {
            label: '支付',
            info: '押一付三'
          },
          {
            label: '类型',
            info: '合租'
          },
          {
            label: '区域',
            info: '郑东新区'
          },
          {
            label: '年代',
            info: '2014年'
          },
          {
            label: '朝向',
            info: '南北通透'
          },
          {
            label: '楼型',
            info: '小高层'
          },
          {
            label: '楼层',
            info: '顶层/18层'
          },
          {
            label: '装修',
            info: '精装修'
          }
        ],
        isFold: true,
        position: '九龙城-龙腾西城',
        list: [
          {
            src: '../../static/images/logo.png',
            name: '蔷薇花园 3室2厅 112㎡',
            price: '240',
            unitPrice: '15000',
            measure: '112㎡'
          },
          {
            src: '../../static/images/logo.png',
            name: '蔷薇花园1 3室2厅 112㎡',
            price: '240',
            unitPrice: '15000',
            measure: '112㎡'
          },
          {
            src: '../../static/images/logo.png',
            name: '蔷薇花园2 3室2厅 112㎡',
            price: '240',
            unitPrice: '15000',
            measure: '112㎡'
          },
          {
            src: '../../static/images/logo.png',
            name: '蔷薇花园3 3室2厅 112㎡',
            price: '240',
            unitPrice: '15000',
            measure: '112㎡'
          }
        ]
      }
    },
    created () {
      console.log(this.$route.query.id)
    },
    methods: {
      demo01_onIndexChange (index) {
        this.demo01_index = index
      },
      fold () {
        console.log('----------------->展开')
        this.isFold = !this.isFold
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .divide-line{
        /*border-bottom: 1px solid #eee;*/
        /*padding-top: 15px;*/
        border: 0;
        height: 0;
        border-top: 1px solid #eee;
        margin: 5px 0;
    }
    .stars, .see, .price{
        font-size: 12px;
    }
    .price span{
        color: red;
    }
    .money{
        font-size: 16px;
    }
    .font-rg{
        text-align: right;
    }
    .font-lf{
        text-align: left;
    }
    .font-cen{
        text-align: center;
    }
    .house-desc{
        padding: 5px;
    }
    .info{
        background-color: #fff;
        padding-bottom: 50px;
    }
    .house-info{
        padding: 5px 10px;
    }
    .info-item{
        label{
            font-size: 12px;
            color: #999;
        }
        span{
            font-size: 12px;
            color: #333;
        }
    }
    .fold{
        height: 20px;
        position: relative;
        transition: height 0.6s;
    }
    .arrow-icon{
        position: absolute;
        top:10px;
        right: 50%;
    }
    .arrow-icon:after{
        content: " ";
        display: inline-block;
        height: 6px;
        width: 6px;
        border-width: 2px 2px 0 0;
        border-color: #c8c8cd;
        border-style: solid;
        /*-webkit-transform: matrix(.71,.71,-.71,.71,0,0);*/
        /*transform: matrix(.71,.71,-.71,.71,0,0);*/
        transform: rsotate(135deg);
        -webkit-transform: rotate(135deg);
        position: relative;
        top: -2px;
        position: absolute;
        top: 50%;
        margin-top: -4px;
        right: 2px;
    }
    .change:after{
        -webkit-transform: rotate(-43deg);
    }
    .isFold{
        height:40px;
        overflow: hidden;
    }
    .position{
        padding: 0 10px;
        background-color: #fff;
        height: 240px;
    }
    .position-title{
        color: #999;
        font-size: 14px;
    }
    .position-map{
        height:50px;
    }
    .operation-btn{
        padding: 8px 10px;
        background-color: #eaeaea;
        position: fixed;
        width: 100%;
        bottom: 0;
        left: -15px;


        .collection{
            text-align: center;
            color: #999;
            font-size: 14px;
            height:40px;
            line-height:40px;
        }
        .btn{
            background-color: #999;
            text-align: center;
            color: #fff;
            font-size: 14px;
            height:40px;
            line-height:40px;
            width: 93%;
            margin: 0 auto;
            border-radius: 5px;
        }
    }
    .fx-swiper{
        .vux-swiper-item{
            width: 90% !important;
            border-radius: 10px !important;
            overflow: hidden !important;
            margin: 0px auto 0px 20px !important;
        }
    }
    .recommend-title{
        padding-left: 8px;
        font-size: 14px;
    }
    .recommend-list{
        padding-bottom: 10px;
    }
</style>
