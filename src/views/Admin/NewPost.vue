<template>
  <v-card class="wrapper">
    <message-container :response="response"></message-container>
    <div class="container p-5">
      <post-form @submit="onSubmitted" class="my-3"></post-form>
    </div>
  </v-card>
</template>

<script>
import MessageContainer from "../../components/Auth/MessageContainer";
import PostForm from "../../components/Posts/PostForm";
import { mapActions } from "vuex";

export default {
  components: {
    PostForm,
    MessageContainer
  },
  data() {
    return {
      response: {
        status: "",
        msg: ""
      }
    };
  },
  methods: {
    ...mapActions(["addPost", "getPosts"]),
    onSubmitted(postData) {
      this.addPost(postData).then(result => {
        if (result.status === 200) {
          this.response.status = 200;
          this.response.msg = "You added your post successfully!";

          this.$router.push("/");

          if (postData.postType === "news") {
            this.getPosts("news");
          } else if (postData.postType === "sales") {
            this.getPosts("sales");
          } else {
            this.getPosts("rentals");
          }
        } else if (result.status === 400) {
          this.response.status = 400;
          this.response.msg = result.message.replace(/_/g, " ") + "!";
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
