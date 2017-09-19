<template>
    <div class="login-content">
        <div class="login-box">
            <img class="login" src="/static/images/logo.png" alt="login">
        </div>
        <p class="name"><x-input title="账号:" name="mobile" placeholder="请输入手机号" keyboard="number" is-type="china-mobile" ></x-input></p>
        <p class="password"><x-input title="密码:" type="password" placeholder="请输入密码"></x-input></p>
        <div class="btn-box">
            <group>
                <x-button :text="text" @click.native="save" type="primary"></x-button>
                <!--<x-button type="primary">登陆</x-button>-->
            </group>
            <p class="find-password">忘记密码？</p>
        </div>
    </div>
</template>

<script>
  import { Loading, XInput, XButton, Divider, Group, TransferDomDirective as TransferDom } from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Loading,
      XInput,
      XButton,
      Divider,
      Group
    },
    data () {
      return {
        loadingShow: false,
        text: '登陆'
      }
    },
    methods: {
      save () {
//        this.$vux.loading.show({
//          text: '登陆中...'
//        })
//        setTimeout(() => {
//          this.$vux.loading.hide()
//        }, 2000)
        this.$router.push({
          path: '/home'
        })
      }
    }
  }
</script>
<!--<style scoped>-->
    <!--.login .login-box{-->
        <!--padding-top: 50px;-->
        <!--padding-bottom: 16px;-->
        <!--text-align: center;-->
    <!--}-->
    <!--.login .login-box .login{-->
       <!--width: 90px;-->
        <!--height: 90px;-->
    <!--}-->
    <!--.login .btn-box{-->
        <!--padding: 10px 20px 0 20px;-->
    <!--}-->
    <!--.red {-->
        <!--color: red;-->
    <!--}-->
    <!--.green {-->
        <!--color: green;-->
    <!--}-->
<!--</style>-->
