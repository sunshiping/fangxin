<template>
    <div class="personal">
        <group title="您的个人信息">
            <x-input title="手机号" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" v-model="info.tel"></x-input>

            <x-input title="验证码" class="weui-vcode require-icon" placeholder="请输入验证码" v-model="info.code">
                <x-button slot="right" type="primary" mini>获取验证码</x-button>
            </x-input>
            <x-input title="联系人" name="username" placeholder="请输入业主姓名" is-type="china-name" v-model="info.contactName"></x-input>
            <x-input title="标 题" placeholder="请输入您的展示标题" v-model="info.showTitle" ></x-input>

            <p class="tip">注：您的标题将作为列表页面的展示内容</p>

            <p class="check"><input v-model="isChecked" type="checkbox" value=true>我已阅读并且同意<a href="#">《房屋委托协议》</a></p>

            <div class="btns">
                <flexbox :gutter="0">
                    <flexbox-item :span="1/2">
                        <div class="btn1">委托经纪人</div>
                    </flexbox-item>
                    <flexbox-item :span="1/2">
                        <div class="btn2">委托中介公司</div>
                    </flexbox-item>
                </flexbox>
            </div>

            <!--{{ isChecked}} {{ info }}-->









        </group>
    </div>
</template>

<script>
  import { GroupTitle, Group, Cell, XInput, XButton, Checklist, Flexbox, FlexboxItem } from 'vux'
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
      FlexboxItem
    },
    data () {
      return {
        isChecked: false,
        info: {
          tel: '18317297697',
          contactName: '',
          showTitle: '',
          code: ''
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

    .personal{
        background-color: #fff;
        .weui-cells__title{
            font-size: 18px !important;
        }
    }
    .tip{
        color: #ff4949;
        font-size: 12px;
        padding-left: 15px;
    }
    .check{
        font-size: 14px;
        padding-left: 15px;
        padding-top: 25px;
    }

    .btns {
        padding: 30px 10px;
        width: 96%;
        .btn1 {
            background-color: #999;
            text-align: center;
            color: #fff;
            font-size: 14px;
            height: 40px;
            line-height: 40px;
            width: 93%;
            margin: 0 auto;
            border-radius: 5px;
        }
        .btn2{
            border:1px solid #999;
            text-align: center;
            color: #999;
            font-size: 14px;
            height: 40px;
            line-height: 40px;
            width: 93%;
            margin: 0 auto;
            border-radius: 5px;
        }
    }

</style>
