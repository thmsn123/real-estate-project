<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view class="view"/>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavBar from './components/Navigation'
import NavFooter from './components/Footer'

export default {
  components: {
    NavBar,
    NavFooter
  },
  created() {
    this.$store.dispatch('getPosts', 'news');
    this.$store.dispatch('getPosts', 'sales');
    this.$store.dispatch('getPosts', 'rentals');
    this.$store.dispatch('getComments');
  }
}
</script>

<style>
  .view{
    min-height: 500px;
  }
</style>
