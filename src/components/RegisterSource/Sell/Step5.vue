<template>
    <div class="personal rent-content">
        <x-header></x-header>
        <group title="您的个人信息？">
            <x-input
                    title="手机号"
                    name="mobile"
                    placeholder="请输入手机号码"
                    keyboard="number"
                    is-type="china-mobile"
                    v-model="info.tel"
                    ref="inputTel"
                    required
                    @on-change="change"
            ></x-input>

            <x-input title="验证码" class="weui-vcode require-icon" placeholder="请输入验证码" v-model="info.code">
                <x-button class="get-code" slot="right" type="primary" mini @click.native="getCode" v-show="showCode" :disabled="isDisable">
                    <span >获取验证码</span>
                </x-button>

                <x-button slot="right" plain type="primary" mini  v-show="showCountdown">
                    <span v-show="showCountdown">
                        重新获取(<countdown slot="value" v-model="time2" :start="start" @on-finish="finish" ></countdown>)
                    </span>
                </x-button>


            </x-input>
            <x-input title="联系人" name="username" placeholder="请输入业主姓名" is-type="china-name" v-model="info.contactName"></x-input>
            <x-input title="标 题" class="prompt-title" :max="max" placeholder="请输入您的展示标题" @on-change="change" v-model="info.showTitle" ></x-input>
        </group>
        <p class="prompt">还可以输入{{count}}字</p>
        <p class="tip">注：您的标题将作为列表页面的展示内容</p>

        <!--<p class="check"><input v-model="isChecked" type="checkbox" value=true>我已阅读并且同意<a href="#">《房屋委托协议》</a></p>-->

        <check-icon :value.sync="isGreen" class="check">我已阅读并且同意<a href="#">《房屋委托协议》</a>
            ({{ isGreen }})
        </check-icon>

        <div class="btns">
            <flexbox>
                <flexbox-item>
                    <x-button type="primary" class="btn1" @click.native="entrust1" :disabled="!isGreen">委托经纪人</x-button>
                </flexbox-item>
                <flexbox-item>
                    <x-button plain type="primary" class="btn2" @click.native="entrust2" :disabled="!isGreen">委托中介公司</x-button>
                </flexbox-item>
            </flexbox>
        </div>

        <!--{{ isChecked}} {{ info }}-->





    </div>
</template>

<script>
  import { GroupTitle, Group, Cell, XInput, XButton, Checklist, Flexbox, FlexboxItem, CheckIcon, Countdown, XSwitch, XHeader } from 'vux'
  export default {
    name: 'hello',
    components: {
      Group,
      GroupTitle,
      Cell,
      XInput,
      XButton,
      Checklist,
      Flexbox,
      FlexboxItem,
      CheckIcon,
      Countdown,
      XSwitch,
      XHeader
    },
    data () {
      return {
        isChecked: false,
        info: {
          tel: '',
          contactName: '',
          showTitle: '',
          code: ''
        },
        max: 12,
        isGreen: false,
        time2: 5,
        start: false,
        isDisable: true,
        showCode: true,
        showCountdown: false,
        valid1: false
      }
    },
    computed: {
      count () {
        let len = 0
        if (this.info.showTitle) {
          len = this.max - this.info.showTitle.replace(/\n/g, 'aa').length
        }
        return len
      }
    },
    methods: {
      finish (index) {
        this.start = false
//        this.time = 20
        this.showCode = true
        this.showCountdown = false
      },
      getCode () {
        this.showCode = false
        this.showCountdown = true
        this.start = true
      },
      change (val) {
        this.valid1 = this.$refs.inputTel.valid
        if (this.valid1 === true) {
          this.isDisable = false
        } else {
          this.isDisable = true
        }
      },
      entrust1 () {
        this.$router.push({
          path: '/broker'
        })
      },
      entrust2 () {
        this.$router.push({
          path: '/medi'
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

    .personal{
        background-color: #fff;
        height:100%;
        .weui-cell:before{
            content: " ";
            position: absolute;
            left: 0;
            top: 0;
            right: 15px;
            height: 1px;
            border-top: 1px solid #D9D9D9;
            color: #D9D9D9;
            -webkit-transform-origin: 0 0;
            transform-origin: 0 0;
            -webkit-transform: scaleY(0.5);
            transform: scaleY(0.5);
            left: 15px;
        }
        .weui-icon-success{
            font-size: 20px !important;
        }
        .weui-btn + .weui-btn{
            margin-top: 0;
        }
        .get-code{
            border: 1px solid #1aad19;
        }

    }

    .tip{
        color: #ff4949;
        font-size: 12px;
        padding-left: 30px;
        padding-top: 20px;
    }
    .check{
        font-size: 14px;
        padding-left: 15px;
        padding-top: 20px;
        input{
            margin-right: 5px;
        }
    }

    .btns {
        margin: 40px 10px;
        .btn1{
            /*background-color: #999;*/
            text-align: center;
            color: #fff;
            font-size: 14px;
            height: 40px;
            line-height: 40px;
        }
        .btn2{
            /*border:1px solid #999;*/
            text-align: center;
            color: #999;
            font-size: 14px;
            height: 40px;
            line-height: 40px;
            /*.weui-btn_disabled.weui-btn_primary{*/
                /*background-color: #fafafa;*/
                /*border: 1px solid #fafafa;*/
            /*}*/
        }

    }

</style>
