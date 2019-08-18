<template>
  <div class="single-post-page container" v-if="currentRental">
    <post-details :currentPost="currentRental"></post-details>
  </div>
</template>

<script>
import PostDetails from "../../components/Posts/PostDetails";
import { mapGetters } from "vuex";

export default {
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

