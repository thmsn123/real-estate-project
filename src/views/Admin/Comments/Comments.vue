<template>
  <div class="container my-3">
    <v-card max-width="800" class="mx-auto">
      <v-toolbar color="cyan" dark>
        <v-toolbar-title>Inbox</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn>
          <v-icon @click="getLatestComments">Refresh</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list three-line>
        <template v-for="(item, index) in loadedComments">
          <router-link
            :key="index"
            class="nav-link"
            active-class="active"
            :to="{name: 'commentsdetails', params: {id: item.id}}"
          >
            <v-subheader :key="index" v-html="item.email"></v-subheader>
            <v-list-item :key="item.email">
              <v-list-item-content>
                <v-list-item-title v-html="item.username">{{item.email}}</v-list-item-title>
                <v-list-item-subtitle v-html="item.description"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider :key="item.id"></v-divider>
          </router-link>
        </template>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'Comments',
  computed: {
    ...mapGetters(["loadedComments"])
  },
  methods: {
    ...mapActions(["getComments"]),
    getLatestComments() {
      this.getComments();
    }
  }
};
</script>