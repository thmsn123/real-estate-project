<template>
  <b-navbar toggleable="lg" class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item>
          <router-link class="nav-link" active-class="active" :to="{path: '/'}" exact>Home</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="nav-link" active-class="active" :to="{path: '/news'}">News</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="nav-link" active-class="active" :to="{path: '/rentals'}">Rentals</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="nav-link" active-class="active" :to="{path: '/sales'}">Sales</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="nav-link" active-class="active" :to="{path: '/aboutUs'}">About Us</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link
            v-if="isAuthenticated"
            class="nav-link"
            active-class="active"
            to="/contact"
          >Contact</router-link>
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
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
          <b-nav-item @click="logOutUser">Log Out</b-nav-item>
        </template>
        <template v-else>
          <router-link class="nav-link" active-class="active" :to="{path: '/auth'}">Login/Sign Up</router-link>
        </template>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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
    ...mapActions(["logOut"]),
    logOutUser(){
      this.logOut();
      //this is used in order to set bootstrap active class in home page only;
      this.$router.push('/');
    }
  }
};
</script>

<style>
.navbar {
  opacity: 0.8;
}
.navbar-collapse.collapse {
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
}
.dropdown-item:active {
  background-color: #f8f9fa !important;
}
</style>

