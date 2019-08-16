<template>
  <div>
    <v-footer dark padless>
      <v-card flat tile class="footer indigo lighten-1 white--text text-left">
        <v-card-text class="flex-container">
          <div>
            <router-link class="nav-link" active-class="active" to="/">Home</router-link>
            <router-link class="nav-link" active-class="active" to="/news">News</router-link>
            <router-link class="nav-link" active-class="active" to="/rentals">Rentals</router-link>
            <router-link class="nav-link" active-class="active" to="/sales">Sales</router-link>
            <router-link class="nav-link" active-class="active" to="/aboutUs">About Us</router-link>
            <router-link class="nav-link" active-class="active" to="/contact">Contact</router-link>
          </div>
          <div class="footer-text">
            <v-card-text
              class="white--text"
            >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, in cum. Aliquid ratione hic maxime maiores velit architecto, nihil non qui perferendis, voluptas excepturi. Dolore dignissimos magnam quod maxime praesentium.
            </v-card-text>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text text-center">
          &copy;
          {{ new Date().getFullYear() }} —
          <strong>ttm2</strong> All rights reserved | Terms of Use | Privacy Policy
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "NavFooter",
  data() {
    return {
      icons: [
        "fab fa-facebook",
        "fab fa-twitter",
        "fab fa-google-plus",
        "fab fa-linkedin",
        "fab fa-instagram"
      ]
    };
  }
};
</script>

<style scoped>
.footer {
  width: 100%;
}
.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.footer-text {
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-link {
  padding: 0.25rem !important;
}
a {
  color: lightgrey;
}
a:hover {
  color: white;
}
</style>

