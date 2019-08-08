<template>
  <section class="post-list">
    <post-preview
      v-for="post in loadedPosts"
      :key="post.id"
      :id="post.id"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :preview="post.preview"
      :postType="post.postType"
    >
    </post-preview>
  </section>
</template>

<script>
import PostPreview from './PostPreview'

export default {
  name: "PostList",
  components: {
      PostPreview
  },
  props: {
    loadedPosts: {
      type: Array,
      required: true
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