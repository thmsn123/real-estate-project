<template>
  <div class="form-container">
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

<style scoped>
.form-container {
  width: 100%;
  padding: 10px;
}
</style>
