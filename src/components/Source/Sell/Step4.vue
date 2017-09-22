<template>
    <div class="rent-content">
        <x-header></x-header>
        <p class="title">您期望的面积及期望售价？</p>
        <div>
            <group label-width="5em" >
                <x-input class="require-icon" title="面积"  required ></x-input>
                <x-input class="require-icon" title="售价"  required ></x-input>

                <x-input
                        title="手机号"
                        name="mobile"
                        keyboard="number"
                        is-type="china-mobile"
                        ref="input6"
                        required
                ></x-input>

            </group>
            <div class="footer"><span class="weui-btn" @click='link'>下一步</span></div>
        </div>
    </div>
</template>
<script>
  import {Group, XInput, XHeader} from 'vux'
  export default {
    components: {
      Group,
      XInput,
      XHeader
    },
    data () {
      return {
        unitName: '万元'
      }
    },
    methods: {
      link () {
        var a = this.$refs.input6.valid
        console.log(this.$refs)
        console.log(a)
        this.$router.push({
          path: '/step5'
        })
      }
    }
  }

</script>
