<template>
  <div class="text-center">
    <div class="posts">
      <post-list :loadedPosts="loadedNews"></post-list>
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
    loadedNews() {
      return this.$store.getters.loadedNews;
    }
  },
  created() {
    this.$store.dispatch('getNews');
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