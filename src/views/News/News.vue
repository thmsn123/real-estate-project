<template>
  <div class="text-center container my-3">
    <div class="posts">
      <post-list :loadedPosts="loadedNews"></post-list>
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
    ...mapGetters(["loadedNews"])
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