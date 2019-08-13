<template>
  <div>
    <ul v-for="(comment, index) in loadedComments" :key="index">
      <li>{{comment.username}} - {{comment.email}} - {{comment.description}}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["loadedComments"])
  }
};
</script>

<style>
</style>