<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view />
    <!-- <nav-footer></nav-footer> -->
  </div>
</template>

<script>
import NavBar from './components/Navigation'
import NavFooter from './components/Footer'

export default {
  components: {
    NavBar,
    NavFooter
  }
}
</script>

<style>

</style>
