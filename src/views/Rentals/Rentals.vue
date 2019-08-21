<template>
  <v-card>
    <div class="container text-center my-3">
      <div class="posts">
        <post-list :loadedPosts="loadedRentals"></post-list>
      </div>
    </div>
  </v-card>
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
.container {
  min-height: 450px;
}
</style>