<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav">
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
      </ul>
      <ul class="navbar-nav ml-auto">
        <template v-if="isAuthenticated">
          <b-nav-item-dropdown
            v-if="isAdmin"
            id="my-nav-dropdown"
            text="Admin"
            toggle-class="nav-link-custom"
            right
          >
            <b-dropdown-item>
              <router-link class="nav-link" :to="{path: '/newpost'}">Add New Post</router-link>
            </b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>
              <router-link class="nav-link" :to="{path: '/comments'}">Comments</router-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <router-link
            class="nav-link"
            active-class="active"
            :to="{path: '/'}"
            @click.native="logOut"
          >Log out</router-link>
        </template>
        <template v-else>
          <router-link class="nav-link" active-class="active" :to="{path: '/auth'}">Login/Sign Up</router-link>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "NavBar",
  data() {
    return {
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

<style>
.navbar{
  opacity: 0.8;
}
#navbarResponsive {
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
}
.dropdown-item:active {
  background-color: #f8f9fa !important;
}
</style>

