<template>
    <div>
        <div class="per-header">
            <span class="fa fa-home"></span>
            <div class="city-name" @click='choiceCity()'><span>{{youChoiceCityName}}</span><span class="arrow-icon"></span></div>
            <span class="fa fa-mobile-phone"></span><span class="fa fa-bell-o"></span>
        </div>

        <div class="per-info">
            <span class="info-tit">个人资料</span>
            <div class="info-p"><span>姓名：</span><span>张三</span></div>
            <div class="info-p"><span>性别：</span><span>男</span></div>
            <div class="info-p"><span>手机：</span><span>15617570123</span><span class="auth">已认证</span></div>
            <div class="set">个人资料设置</div>
            <div class="portrait"><img src="../../../static/images/portrait.png"/></div>
        </div>

        <ul class="mine-list">
            <li @click="collection"><span>我的收藏</span><span class="fa fa-star-o icon"></span></li>
            <li><span>我的委托</span><span class="fa fa-star-o icon"></span></li>
            <li><span>浏览记录</span><span class="fa fa-star-o icon"></span></li>
        </ul>

        <city
                :is-show.sync='city.isShow'
                :on-choose='city.onChoose'
                :city-data='city.cityData'
                :local-city='city.localCity'
                :star-city='city.starCity'
                :close='close'
        ></city>


    </div>
</template>

<script>
  import { Cell, Group } from 'vux'
  import City from 'vue-city'
  export default {
    name: 'hello',
    components: {
      Group,
      Cell,
      City
    },
    data () {
      return {
        youChoiceCityName: '郑州',
        city: {
          isShow: false,
          cityData: [],
          onChoose: null,
          localCity: {},
          starCity: []
        }
      }
    },
    mounted () {
      this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been rendered
        let _this = this
        this.getCityInfo()
        this.city.onChoose = function (res) {
          // ToDo: 选完城市后......
          console.log(res)
          _this.city.isShow = false
          _this.youChoiceCityName = res.cityName
        }
      })
    },
    methods: {
      getCityInfo: function () {
        this.city.starCity = [
          {
            cityId: 301,
            cityName: '保山',
            citySpell: 'BAOSHAN',
            cityFirstLetter: 'B'
          },
          {
            cityId: 167,
            cityName: '日照',
            citySpell: 'RIZHAO',
            cityFirstLetter: 'R'
          }
        ]

        this.city.cityData = [
          {
            cityId: 290,
            cityName: '阿坝州',
            citySpell: 'ABAZHOU',
            cityFirstLetter: 'A'
          }, {
            cityId: 348,
            cityName: '阿克苏地区',
            citySpell: 'AKESUDIQU',
            cityFirstLetter: 'A'
          }, {
            cityId: 348,
            cityName: '阿克苏地区',
            citySpell: 'AKESUDIQU',
            cityFirstLetter: 'A'
          }, {
            cityId: 356,
            cityName: '阿拉尔',
            citySpell: 'ALAER',
            cityFirstLetter: 'A'
          }, {
            cityId: 170,
            cityName: '宝鸡',
            citySpell: 'BAOJI',
            cityFirstLetter: 'B'
          }, {
            cityId: 301,
            cityName: '保山',
            citySpell: 'BAOSHAN',
            cityFirstLetter: 'B'
          },
          {
            cityId: 59,
            cityName: '沧州',
            citySpell: 'CANGZHOU',
            cityFirstLetter: 'C'
          },
          {
            cityId: 25,
            cityName: '长春',
            citySpell: 'CHANGCHUN',
            cityFirstLetter: 'C'
          },
          {
            cityId: 106,
            cityName: '常德',
            citySpell: 'CHANGDE',
            cityFirstLetter: 'C'
          },
          {
            cityId: 163,
            cityName: '丹东',
            citySpell: 'DANDONG',
            cityFirstLetter: 'D'
          },
          {
            cityId: 270,
            cityName: '儋州',
            citySpell: 'DANZHOU',
            cityFirstLetter: 'D'
          },
          {
            cityId: 43,
            cityName: '鄂尔多斯',
            citySpell: 'EERDUOSI',
            cityFirstLetter: 'E'
          },
          {
            cityId: 235,
            cityName: '恩施州',
            citySpell: 'ENSHIZHOU',
            cityFirstLetter: 'E'
          },
          {
            cityId: 230,
            cityName: '鄂州',
            citySpell: 'EZHOU',
            cityFirstLetter: 'E'
          },
          {
            cityId: 260,
            cityName: '防城港',
            citySpell: 'FANGCHENGGANG',
            cityFirstLetter: 'F'
          },
          {
            cityId: 36,
            cityName: '佛山',
            citySpell: 'FOSHAN',
            cityFirstLetter: 'F'
          },
          {
            cityId: 333,
            cityName: '甘南州',
            citySpell: 'GANNANZHOU',
            cityFirstLetter: 'G'
          },
          {
            cityId: 102,
            cityName: '赣州',
            citySpell: 'GANZHOU',
            cityFirstLetter: 'G'
          },
          {
            cityId: 16,
            cityName: '哈尔滨',
            citySpell: 'HAERBIN',
            cityFirstLetter: 'H'
          },
          {
            cityId: 339,
            cityName: '海北州',
            citySpell: 'HAIBEIZHOU',
            cityFirstLetter: 'H'
          },
          {
            cityId: 338,
            cityName: '海东地区',
            citySpell: 'HAIDONGDIQU',
            cityFirstLetter: 'H'
          },
          {
            cityId: 215,
            cityName: '佳木斯',
            citySpell: 'JIAMUSI',
            cityFirstLetter: 'J'
          },
          {
            cityId: 221,
            cityName: '吉安',
            citySpell: 'JIAN',
            cityFirstLetter: 'J'
          },
          {
            cityId: 110,
            cityName: '开封',
            citySpell: 'KAIFENG',
            cityFirstLetter: 'K'
          },
          {
            cityId: 179,
            cityName: '喀什地区',
            citySpell: 'KASHIDIQU',
            cityFirstLetter: 'K'
          },
          {
            cityId: 180,
            cityName: '克拉玛依',
            citySpell: 'KELAMAYI',
            cityFirstLetter: 'K'
          },
          {
            cityId: 266,
            cityName: '来宾',
            citySpell: 'LAIBIN',
            cityFirstLetter: 'L'
          },
          {
            cityId: 122,
            cityName: '莱芜',
            citySpell: 'LAIWU',
            cityFirstLetter: 'L'
          },
          {
            cityId: 99,
            cityName: '马鞍山',
            citySpell: 'MAANSHAN',
            cityFirstLetter: 'M'
          },
          {
            cityId: 53,
            cityName: '南充',
            citySpell: 'NANCHONG',
            cityFirstLetter: 'N'
          },
          {
            cityId: 11,
            cityName: '南京',
            citySpell: 'NANJING',
            cityFirstLetter: 'N'
          },
          {
            cityId: 165,
            cityName: '盘锦',
            citySpell: 'PANJIN',
            cityFirstLetter: 'P'
          },
          {
            cityId: 298,
            cityName: '黔东南州',
            citySpell: 'QIANDONGNANZHOU',
            cityFirstLetter: 'Q'
          },
          {
            cityId: 167,
            cityName: '日照',
            citySpell: 'RIZHAO',
            cityFirstLetter: 'R'
          },
          {
            cityId: 249,
            cityName: '三门峡',
            citySpell: 'SANMENXIA',
            cityFirstLetter: 'S'
          },
          {
            cityId: 225,
            cityName: '三明',
            citySpell: 'SANMING',
            cityFirstLetter: 'S'
          },
          {
            cityId: 37,
            cityName: '三亚',
            citySpell: 'SANYA',
            cityFirstLetter: 'S'
          },
          {
            cityId: 185,
            cityName: '宿州',
            citySpell: 'SUZHOU',
            cityFirstLetter: 'S'
          },
          {
            cityId: 354,
            cityName: '塔城地区',
            citySpell: 'TACHENGDIQU',
            cityFirstLetter: 'T'
          },
          {
            cityId: 121,
            cityName: '泰安',
            citySpell: 'TAIAN',
            cityFirstLetter: 'T'
          },
          {
            cityId: 81,
            cityName: '潍坊',
            citySpell: 'WEIFANG',
            cityFirstLetter: 'W'
          },
          {
            cityId: 42,
            cityName: '威海',
            citySpell: 'WEIHAI',
            cityFirstLetter: 'W'
          },
          {
            cityId: 32,
            cityName: '厦门',
            citySpell: 'XIAMEN',
            cityFirstLetter: 'X'
          },
          {
            cityId: 49,
            cityName: '银川',
            citySpell: 'YINCHUAN',
            cityFirstLetter: 'Y'
          },
          {
            cityId: 76,
            cityName: '营口',
            citySpell: 'YINGKOU',
            cityFirstLetter: 'Y'
          },
          {
            cityId: 168,
            cityName: '枣庄',
            citySpell: 'ZAOZHUANG',
            cityFirstLetter: 'Z'
          },
          {
            cityId: 241,
            cityName: '张家界',
            citySpell: 'ZHANGJIAJIE',
            cityFirstLetter: 'Z'
          },
          {
            cityId: 78,
            cityName: '张家口',
            citySpell: 'ZHANGJIAKOU',
            cityFirstLetter: 'Z'
          },
          {
            cityId: 326,
            cityName: '张掖',
            citySpell: 'ZHANGYE',
            cityFirstLetter: 'Z'
          },
          {
            cityId: 142,
            cityName: '漳州',
            citySpell: 'ZHANGZHOU',
            cityFirstLetter: 'Z'
          }
        ]
        this.city.localCity = {
          cityId: 301,
          cityName: '保山',
          citySpell: 'BAOSHAN',
          cityFirstLetter: 'B'
        }
      },
      choiceCity: function () {
        this.city.isShow = true
      },
      close () {
        this.city.isShow = false
      },
      collection () {
        this.$router.push({
          path: '/collection'
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .per-header{
        height: 50px;
        border-bottom: 1px solid #d9d9d9;
        background-color: #fafafa;
        .fa-home{
            font-size: 26px;
            padding: 12px 10px;
            color: #9d9d9d;
        }
        .city-name{
            display: inline-block;
            position: absolute;
            top: 15px;
            font-size: 14px;
        }
        .arrow-icon{
            position: relative;
            left: 5px;
            top: 9px;

        }
        .arrow-icon:after {
            border: 5px solid transparent;
            border-left: 5px solid #999;
            width: 0;
            height: 0;
            position: absolute;
            content: ' ';
            transform:rsotate(90deg);
            -webkit-transform:rotate(90deg);
            -trident-transform:rotate(90deg);
            -gecko-transform:rotate(90deg);
        }
        .fa-mobile-phone{
            font-size: 26px;
            position: absolute;
            right: 45px;
            top: 12px;
            color: #9d9d9d;
        }
        .fa-bell-o{
            font-size: 18px;
            position: absolute;
            right: 15px;
            top: 16px;
            color: #9d9d9d;
        }
    }
    .per-info{
        padding: 15px;
        position: relative;
        .info-tit{
            font-size: 18px;
            display: inline-block;
            margin-bottom: 10px;
        }
        .info-p{
            font-size: 14px;
            line-height: 24px;
            .auth{
                font-size: 10px;
                background-color: #d9d9d9;
                padding: 3px;
                color: #999;
                margin-left: 5px;

            }
        }
        .set{
            padding: 8px 0;
            background-color: #e9e9e9;
            text-align: center;
            color: #999;
            margin: 15px 0;
        }
        .portrait{
            position: absolute;
            top: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            overflow: hidden;
            img{
                width: 100%;
            }
        }


    }
    .mine-list{
        padding: 0 10px;
        li{
            height:60px;
            line-height: 60px;
            border-top:1px solid #D9D9D9;
            position: relative;
            span{
                font-size: 14px;
                padding-left: 5px;
            }
            .icon{
                position: absolute;
                top: 20px;
                right: 10px;
                font-size: 22px;
                color: #9d9d9d;
            }

        }
    }
</style>
