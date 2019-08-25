<template>
  <v-card class="card-wrapper">
    <div class="text-center container my-3 news">
      <div class="posts">
        <post-list :loadedPosts="loadedNews"></post-list>
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
.card-wrapper{
  margin-top: 100px;
  margin-bottom: 20px;
}
</style>