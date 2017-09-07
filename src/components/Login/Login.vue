<template>
    <div class="login">
        <div class="login-box">
            <img class="login" src="/static/login/logo.png" alt="login">
        </div>
        <group>
            <x-input title="账号:" name="mobile" placeholder="请输入手机号" keyboard="number" is-type="china-mobile"></x-input>
        </group>
        <group>
            <!--<x-input title="密码" type="password" placeholder="必填" v-model="value4"></x-input>-->
            <x-input title="密码:" type="password" placeholder="请输入密码"></x-input>
        </group>
        <div class="btn-box" style="padding: 0 20px;">
            <group>
                <x-button :text="text" :disabled="isActive" @click.native="save" type="primary"></x-button>
                <!--<x-button type="primary">登陆</x-button>-->
            </group>
            <divider>忘记密码？</divider>
        </div>
    </div>
</template>

<script>
  import { XInput, Group, XButton, Cell, Divider } from 'vux'

  export default {
    components: {
      XInput,
      XButton,
      Group,
      Cell,
      Divider
    },
    data () {
      return {
        text: '登录',
        isActive: false
      }
    },
    methods: {
      save () {
        this.text = '登陆中...'
        this.isActive = true
      }
    }
  }
</script>
<style scoped>
    .login .login-box{
        padding-top: 50px;
        text-align: center;
    }
    .login .login-box .login{
       width: 80px;
        height: 80px;
    }
    .login .btn-box{
        padding: 0 20px;
    }
    .red {
        color: red;
    }
    .green {
        color: green;
    }
</style>
