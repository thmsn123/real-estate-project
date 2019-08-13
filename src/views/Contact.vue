<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Contact us</h1>
          <div class="form-group">
            <label for="user-name">Name:</label>
            <input
              type="text"
              v-model.trim="$v.username.$model"
              value="user-name"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input
              v-model.trim="$v.email.$model"
              type="text"
              id="email"
              :class="['form-control', {'alert-danger' : $v.email.$error}]"
            />
            <p class="alert alert-danger" v-if="$v.email.$error">Email is not valid!</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="description">Description</label>
          <br />
          <textarea v-model="description" id="description" rows="5" class="form-control"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button :disabled="$v.$invalid" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "app",
  data() {
    return {
      username: "",
      email: "",
      description: ""
    };
  },
  methods: {
    ...mapActions(['addComment']),
    onSubmit() {
      let postData = {
        username: this.username,
        email: this.email,
        description: this.description
      };
      
      this.addComment(postData).then(() => {
        console.log('data was posted...')
      });
    }
  },
  validations: {
    username: {
      required
    },
    email: {
      required,
      email
    }
  }
};
</script>

<style>
</style>
