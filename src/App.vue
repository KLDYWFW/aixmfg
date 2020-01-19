<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <heade></heade>
    <tabbar></tabbar>
    <router-view/>
  </div>
</template>

<script>
  import './assets/js/remStyle.js';
  import Heade from './components/Header.vue'
  import Tabbar from './components/Tabbar.vue'
export default {
  name: 'App',
  components:{
    Heade,
    Tabbar
  }
}
</script>

<style>
	@import './assets/css/reset.css';
#app {

}
</style>
