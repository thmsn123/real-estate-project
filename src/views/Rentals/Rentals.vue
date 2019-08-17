<template>
  <div class="text-center">
    <div class="posts">
      <post-list :loadedPosts="loadedRentals"></post-list>
    </div>
  </div>
</template>

<script>
import PostList from "../../components/Posts/PostList";
import { mapGetters } from "vuex";

export default {
  components: {
    PostList
  },
  computed: {
    ...mapGetters(["loadedRentals"])
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