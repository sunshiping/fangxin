<template>
    <div>
        <flexbox :gutter="0" wrap="wrap">
            <flexbox-item :span="1/2" v-for="item in list" :key="item.name">
                <div class="flex-demo">
                    <div class="picture">
                        <img :src="item.src">
                    </div>

                    <div class="desc">
                        <p class="house-desc">
                            <span>{{ item.name }}</span>
                        </p>
                        <span class="house-price">{{ item.price }}</span>
                        <span class="house-unit-price">{{ item.unitPrice }}</span>
                    </div>

                </div>
            </flexbox-item>

        </flexbox>

    </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'

  export default {
    name: 'hello',
    components: {
      Flexbox,
      FlexboxItem
    },
    props: {
      list: Array
    },
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .flex-demo{
        padding: 10px;
    }
    .picture{
        img{
            border :1px solid #ccc;
            width: 100%;
        }
    }
    .house-desc{
        font-size: 12px;
        color: #999;

    }
    .house-price{
        font-size: 14px;
        color: #ff0000;
        padding-right: 5px;
    }
    .house-unit-price{
        font-size: 12px;
        color: #999;
    }
</style>
