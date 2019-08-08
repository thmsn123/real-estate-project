<template>
  <div class="text-center">
    <h1>Rentals page!</h1>
    <div class="posts">
      <post-list :loadedPosts="loadedRentals"></post-list>
    </div>
  </div>
</template>

<script>
import PostList from "../../components/Posts/PostList";

export default {
  components: {
    PostList
  },
  computed: {
    loadedRentals() {
      return this.$store.getters.loadedRentals;
    }
  },
  created() {
    this.$store.dispatch('getRentals');
  }
};
</script>

<style scoped>
.posts {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>