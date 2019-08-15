<template>
  <div class="single-post-page" v-if="currentSale">
    <v-card>
      <v-toolbar-title>{{ currentSale.title }}</v-toolbar-title>
      <img
        class="image"
        v-for="(image, i) in currentSale.gallery"
        :src="image"
        :key="i"
        @click="index = i"
      />
      <vue-gallery-slideshow :images="currentSale.gallery" :index="index" @close="index = null"></vue-gallery-slideshow>
      <div class="description">
        <v-list class="mx-auto" max-width="400" tile>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Price</v-list-item-title>
              <v-list-item-subtitle>{{currentSale.price}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Property type</v-list-item-title>
              <v-list-item-subtitle>{{currentSale.propertyType}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Location</v-list-item-title>
              <v-list-item-subtitle>{{currentSale.location}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Construction year</v-list-item-title>
              <v-list-item-subtitle>{{currentSale.constructionYear}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
      <section class="post">
        <p class="post-content">{{ currentSale.content }}</p>
      </section>
      <section class="post-feedback">
        <router-link :to="{path: '/contact'}">Contact us</router-link>
      </section>
    </v-card>
  </div>
</template>

<script>
import VueGallerySlideshow from "vue-gallery-slideshow";
import { mapGetters } from "vuex";

export default {
  components: {
    VueGallerySlideshow
  },
  data() {
    return {
      index: null
    };
  },
  computed: {
    ...mapGetters(["currentPost"]),
    currentSale() {
      return this.currentPost(this.$route);
    }
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

.single-post-page {
  padding: 30px;
  text-align: center;
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

