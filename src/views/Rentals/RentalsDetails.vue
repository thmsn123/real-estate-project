<template>
  <div class="single-post-page container my-3" v-if="currentRental">
    <post-details :currentPost="currentRental"></post-details>
  </div>
</template>

<script>
import PostDetails from "../../components/Posts/PostDetails";
import { mapGetters } from "vuex";

export default {
  name: 'RentalsDetails',
  components: {
    PostDetails
  },
  data() {
    return {
      index: null
    };
  },
  computed: {
    ...mapGetters(["currentPost"]),
    currentRental() {
      return this.currentPost(this.$route);
    }
  }
};
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}
</style>

