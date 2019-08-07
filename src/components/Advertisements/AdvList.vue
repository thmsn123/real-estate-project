<template>
  <section class="advertisement-list">
    <advertisement-preview
      v-for="post in loadedPosts"
      :key="post.id"
      :id="post.id"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :preview="post.preview"
      :postType="post.postType"
    >
    </advertisement-preview>
  </section>
</template>

<script>
import AdvertisementPreview from './AdvPreview'

export default {
  name: "advertisementList",
  components: {
      AdvertisementPreview
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
.advertisement-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>