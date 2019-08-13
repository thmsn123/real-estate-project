<template>
  <div class="text-center">
    <h1>This is For Sale page!</h1>
    <div class="posts">
      <post-list :loadedPosts="loadedSales"></post-list>
    </div>
  </div>
</template>

<script>
import PostList from "../../components/Posts/PostList.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    PostList
  },
  computed: {
    ...mapGetters(["loadedSales"])
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