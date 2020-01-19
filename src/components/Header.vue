<template>
  <div class="header">
    <van-nav-bar title="爱鲜蜂" left-text="返回" left-arrow fixed @click-left="gotoHome">
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { NavBar } from 'vant';

  Vue.use(NavBar);
  export default{
    methods:{
      gotoHome(){
        this.$router.push('/home')
      }
    }
  }
</script>

<style scoped="scoped" lang="less">
  .van-nav-bar,.header{
    height: .92rem;
    background: #000;
    .van-nav-bar__text,.van-icon,.van-nav-bar__title{
      color:#fff;
      line-height: .92rem;
    }

  }
</style>
