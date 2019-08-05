<template>
  <div>
    <single-post @submit="onSubmitted"></single-post>
  </div>
</template>

<script>
import SinglePost from "../../components/SinglePost";
export default {
  components: {
    SinglePost
  },
  methods: {
    onSubmitted(postData) {
        this.$store.dispatch("addPost", postData).then(() => {
        this.$router.push("/admin");
      });
    }
  }
};
</script>

<style>
</style>
