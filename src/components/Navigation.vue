<template>
  <div>
    <div class="background-img">
      <b-img-lazy :src="backgroundImage" v-bind="imgProps" fluid-grow alt="Responsive image"></b-img-lazy>
    </div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <router-link class="nav-link" active-class="active" :to="{path: '/'}">Home</router-link>
        <router-link class="nav-link" active-class="active" :to="{path: '/news'}">News</router-link>
        <router-link class="nav-link" active-class="active" :to="{path: '/rentals'}">Rentals</router-link>
        <router-link class="nav-link" active-class="active" :to="{path: '/sales'}">Sales</router-link>
        <router-link class="nav-link" active-class="active" :to="{path: '/aboutUs'}">About Us</router-link>
        <router-link
          v-if="isAuthenticated"
          class="nav-link"
          active-class="active"
          to="/contact"
        >Contact</router-link>
        <b-navbar-nav class="ml-auto">
          <template v-if="isAuthenticated">
            <router-link
              v-if="isAdmin"
              class="nav-link"
              active-class="active"
              :to="{path: '/admin'}"
            >Admin</router-link>
            <a class="nav-link" active-class="active" href="/" @click="logOut">Log out</a>
          </template>
          <template v-else>
            <router-link class="nav-link" active-class="active" :to="{path: '/auth'}">Login/Sign Up</router-link>
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
    ...mapGetters(["isAuthenticated", "isAdmin"])
  },
  methods: {
    ...mapActions(["logOut"])
  }
};
</script>

<style scoped>
.background-img {
  overflow: hidden;
  max-height: 30vh;
}
</style>
