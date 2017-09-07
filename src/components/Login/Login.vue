<template>
    <div class="login">
        <div class="login-box">
            <img class="login" src="/static/login/logo.png" alt="login">
        </div>
        <group>
            <x-input title="账号:" name="mobile" placeholder="请输入手机号" keyboard="number" is-type="china-mobile" placeholder-align="right"></x-input>
        </group>
        <group>
            <!--<x-input title="密码" type="password" placeholder="必填" v-model="value4"></x-input>-->
            <x-input title="密码:" type="password" placeholder="请输入密码" placeholder-align="right"></x-input>
        </group>
        <div class="btn-box">
            <group>
                <x-button :text="text" @click.native="save" type="primary"></x-button>
                <!--<x-button type="primary">登陆</x-button>-->
            </group>
            <divider>忘记密码？</divider>
        </div>
    </div>
</template>

<script>
  import { Loading, XInput, Group, XButton, Cell, Divider, TransferDomDirective as TransferDom } from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Loading,
      XInput,
      XButton,
      Group,
      Cell,
      Divider
    },
    data () {
      return {
        loadingShow: false,
        text: '登陆'
      }
    },
    methods: {
      save () {
        this.$vux.loading.show({
          text: '登陆中...'
        })
        setTimeout(() => {
          this.$vux.loading.hide()
        }, 2000)
      }
    }
  }
</script>
<style scoped>
    .login .login-box{
        padding-top: 50px;
        padding-bottom: 16px;
        text-align: center;
    }
    .login .login-box .login{
       width: 90px;
        height: 90px;
    }
    .login .btn-box{
        padding: 10px 20px 0 20px;
    }
    .red {
        color: red;
    }
    .green {
        color: green;
    }
</style>
