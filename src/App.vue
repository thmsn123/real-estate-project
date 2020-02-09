<template>
  <div id="app">
    <div v-if="!isMobile">
      <nprogress-container></nprogress-container>

      <nav-bar></nav-bar>

      <div id="main">
        <!-- Main Content -->
        <div
          class="main-content"
          :style="{ 'background-image': 'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(' + backgroundImage + ')' }"
        >
          <div class="container h-100">
            <div class="row h-100 align-items-center">
              <div class="col-12 text-center page-content">
                <router-view></router-view>
                <!-- <transition name="bounce">
                </transition>-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer Content -->
      <footer>
        <nav-footer></nav-footer>
      </footer>
    </div>
    <div v-else class="mobile">
      <img class="under-construction" :src="underConstruction"/>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/Navigation";
import NavFooter from "./components/Footer";
import backgroundImage from "./assets/background.jpg";
import NprogressContainer from "vue-nprogress/src/NprogressContainer";
import { isMobile } from "mobile-device-detect";
import underConstruction from "../src/assets/under_construction.png";

export default {
  components: {
    NavBar,
    NavFooter,
    NprogressContainer
  },
  created() {
    this.$store.dispatch("getPosts", "news");
    this.$store.dispatch("getPosts", "sales");
    this.$store.dispatch("getPosts", "rentals");
    this.$store.dispatch("getComments");
    console.log("tt", isMobile);
  },
  data() {
    return {
      isMobile, 
      underConstruction,
      backgroundImage: backgroundImage
    };
  }
};
</script>

<style>
body {
  font-size: 16px;
}
.main-content {
  height: 100vh;
  min-height: 500px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.page-content {
  overflow-y: auto;
  max-height: 100vh;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}
body::-webkit-scrollbar,
.page-content::-webkit-scrollbar {
  /* WebKit */
  width: 0;
  height: 0;
}
.btn.btn-primary {
  background-image: linear-gradient(
    20deg,
    rgba(87, 102, 171, 1) 0%,
    rgba(94, 182, 250, 1) 80%
  );
  border-radius: 25px;
  border: 0px;
  line-height: 16px;
  color: #fff;
  size: 15px;
  font-weight: 600;
  padding: 15px 12px;
  min-width: 100px;
}

.btn.btn-primary:hover {
  background-image: linear-gradient(to right, #4a96f4 0%, #58cafc 80%);
  background-size: 150% 150%;
  transition: all 0.4s ease;
  -webkit-animation: gradient 2s ease infinite;
  -moz-animation: gradient 2s ease infinite;
  animation: gradient 2s ease infinite;
  box-shadow: 2px 4px 9px 0 #1d1d1da3;
}

@keyframes gradient {
  0% {
    background-position: 3% 50%;
  }
  50% {
    background-position: 97% 50%;
  }
  100% {
    background-position: 3% 50%;
  }
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.nprogress-container {
  height: 2px;
  background: black;
}

.v-application--wrap {
  min-height: 0px !important;
}

.mobile {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.under-construction {
  height: 300px;
  width: 300px;
}
</style>
