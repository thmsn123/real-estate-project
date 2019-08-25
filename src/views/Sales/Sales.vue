<template>
  <v-card class="card-wrapper">
    <div class="container text-center my-3">
      <div class="posts">
        <post-list :loadedPosts="loadedSales"></post-list>
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
.container {
  min-height: 450px;
}
.card-wrapper{
  margin-top: 100px;
  margin-bottom: 20px;
}
</style>