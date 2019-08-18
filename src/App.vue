<template>
  <div id="app">
    <header class="header">
      <nav-bar></nav-bar>
    </header>
    <div id="main">
      <router-view />
      <sidebar class="sidebar"></sidebar>
    </div>
    <nav-footer class="nav-footer"></nav-footer>
  </div>
</template>

<script>
import NavBar from "./components/Navigation";
import NavFooter from "./components/Footer";
import Sidebar from "./components/Sidebar";

export default {
  components: {
    NavBar,
    Sidebar,
    NavFooter
  },
  created() {
    this.$store.dispatch("getPosts", "news");
    this.$store.dispatch("getPosts", "sales");
    this.$store.dispatch("getPosts", "rentals");
    this.$store.dispatch("getComments");
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: 'Roboto', sans-serif !important;
}
#main {
  display: flex;
  min-height: calc(100vh - 40vh);
}
#main > .sidebar {
  flex: 0 0 9vw;
  background-color: #f8f9fa !important;
}
#main > .sidebar {
  order: -1;
}
.nav-footer div {
  width: 100%;
}
</style>
