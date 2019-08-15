<template>
  <div class="text-center">
    <filters></filters>
    <div class="posts">
      <post-list :loadedPosts="loadedRentals"></post-list>
    </div>
  </div>
</template>

<script>
import Filters from "../../components/Filters/Filters"
import PostList from "../../components/Posts/PostList";
import { mapGetters } from "vuex";

export default {
  components: {
    PostList,
    Filters
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