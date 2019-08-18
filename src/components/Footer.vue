<template>
  <div id="app">
    <v-app id="inspire">
      <v-footer color="light lighten-1" padless>
        <v-row justify="center" no-gutters>
          <router-link color="white" text rounded class="my-2" to="/">Home</router-link>
          <router-link color="white" text rounded class="my-2" to="/news">News</router-link>
          <router-link color="white" text rounded class="my-2" to="/rentals">Rentals</router-link>
          <router-link color="white" text rounded class="my-2" to="/sales">Sales</router-link>
          <router-link color="white" text rounded class="my-2" to="/aboutUs">About Us</router-link>
          <router-link color="white" text rounded class="my-2" to="/contact">Contact</router-link>
          <v-col class="light lighten-2 py-4 text-center black--text" cols="12">
            &copy;
            {{ new Date().getFullYear() }} —
            <strong>ttm2</strong>
            All rights reserved | Terms of Use | Privacy Policy
          </v-col>
        </v-row>
      </v-footer>
    </v-app>
  </div>
</template>

<style scoped>
.nav-link {
  padding: 0.25rem !important;
}
a {
  text-decoration: none !important;
  margin: 0 5px;
}
a:hover {
  color: #0056b3;;
}
</style>

