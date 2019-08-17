<template>
  <div>
    <filters :loadedPosts="loadedPosts" @filtered-data="filterData"></filters>
    <section class="post-list">
      <post-preview
        v-for="(post, index) in loadedPosts"
        :key="post.id"
        :loadedPost="loadedPosts[index]"
      ></post-preview>
    </section>
  </div>
</template>

<script>
import Filters from "../../components/Filters/Filters";
import PostPreview from "./PostPreview";

export default {
  name: "PostList",
  components: {
    PostPreview,
    Filters
  },
  props: {
    loadedPosts: {
      type: Array,
      required: true
    }
  },
  methods: {
    filterData(param) {
      this.loadedPosts = param;
    }
  }
};
</script>


<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>