<template>
  <div class="container">
    <form @submit.prevent="onSave">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="user-name">Author name:</label>
            <input type="text" v-model.trim="post.username" value="user-name" class="form-control" />
          </div>
          <div class="form-group">
            <label for="title">Title:</label>
            <input type="text" v-model.trim="post.title" value="title" class="form-control" />
          </div>
          <div class="form-group">
            <label for="thumbnail">Thumbnail Link:</label>
            <input type="text" v-model.trim="post.thumbnail" value="thumbnail" class="form-control" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="content">Content:</label>
          <br />
          <textarea v-model="post.content" id="content" rows="5" class="form-control"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="preview">Preview Text:</label>
          <br />
          <textarea v-model="post.preview" id="preview" rows="5" class="form-control"></textarea>
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
      authToken: "",
      disabled: false,
      post: {
        username: "",
        title: "",
        thumbnail: "",
        content: "",
        preview: ""
      }
    };
  },
  methods: {
    onSave() {
      this.$emit('submit', this.post);
    }
  },
  validations: {
    // email: {
    //   required,
    //   email,
    //   notAbv: value =>
    //     !value
    //       .split("@")
    //       .pop()
    //       .startsWith("abv")
    // },
    // username: {
    //   required
    // }
  }
};
</script>

<style>
</style>
