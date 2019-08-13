<template>
  <div>
    <single-post @submit="onSubmitted"></single-post>
  </div>
</template>

<script>
import SinglePost from "../../components/Posts/SinglePost.vue";
import { mapActions } from "vuex";

export default {
  components: {
    SinglePost
  },
  methods: {
    ...mapActions(["addPost", "getPosts"]),
    onSubmitted(postData) {
      this.addPost(postData).then(() => {
        this.$router.push("/admin");

        if (postData.postType === "news") {
          this.getPosts("news");
        } else if (postData.postType === "sales") {
          this.getPosts("sales");
        } else {
          this.getPosts("rentals");
        }
      });
    }
  }
};
</script>

<style>
</style>
