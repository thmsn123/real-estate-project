<template>
  <b-navbar toggleable="lg" class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item>
          <router-link class="nav-link" active-class="active" :to="{path: '/'}" exact>Startseite</router-link>
        </b-nav-item>
        <!-- <b-nav-item>
          <router-link class="nav-link" active-class="active" :to="{path: '/news'}">Allgemeines</router-link>
        </b-nav-item> -->
        <b-nav-item>
          <router-link class="nav-link" active-class="active" :to="{path: '/rentals'}">Zu mieten</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="nav-link" active-class="active" :to="{path: '/sales'}">Zu kaufen</router-link>
        </b-nav-item>
        <b-nav-item-dropdown id="my-nav-dropdown" text="Gut zu wissen" class="nav-link" right>
          <b-dropdown-item>
            <router-link class="nav-link" :to="{path: '/bgnews'}">Allgemeines zu Bulgarien</router-link>
          </b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>
            <router-link class="nav-link" :to="{path: '/rentalscost'}">Kosten für eine Mietwohnung</router-link>
          </b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>
            <router-link class="nav-link" :to="{path: '/salescost'}">Kosten für ein Haus in Bulgarien</router-link>
          </b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>
            <router-link
              class="nav-link"
              :to="{path: '/expenses'}"
            >Taxipreise, Kosten für Lebensmittel</router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item>
          <router-link class="nav-link" active-class="active" :to="{path: '/aboutus'}">Über uns</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="nav-link" active-class="active" to="/contact">Kontakt</router-link>
        </b-nav-item>
        <b-nav-item-dropdown
          v-if="isAdmin && isAuthenticated"
          id="my-nav-dropdown"
          text="Admin"
          class="nav-link"
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
        <b-nav-item class="nav-link" v-if="isAuthenticated" @click="logOutUser">Log Out</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <img :src="logo" alt="logo" height="100" width="160" />
        <!-- <template v-else>
          <router-link class="nav-link" active-class="active" :to="{path: '/auth'}">Login/Sign Up</router-link>
        </template>-->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import logo from "../assets/logo.png";

export default {
  name: "NavBar",
  data() {
    return {
      imgProps: {
        height: 200
      },
      logo: logo
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated", "isAdmin"])
  },
  methods: {
    ...mapActions(["logOut"]),
    logOutUser() {
      this.logOut();
      //this is used in order to set bootstrap active class in home page only;
      this.$router.push("/");
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

