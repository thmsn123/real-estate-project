<template>
    <form @submit.prevent="onSave">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="user-name">Author name:</label>
            <input
              type="text"
              v-model.trim="$v.username.$model"
              value="user-name"
              :class="['form-control', {'alert-danger' : $v.username.$error}]"
            />
            <p class="alert alert-danger" v-if="$v.username.$error">Name is not valid!</p>
          </div>
          <div class="form-group">
            <label for="postType">Post type:</label>
            <select id="postType" v-model="$v.postType.$model" :class="['form-control', {'alert-danger' : $v.postType.$error}]">
              <option value="news">News post</option>
              <option value="sales">Sale post</option>
              <option value="rentals">Rentals post</option>
            </select>
            <p class="alert alert-danger" v-if="$v.postType.$error">Please choose an option!</p>
          </div>
          <div class="form-group">
            <label for="title">Title:</label>
            <input type="text" v-model.trim="title" value="title" class="form-control" />
          </div>
          <div class="form-group" v-if="postType !== 'news'">
            <label for="price">Price:</label>
            <input type="text" v-model.trim="price" value="price" class="form-control" />
          </div>
          <div class="form-group" v-if="postType !== 'news'">
            <label for="propertyType">Property type:</label>
            <select id="propertyType" v-model="propertyType" class="form-control">
              <option value="Studio">Studio</option>
              <option value="One bedroom apartment">One bedroom apartment</option>
              <option value="Two bedrooms apartment">Two bedrooms apartment</option>
              <option value="Three bedrooms apartment">Three bedrooms apartment</option>
              <option value="House/villa">House/villa</option>
              <option value="Rural property">Rural property</option>
            </select>
          </div>
          <div class="form-group" v-if="postType !== 'news'">
            <label for="location">Location:</label>
            <select id="location" v-model="location" class="form-control">
              <option value="Kavarna">Kavarna</option>
              <option value="Balchik">Balchik</option>
              <option value="Bulgarevo">Bulgarevo</option>
              <option value="Mogilishte">Mogilishte</option>
              <option value="Kamen Bryag">Kamen Bryag</option>
              <option value="Tyulenovo">Tyulenovo</option>
            </select>
          </div>
          <div class="form-group" v-if="postType !== 'news'">
            <label for="propertySize">Property size:</label>
            <input
              type="text"
              v-model.trim="propertySize"
              value="propertySize"
              class="form-control"
            />
          </div>
          <div class="form-group" v-if="postType !== 'news'">
            <label for="constructionYear">Year of construction:</label>
            <input
              type="text"
              v-model.trim="constructionYear"
              value="constructionYear"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="thumbnail">Thumbnail:</label>
            <input type="text" v-model.trim="thumbnail" value="thumbnail" class="form-control" />
          </div>
          <div class="form-group" v-if="postType !== 'news'">
            <label for="gallery">Gallery urls:</label>
            <input type="text" v-model.trim="gallery" value="gallery" class="form-control" />
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
      <div class="row" v-if="postType === 'news'">
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
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "app",
  data() {
    return {
      username: "",
      postType: "",
      propertyType: "",
      title: "",
      location: "",
      propertySize: "",
      constructionYear: "",
      price: "",
      thumbnail: "",
      gallery: "",
      content: "",
      preview: ""
    };
  },
  methods: {
    onSave() {
      let postData = {
        username: this.username,
        postType: this.postType,
        propertyType: this.propertyType,
        title: this.title,
        location: this.location,
        propertySize: this.propertySize,
        constructionYear: this.constructionYear,
        price: this.price,
        thumbnail: this.thumbnail,
        gallery: this.gallery,
        content: this.content,
        preview: this.preview,
        date: new Date()
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
