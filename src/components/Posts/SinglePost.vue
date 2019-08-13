<template>
  <div class="container">
    <form @submit.prevent="onSave">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="user-name">Author name:</label>
            <input
              type="text"
              v-model.trim="$v.username.$model"
              value="user-name"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="postType">Post type:</label>
            <select id="postType" v-model="$v.postType.$model" class="form-control">
              <option value="news">News post</option>
              <option value="sales">Sale post</option>
              <option value="rentals">Rentals post</option>
            </select>
          </div>
          <div class="form-group">
            <label for="title">Title:</label>
            <input type="text" v-model.trim="title" value="title" class="form-control" />
          </div>
          <div class="form-group">
            <label for="thumbnail">Thumbnail Link:</label>
            <input type="text" v-model.trim="thumbnail" value="thumbnail" class="form-control" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="content">Content:</label>
          <br />
          <textarea v-model="content" id="content" rows="5" class="form-control"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="preview">Preview Text:</label>
          <br />
          <textarea v-model="preview" id="preview" rows="5" class="form-control"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button :disabled="$v.$invalid" class="btn btn-primary">Save</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "app",
  data() {
    return {
      username: "",
      postType: "",
      title: "",
      thumbnail: "",
      content: "",
      preview: ""
    };
  },
  methods: {
    onSave() {
      let postData = {
        username: this.username,
        postType: this.postType,
        title: this.title,
        thumbnail: this.thumbnail,
        content: this.content,
        preview: this.preview
      };
      this.$emit("submit", postData);
    }
  },
  validations: {
    username: {
      required
    },
    postType: {
      required
    }
  }
};
</script>

<style>
</style>
