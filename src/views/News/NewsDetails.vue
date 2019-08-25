<template>
  <v-card>
    <router-link :to="{path: '/news'}">
      <v-btn medium dark absolute top left>Back</v-btn>
    </router-link>
    <div class="single-post-page container my-3" v-if="currentNews">
      <section class="post">
        <h1 class="post-title">{{ currentNews.title }}</h1>
        <div class="post-details">
          <img class="post-thumbnail" :src="currentNews.gallery[0]" />
        </div>
        <p class="post-content">{{ currentNews.content }}</p>
      </section>
      <div class="post-author">
        <span class="font-weight-bold">Source: </span>  
        <a :href="currentNews.author" target="_blank">{{ currentNews.author }}</a>
      </div>
    </div>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'NewsDetails',
  computed: {
    ...mapGetters(["currentPost"]),
    currentNews() {
      return this.currentPost(this.$route);
    }
  }
};
</script>


<style scoped>
.single-post-page {
  padding: 30px;
  text-align: justify;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.post-content {
  padding-top: 10px;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-author {
  color: rgb(88, 88, 88);
  margin: 0 300px;
  text-align: center;
}

.post-thumbnail {
  max-width: 600px;
}
</style>

