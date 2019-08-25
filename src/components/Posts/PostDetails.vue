<template>
  <div>
    <v-card class="card">
      <router-link :to="{path: getParentRoute()}">
        <v-btn medium dark absolute top left>Back</v-btn>
      </router-link>
      <v-toolbar-title class="title">{{ currentPost.title }}</v-toolbar-title>
      <img
        class="image"
        v-for="(image, i) in currentPost.gallery"
        :src="image"
        :key="i"
        @click="index = i"
      />
      <vue-gallery-slideshow :images="currentPost.gallery" :index="index" @close="index = null"></vue-gallery-slideshow>
      <div class="description">
        <v-list class="mx-auto" max-width="400" tile>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Price</v-list-item-title>
              <v-list-item-subtitle>{{currentPost.price | toEuro}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Property type</v-list-item-title>
              <v-list-item-subtitle>{{currentPost.propertyType}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Location</v-list-item-title>
              <v-list-item-subtitle>{{currentPost.location}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Construction year</v-list-item-title>
              <v-list-item-subtitle>{{currentPost.constructionYear}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
      <section class="post">
        <p class="post-content">{{ currentPost.content }}</p>
      </section>
      <section class="post-feedback">
        <router-link v-if="isAuthenticated" :to="{path: '/contact'}">Contact us</router-link>
      </section>
    </v-card>
  </div>
</template>

<script>
import VueGallerySlideshow from "vue-gallery-slideshow";
import { mapGetters } from "vuex";

export default {
  name: "PostDetails",
  props: {
    currentPost: {
      type: Object,
      required: true
    }
  },
  components: {
    VueGallerySlideshow
  },
  data() {
    return {
      index: null
    };
  },
  methods: {
    getParentRoute() {
      return `/${this.$route.path.split("/")[1]}`;
    }
  },
  computed: {
    ...mapGetters(["isAuthenticated"])
  }
};
</script>

<style scoped>
.image {
  width: 100px;
  height: 100px;
  background-size: cover;
  cursor: pointer;
  margin: 5px;
  border-radius: 3px;
  border: 1px solid lightgray;
  object-fit: contain;
}
.card {
  padding: 20px;
}
.title {
  padding: 10px;
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
.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}
.post-feedback a {
  color: red;
  text-decoration: none;
}
.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>

