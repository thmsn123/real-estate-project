<template>
  <router-link :to="{name: this.postType + 'details', params: {id: this.id}}" class="post-preview">
    <v-card class="mx-auto" max-width="400">
      <v-img class="white--text" height="200px" :src="thumbnail"></v-img>
      <v-card-text>
        <span class="text--primary title">{{title}}</span>
      </v-card-text>
    </v-card>
  </router-link>
</template>

<script>
export default {
  name: "PostPreview",
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    preview: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    postType: {
      type: String,
      required: true
    }
  }
};
</script>


<style scoped>
.post-preview {
  margin: 10px;
}
a:hover {
  text-decoration: none;
}
.title:hover {
  color: black;
}
</style>