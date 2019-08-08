<template>
  <div>
    <div>
      <b-img-lazy :src="backgroundImage" v-bind="imgProps" fluid-grow alt="Responsive image"></b-img-lazy>
    </div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <!-- <b-navbar-brand href="#">RealEstate</b-navbar-brand> -->

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <router-link class="nav-link" active-class="active" to="/">Home</router-link>
        <router-link class="nav-link" active-class="active" to="/news">News</router-link>
        <router-link class="nav-link" active-class="active" to="/rentals">Rentals</router-link>
        <router-link class="nav-link" active-class="active" to="/forSale">For Sale</router-link>
        <router-link class="nav-link" active-class="active" to="/aboutUs">About Us</router-link>
        <router-link class="nav-link" active-class="active" to="/contact">Contact</router-link>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form> -->

          <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">BG</b-dropdown-item>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">DE</b-dropdown-item>
          </b-nav-item-dropdown> -->

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item @click="$router.push('/auth')">Login</b-dropdown-item>
            <b-dropdown-item @click="$router.push('/admin')">Admin panel</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import backgroundImage from '../assets/background.jpg'
export default {
  name: "NavBar",
  data() {
      return {
          backgroundImage: backgroundImage,
          imgProps: {
              height: 200
          }

      }
  }
}; 
</script>

<style>
</style>
