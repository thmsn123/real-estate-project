<template>
  <div>
    <div>
      <b-img-lazy :src="backgroundImage" v-bind="imgProps" fluid-grow alt="Responsive image"></b-img-lazy>
    </div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <router-link class="nav-link" active-class="active" to="/">Home</router-link>
        <router-link class="nav-link" active-class="active" to="/news">News</router-link>
        <router-link class="nav-link" active-class="active" to="/rentals">Rentals</router-link>
        <router-link class="nav-link" active-class="active" to="/sales">Sales</router-link>
        <router-link class="nav-link" active-class="active" to="/aboutUs">About Us</router-link>
        <router-link class="nav-link" active-class="active" to="/contact">Contact</router-link>
        <b-navbar-nav class="ml-auto">
          <template v-if="isAuthenticated">
            <router-link class="nav-link" active-class="active" to="/admin">Admin</router-link>
            <a class="nav-link" active-class="active" href="/" @click="logOut">Log out</a>
          </template>
          <template v-else>
            <router-link class="nav-link" active-class="active" to="/auth">Login</router-link>
          </template>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import backgroundImage from "../assets/background.jpg";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "NavBar",
  data() {
    return {
      backgroundImage: backgroundImage,
      imgProps: {
        height: 200
      }
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated"])
  },
  methods: {
    ...mapActions(['logOut'])
  }
};
</script>

<style>
</style>
