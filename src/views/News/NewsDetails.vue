<template>
  <div class="single-post-page container my-3" v-if="currentNews">
    <section class="post">
      <h1 class="post-title">{{ currentNews.title }}</h1>
      <div class="post-details">
        <img class="post-thumbnail" :src="currentNews.thumbnail">
      </div>
      <p class="post-content">{{ currentNews.content }}</p>
    </section>
    <div class="post-author">Written by {{ currentNews.username }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["currentPost"]),
    currentNews(){
      return this.currentPost(this.$route)
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

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-author {
  color: rgb(88, 88, 88);
  margin: 0 300px;
  text-align: right;
}

.post-thumbnail {
  max-width: 600px;
}
</style>

