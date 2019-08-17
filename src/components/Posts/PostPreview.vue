<template>
  <router-link :to="{name: loadedPost.postType + 'details', params: {id: loadedPost.id}}" class="post-preview">
    <v-card class="mx-auto" width="400" height="280">
      <v-img class="white--text" height="200px" :src="loadedPost.thumbnail"></v-img>
      <v-card-text>
        <span class="text--primary title">{{loadedPost.title}}</span>
        <div v-if="loadedPost.price" class="text--secondary">{{loadedPost.price | toEuro}} | {{loadedPost.location}} | {{loadedPost.propertyType}}</div>
      </v-card-text>
    </v-card>
  </router-link>
</template>

<script>
export default {
  name: "PostPreview",
  props: {
    loadedPost: {
      type: Object,
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
.title{
  font-weight: bold;
}
.title:hover {
  color: black;
}
</style>