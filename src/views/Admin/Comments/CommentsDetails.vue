<template>
  <div class="container my-3">
    <v-card max-width="800" class="mx-auto">
      <v-toolbar color="cyan" dark>
        <v-toolbar-title>Inbox</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn>
          <router-link class="nav-link" active-class="active" :to="{path: '/admin/comments'}">Back</router-link>
        </v-btn>
      </v-toolbar>
      <v-list three-line>
        <v-subheader v-html="comment.email"></v-subheader>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title v-html="comment.username"></v-list-item-title>
            <div class="description">{{comment.description}}</div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["currentComment"]),
    comment() {
      return this.currentComment(this.$route.params.id);
    }
  }
};
</script>

<style scoped>
.description {
  margin-top: 10px;
  text-align: justify;
}
a {
  color: white;
}
a:hover {
  color: lightgrey;
}
</style>