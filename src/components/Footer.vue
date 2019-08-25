<template>
  <div>
    <v-app>
      <v-footer color="light lighten-1" padless>
        <v-row class="footer-nav" justify="center" no-gutters>
          <router-link color="white" text rounded class="my-2" :to="{path: '/'}">Home</router-link>
          <router-link color="white" text rounded class="my-2" :to="{path: '/news'}">News</router-link>
          <router-link color="white" text rounded class="my-2" :to="{path: '/rentals'}">Rentals</router-link>
          <router-link color="white" text rounded class="my-2" :to="{path: '/sales'}">Sales</router-link>
          <router-link color="white" text rounded class="my-2" :to="{path: '/aboutUs'}">About Us</router-link>
          <router-link
            v-if="isAdmin"
            color="white"
            text
            rounded
            class="my-2"
            :to="{path: '/contact'}"
          >Contact</router-link>
          <v-col class="light lighten-2 py-4 text-center black--text copyright" cols="12">
            &copy;
            {{ new Date().getFullYear() }} —
            <strong>ttomov</strong>
          </v-col>
        </v-row>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'Footer',
  computed: {
    ...mapGetters(["isAdmin"])
  }
};
</script>

<style scoped>
.nav-link {
  padding: 0.25rem !important;
}
a {
  text-decoration: none !important;
  margin: 0 5px;
}
a:hover {
  color: #0056b3;
}
.footer-nav {
  font-size: 20px;
  line-height: 20px;
  font-weight: 700;
}
.copyright{
  font-size: 15px;
  line-height: 15px;
}
</style>

