<template>
  <v-card class="wrapper">
    <div class="container p-5">
      <post-form @submit="onSubmitted" class="my-3"></post-form>
    </div>
  </v-card>
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
        this.$router.push("/");

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
.wrapper {
  margin: 30px;
}
.container {
  margin-top: 100px;
  margin-bottom: 20px;
}
</style>
