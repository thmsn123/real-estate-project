<template>
  <div>
    <post-form @submit="onSubmitted"></post-form>
  </div>
</template>

<script>
import PostForm from "../../components/Posts/PostForm";
import { mapActions } from "vuex";

export default {
  components: {
    PostForm
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
