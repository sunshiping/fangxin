<template>
    <div>
        <div class="head">
            <flexbox class="select-head">
                <flexbox-item v-for="(item, index) in screenNames" :key = "item.id">
                    <div class="select-type" @click="toSelect(index)">
                        {{ item.name }}<span class="arrow-icon"></span>
                    </div>
                </flexbox-item>
            </flexbox>
        </div>


        <div class="area-list select-list" v-show="showArea">
            <flexbox>
                <flexbox-item >
                    <div class="flex-demo flex-bor-rg">
                        <scroller lock-x height="300px" :scrollbarY=false ref="scroller1">
                            <div>
                                <ul class="select-col">
                                    <li
                                            v-for="(item, index) in selectCol1"
                                            :class="{'active':ind1 === index}"
                                            :key = "item.id"
                                            @click="select1(item.name, index)"
                                    >{{ item.name }}</li>
                                </ul>
                            </div>
                        </scroller>
                    </div>
                </flexbox-item>
                <flexbox-item>
                    <div class="flex-demo flex-bor-rg">
                        <scroller lock-x height="300px" :scrollbarY=false ref="scroller2">
                            <div>
                                <ul class="select-col">
                                    <li
                                            v-for="(item, index) in selectCol2"
                                            :class="{'active':ind2 === index}"
                                            :key = "item.id"
                                            @click="select2(item.name, index)"
                                    >{{ item.name }}</li>
                                </ul>
                            </div>
                        </scroller>
                    </div>
                </flexbox-item>
                <flexbox-item>
                    <div class="flex-demo flex-bor-rg">
                        <scroller lock-x height="300px" :scrollbarY=false ref="scroller3">
                            <div>
                                <ul class="select-col">
                                    <li
                                            v-for="(item, index) in selectCol3"
                                            :class="{'active':ind3 === index}"
                                            :key = "item.id"
                                            @click="select3(item.name, index)"
                                    >{{ item.name }}</li>
                                </ul>
                            </div>
                        </scroller>
                    </div>
                </flexbox-item>
            </flexbox>
        </div>

        <div class="acreage select-list" v-show="showAcreage">
            <scroller lock-x height="300px" :scrollbarY=true ref="scroller4">
                <div>
                    <ul class="select-col">
                        <li
                                v-for="(item, index) in acreage"
                                :class="{'active':ind4 === index}"
                                :key = "item.id"
                                @click="select4(item.name, index)"
                        >{{ item.name }}</li>
                    </ul>
                </div>
            </scroller>
            <div class="search">
                <span>自定义</span>
                <input type="number" placeholder="123">
                <span class="divid"> — </span>
                <input type="number" placeholder="456">
                <span>平米</span>
            </div>
        </div>

        <div class="acreage select-list" v-show="showPrice">
            <scroller lock-x height="300px" :scrollbarY=true ref="scroller5">
                <div>
                    <ul class="select-col">
                        <li
                                v-for="(item, index) in price"
                                :class="{'active':ind5 === index}"
                                :key = "item.id"
                                @click="select5(item.name, index)"
                        >{{ item.name }}</li>
                    </ul>
                </div>
            </scroller>
            <div class="search price">
                <span>自定义</span>
                <div class="group">
                    <input type="number" placeholder="最低">
                    <span class="unit">万</span>
                </div>
                <span class="divid"> — </span>
                <div class="group">
                    <input type="number" placeholder="最高">
                    <span class="unit">万</span>
                </div>
                <span>确定</span>
            </div>
        </div>

        <div class="house select-list" v-show="showHouse">
            <scroller lock-x height="200px" :scrollbarY=true ref="scroller6">
                <div>
                    <ul class="select-col">
                        <li
                                v-for="(item, index) in house"
                                :class="{'active':ind6 === index}"
                                :key = "item.id"
                                @click="select6(item.name, index)"
                        >{{ item.name }}</li>
                    </ul>
                </div>
            </scroller>

        </div>

        <div class="more select-list" v-show="showMore">
            <scroller lock-x height="320px" :scrollbarY=true ref="scroller7">
                <div class="more-type">
                    <div class="group-type">
                        <div class="type-name">朝向</div>
                        <div class="type-list">
                            <checker
                                    v-model="typeList1Checkbox"
                                    type="checkbox"
                                    default-item-class="default-item"
                                    selected-item-class="default-item-selected">


                                <checker-item :value="item.name" v-for="item in typeList1" :key="item.id">
                                    <span class="item-name">{{item.name}}</span>
                                </checker-item>
                            </checker>
                        </div>
                        <!--<span>{{typeList1Checkbox}}</span>-->
                    </div>
                    <div class="divide-line"></div>
                    <div class="group-type">
                        <div class="type-name">特色</div>
                        <div class="type-list">
                            <checker
                                    v-model="typeList2Checkbox"
                                    type="checkbox"
                                    default-item-class="default-item"
                                    selected-item-class="default-item-selected">


                                <checker-item :value="item.name" v-for="item in typeList2" :key="item.id"><span class="item-name">{{item.name}}</span></checker-item>
                            </checker>
                        </div>
                        <!--<span>{{typeList2Checkbox}}</span>-->
                    </div>
                    <div class="divide-line"></div>


                    <div class="btn clearfix">
                        <div class="cancel" @click="cancel">取消</div>
                        <div class="confirm" @click="confirm">确定</div>
                    </div>

                </div>
            </scroller>

        </div>




    </div>
</template>

<script>
  import { Flexbox, FlexboxItem, Scroller, Checker, CheckerItem } from 'vux'

  export default {
    components: {
      Flexbox,
      FlexboxItem,
      Scroller,
      Checker,
      CheckerItem
    },
    data () {
      return {
        screenNames: [
          {
            id: 101,
            name: '区域'
          },
          {
            id: 102,
            name: '面积'
          },
          {
            id: 103,
            name: '价格'
          },
          {
            id: 104,
            name: '户型'
          },
          {
            id: 105,
            name: '更多'
          }
        ],
        selectCol1: [
          {
            id: 101,
            name: '区域'
          },
          {
            id: 102,
            name: '地铁'
          }
        ],
        selectCol2: [
          {
            id: 200,
            name: '不限'
          },
          {
            id: 201,
            name: '金水区'
          },
          {
            id: 202,
            name: '郑东新区'
          },
          {
            id: 203,
            name: '中原区'
          },
          {
            id: 204,
            name: '管城区'
          },
          {
            id: 205,
            name: '二七区'
          },
          {
            id: 206,
            name: '惠济区'
          },
          {
            id: 207,
            name: '高新区'
          },
          {
            id: 208,
            name: '经济开发区'
          },
          {
            id: 209,
            name: '中牟'
          },
          {
            id: 210,
            name: '周边市县'
          }
        ],
        selectCol3: [
          {
            id: 301,
            name: '不限'
          }
        ],
        acreage: [
          {
            id: 1001,
            name: '50平米以下'
          },
          {
            id: 1002,
            name: '50-70'
          },
          {
            id: 1003,
            name: '70-90'
          },
          {
            id: 1004,
            name: '90-120'
          },
          {
            id: 1005,
            name: '120-150'
          },
          {
            id: 1006,
            name: '150-200'
          },
          {
            id: 1007,
            name: '200-250'
          },
          {
            id: 1008,
            name: '300-350'
          },
          {
            id: 1009,
            name: '350平米以上'
          }
        ],
        price: [
          {
            id: 2001,
            name: '不限'
          },
          {
            id: 2002,
            name: '100万以下'
          },
          {
            id: 2003,
            name: '100-150万'
          },
          {
            id: 2004,
            name: '150-200万'
          },
          {
            id: 2005,
            name: '200-250万'
          },
          {
            id: 2006,
            name: '250-300万'
          },
          {
            id: 2007,
            name: '350-400万'
          },
          {
            id: 2008,
            name: '400-450'
          },
          {
            id: 2009,
            name: '450万以上'
          }
        ],
        house: [
          {
            id: 5001,
            name: '一居'
          },
          {
            id: 5002,
            name: '两居'
          },
          {
            id: 5003,
            name: '三居'
          },
          {
            id: 5004,
            name: '四居'
          },
          {
            id: 5005,
            name: '五居'
          },
          {
            id: 5006,
            name: '五居以上'
          }
        ],
        ind1: 100,
        ind2: 100,
        ind3: 100,
        ind4: 100,
        ind5: 100,
        ind6: 100,
        showArea: false,
        showAcreage: false,
        showPrice: false,
        showHouse: false,
        showMore: false,
        typeList1Checkbox: [],
        typeList2Checkbox: [],
        typeList1: [
          {
            id: 601,
            name: '不限'
          },
          {
            id: 602,
            name: '朝北'
          },
          {
            id: 603,
            name: '朝南'
          },
          {
            id: 604,
            name: '朝东'
          },
          {
            id: 605,
            name: '朝西'
          },
          {
            id: 606,
            name: '东南'
          },
          {
            id: 607,
            name: '东北'
          },
          {
            id: 608,
            name: '西南'
          },
          {
            id: 609,
            name: '西北'
          },
          {
            id: 610,
            name: '南北通透'
          },
          {
            id: 611,
            name: '东西通透'
          }
        ],
        typeList2: [
          {
            id: 701,
            name: '地铁'
          },
          {
            id: 702,
            name: '学区'
          },
          {
            id: 703,
            name: '满五年'
          },
          {
            id: 704,
            name: '满两年'
          },
          {
            id: 705,
            name: '独家'
          },
          {
            id: 706,
            name: '唯一'
          },
          {
            id: 707,
            name: '暖气'
          },
          {
            id: 708,
            name: '天然气'
          }
        ]
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.resetScroller()
      })
    },
    methods: {
      resetScroller () {
        this.$nextTick(() => {
          this.$nextTick(() => {
            this.$refs.scroller1.reset({
              top: 0
            })
            this.$refs.scroller2.reset({
              top: 0
            })
            this.$refs.scroller3.reset({
              top: 0
            })
            this.$refs.scroller4.reset({
              top: 0
            })
            this.$refs.scroller5.reset({
              top: 0
            })
            this.$refs.scroller6.reset({
              top: 0
            })
            this.$refs.scroller7.reset({
              top: 0
            })
          })
        })
      },
      toSelect (index) {
        if (index === 0) {
          this.showArea = !this.showArea
          this.showAcreage = false
          this.showPrice = false
          this.showHouse = false
          this.showMore = false
        } else if (index === 1) {
          this.showAcreage = !this.showAcreage
          this.showArea = false
          this.showPrice = false
          this.showHouse = false
          this.showMore = false
        } else if (index === 2) {
          this.showPrice = !this.showPrice
          this.showArea = false
          this.showAcreage = false
          this.showHouse = false
          this.showMore = false
        } else if (index === 3) {
          this.showHouse = !this.showHouse
          this.showPrice = false
          this.showArea = false
          this.showAcreage = false
          this.showMore = false
        } else if (index === 4) {
          this.showMore = !this.showMore
          this.showPrice = false
          this.showArea = false
          this.showAcreage = false
          this.showHouse = false
        }
        this.resetScroller()
      },
      select1 (name, index) {
        this.ind1 = index
        if (name === '区域') {
          this.selectCol2 = [
            {
              id: 0,
              name: '不限'
            },
            {
              id: 1,
              name: '金水区'
            },
            {
              id: 2,
              name: '郑东新区'
            },
            {
              id: 3,
              name: '中原区'
            },
            {
              id: 4,
              name: '管城区'
            },
            {
              id: 5,
              name: '二七区'
            },
            {
              id: 6,
              name: '惠济区'
            },
            {
              id: 7,
              name: '高新区'
            },
            {
              id: 8,
              name: '经济开发区'
            },
            {
              id: 9,
              name: '中牟'
            },
            {
              id: 10,
              name: '周边市县'
            }
          ]
        } else if (name === '地铁') {
          this.selectCol2 = [
            {
              id: 1,
              name: '地铁1号线'
            },
            {
              id: 2,
              name: '地铁2号线'
            }
          ]
        }
        this.resetScroller()
      },
      select2 (name, index) {
        console.log('------------->select2')
        this.ind2 = index
        if (name === '地铁1号线') {
          this.selectCol3 = [
            {
              id: 311,
              name: '不限'
            },
            {
              id: 312,
              name: '紫荆山站'
            },
            {
              id: 313,
              name: '会展中心站'
            },
            {
              id: 314,
              name: '黄河南路站'
            }
          ]
        } else {
          this.selectCol3 = [
            {
              id: 321,
              name: '不限'
            },
            {
              id: 322,
              name: '234'
            }
          ]
        }
        this.resetScroller()
      },
      select3 (index) {
        this.ind3 = index
        this.resetScroller()
      },
      select4 (name, index) {
        this.ind4 = index
        this.resetScroller()
      },
      select5 (name, index) {
        this.ind5 = index
        this.resetScroller()
      },
      select6 (name, index) {
        this.ind6 = index
        this.resetScroller()
      },
      cancel () {
        console.log('-------------->点击取消按钮')
        this.typeList1Checkbox = []
        this.typeList2Checkbox = []
      },
      confirm () {
        console.log('-------------->点击确定按钮')
//        this.typeList1Checkbox = []
//        this.typeList2Checkbox = []
      }
    }
  }
</script>

<style scoped="scoped" lang="less">
    .select-type{
        text-align: center;
        position: relative;
        font-size: 13px;
    }
    .arrow-icon{
        top: 7px;
        position: absolute;
        right: 13px;

    }
    .arrow-icon:after {
        border: 5px solid transparent;
        border-left: 5px solid #ccc;
        width: 0;
        height: 0;
        position: absolute;
        content: ' ';
        transform:rsotate(90deg);
        -webkit-transform:rotate(90deg);
        -trident-transform:rotate(90deg);
        -gecko-transform:rotate(90deg);

    }
    .select-list{
        width: 100%;
        padding-bottom: 10px;
        border-bottom:1px solid #ccc;
        position: absolute;
        background-color: #fff;
        z-index: 1;
    }
    .head{
        padding: 0 10px;
        background-color: #eee;
        .select-head{
            height:50px;

        }
    }

    .active{
        color: #0099CC;
    }
    ul.select-col li{
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
        position: relative;
        font-size: 12px;
    }
    ul.select-col li:after{
        content: " ";
        position: absolute;
        left: -5px;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #d9d9d9;
        color: #d9d9d9;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
    }
    .flex-bor-rg{
        border-right: 1px solid #d9d9d9;
        margin-left: 0px !important;
    }
    .acreage ul li {
        text-align: center;
    }
    .house ul li {
        text-align: center;
    }
    .search span{
        padding: 0 10px;
    }
    .search{
        font-size: 12px;
        padding-top: 10px;
        width: 90%;
        margin: 0 auto;
        padding-left: 15px;
    }
    .search .divid{
        color: #d9d9d9;
        padding: 0 2px;
    }
    .search input{
        width: 25%;
        border: 1px solid #d9d9d9;
        padding: 3px;
        color: #999;
    }
    .group{
        display: inline;
        position: relative;
    }
    .unit{
        position: absolute;
        right: 0;
        padding-top: 3px !important;
    }
    .more-type{
        padding: 10px;
        .type-name{
            font-size: 14px;
            padding: 5px 2px;
            display: inline-block;
        }
        .type-list span{
            padding: 5px;
            display: inline-block;

        }
    }
    .default-item {
        width: 25%;
        span.item-name{
            display: block;
            border: 1px solid #d9d9d9;
            /*width: 22%;*/
            padding: 3px 2px;
            text-align: center;
            margin: 2px;
            border-radius: 5px;
            font-size: 12px;
        }

    }
    @media (max-width: 320px) {
        .demo1-item {
            width: 21%;
        }
        .arrow-icon{
            top: 8px;
            /*right: 10px;*/
        }
    }
    .default-item-selected {
        border: none;
        span.item-name{
            border: 1px solid green;
        }
    }
    .divide-line{
        /*border-bottom: 1px solid #eee;*/
        /*padding-top: 15px;*/
        border: 0;
        height: 0;
        border-top: 1px solid #eee;
        margin: 15px 0 5px 0;
    }

    .clearfix:after {
        content: ".";
        display: block;
        clear: both;
        visibility: hidden;
        line-height: 0;
        height: 0;
        font-size: 0;
    }

    .clearfix {
        *zoom: 1;
    }
    .cancel{
        float: left;

    }
    .confirm{
        float: right;
        background-color: #999;
        color: #fff;
    }
    .cancel,.confirm{
        border: 1px solid #d9d9d9;
        width: 70px;
        padding: 3px 2px;
        text-align: center;
        margin: 2px;
        border-radius: 5px;
        font-size: 12px;
    }
    .area-list .vux-flexbox-item{
        margin-left: 0px !important;
    }
    .vux-popup-dialog.vux-popup-top {
        width: 100%;
        top: 50px!important;
        right: auto;
        bottom: auto;
        left: 0;
    }

    .vux-popup-mask{
        top:50px !important;
    }
</style>
