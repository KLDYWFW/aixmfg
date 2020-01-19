<template>
  <div class="tabbar">
   <van-tabbar route replace fixed active-color="#FFD600">
     <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
     <van-tabbar-item icon="logistics" to="/supermarket">闪送超市</van-tabbar-item>
     <van-tabbar-item icon="sign" to="/rserve">新鲜预定</van-tabbar-item>
     <van-tabbar-item icon="shopping-cart-o" to="/car">购物车</van-tabbar-item>
     <van-tabbar-item icon="manager-o" to="/mine">我的</van-tabbar-item>
   </van-tabbar>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Tabbar,TabbarItem  } from 'vant'

  Vue.use(Tabbar);
  Vue.use(TabbarItem);
  export default{
    components: {

    }
  }
</script>

<style scoped="scoped" lang="less">
  @aaa: ~'>>>';
  .van-tabbar{
    height: 1rem;
    @{aaa} .van-tabbar-item__icon{
      font-size: .4rem;
    }
    @{aaa} .van-tabbar-item__text{
      font-size: .22rem;
    }
  }

</style>
