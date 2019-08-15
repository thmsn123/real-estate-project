<template>
  <div>
    <post-details @submit="onSubmitted"></post-details>
  </div>
</template>

<script>
import PostDetails from "../../components/Posts/PostDetails.vue";
import { mapActions } from "vuex";

export default {
  components: {
    PostDetails
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
