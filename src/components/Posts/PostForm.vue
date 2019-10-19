<template>
  <form class="form-wrapper" @submit.prevent="onSave">
    <h3>Add new post</h3>
    <div class="form-group text-left">
      <label for="user-name">Author name:</label>
      <input
        type="text"
        v-model.trim="$v.author.$model"
        value="user-name"
        :class="['form-control', {'alert-danger' : $v.author.$error}]"
      />
      <p class="alert alert-danger" v-if="$v.author.$error">Name is not valid!</p>
    </div>
    <div class="form-group text-left">
      <label for="postType">Post type:</label>
      <select
        id="postType"
        v-model="$v.postType.$model"
        :class="['form-control', {'alert-danger' : $v.postType.$error}]"
      >
        <option value="news">News post</option>
        <option value="sales">Sale post</option>
        <option value="rentals">Rentals post</option>
      </select>
      <p class="alert alert-danger" v-if="$v.postType.$error">Please choose an option!</p>
    </div>
    <div class="form-group text-left">
      <label for="title">Title:</label>
      <input type="text" v-model.trim="title" value="title" class="form-control" />
    </div>
    <div class="form-group text-left" v-if="postType !== 'news'">
      <label for="price">Price:</label>
      <input type="text" v-model.trim="price" value="price" class="form-control" />
    </div>
    <div class="form-group text-left" v-if="postType !== 'news'">
      <label for="propertyType">Immobilientyp:</label>
      <select id="propertyType" v-model="propertyType" class="form-control">
        <option value="Studio">Studio</option>
        <option value="Ein Zimmerwohnung">Ein Zimmerwohnung</option>
        <option value="Zwei Zimmerwohnung">Zwei Zimmerwohnung</option>
        <option value="Drei Zimmerwohnung">Drei Zimmerwohnung</option>
        <option value="Haus">Haus</option>
        <option value="Haus Dorflage">Haus Dorflage</option>
      </select>
    </div>
    <div class="form-group text-left" v-if="postType !== 'news'">
      <label for="location">Lage:</label>
      <select id="location" v-model="location" class="form-control">
        <option value="Kavarna">Kavarna</option>
        <option value="Balchik">Balchik</option>
        <option value="Bulgarevo">Bulgarevo</option>
        <option value="Mogilishte">Mogilishte</option>
        <option value="Kamen Bryag">Kamen Bryag</option>
        <option value="Tyulenovo">Tyulenovo</option>
        <option value="Topola">Topola</option>
        <option value="Bozhuretz">Bozhuretz</option>
      </select>
    </div>
    <div class="form-group text-left" v-if="postType !== 'news'">
      <label for="propertySize">Property size:</label>
      <input type="text" v-model.trim="propertySize" value="propertySize" class="form-control" />
    </div>
    <div class="form-group text-left" v-if="postType !== 'news'">
      <label for="constructionYear">Year of construction:</label>
      <input
        type="text"
        v-model.trim="constructionYear"
        value="constructionYear"
        class="form-control"
      />
    </div>
    <b-form-group label="Add images to gallery:" label-for="gallery" class="text-left">
      <b-form-file
        id="gallery"
        v-model="gallery"
        accept="image/*"
        value="gallery"
        multiple
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
        @change="uploadFiles"
      ></b-form-file>
      <div class="mt-3">
        Selected files:
        <span v-for="(file, index) in gallery" :key="index">{{ file.name }}</span>
      </div>
      <div v-if="uploadMessage" class="alert alert-success">
        <span>{{uploadMessage}}</span>
      </div>
    </b-form-group>
    <div class="form-group text-left">
      <label for="content">Content:</label>
      <br />
      <textarea v-model="content" id="content" rows="5" class="form-control"></textarea>
    </div>
    <div v-if="postType === 'news'" class="form-group text-left">
      <label for="preview">Preview Text:</label>
      <br />
      <textarea v-model="preview" id="preview" rows="5" class="form-control"></textarea>
    </div>
    <button :disabled="$v.$invalid" class="btn btn-primary">Save</button>
  </form>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "PostForm",
  data() {
    return {
      author: "",
      postType: "",
      propertyType: "",
      title: "",
      location: "",
      propertySize: "",
      constructionYear: "",
      price: "",
      gallery: [],
      content: "",
      preview: "",
      uploadMessage: ""
    };
  },
  computed: {
    ...mapGetters(["loadedImages"])
  },
  methods: {
    ...mapActions(["addFilesToStorage"]),
    uploadFiles() {
      this.addFilesToStorage(gallery).then(resp => {
        if (resp.status === "ok") {
          this.uploadMessage = "The attachments were uploaded!";
        }
      });
    },
    onSave() {
      let postData = {
        author: this.author,
        postType: this.postType,
        propertyType: this.propertyType,
        title: this.title,
        location: this.location,
        propertySize: this.propertySize,
        constructionYear: this.constructionYear,
        price: this.price,
        content: this.content,
        preview: this.preview,
        date: new Date()
      };

      postData.gallery = this.loadedImages.toString();
      this.$emit("submit", postData);
    }
  },
  validations: {
    author: {
      required
    },
    postType: {
      required
    }
  }
};
</script>
