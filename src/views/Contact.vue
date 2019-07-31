<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Contact us</h1>
          <hr />
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
      <hr />
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button :disabled="$v.$invalid" class="btn btn-primary">Submit!</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email} from "vuelidate/lib/validators";

export default {
  name: "app",
  data() {
    return {
      username: "",
      authToken: "",
      email: "",
      description: "",
      disabled: false
    };
  },
  methods: {
    onSubmit() {
      this.submittedData = {
        email: this.email,
        password: this.password,
        age: this.age,
        description: this.description,
        skills: this.skills,
        gender: this.gender,
        country: this.country
      };

      let appKey = "kid_SJ2Ll6dzB";
      let appSecret = "e63e973905c147f3aec8540a92154af6";
      let authString = btoa(`${this.username}:${this.userpass}`);
      let options = {
        method: "POST",
        headers: {
          Authorization: `Basic ${authString}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.username,
          password: this.userpass
        })
      };

      fetch(`https://baas.kinvey.com/user/${appKey}/login`, options)
        .then(res => res.json())
        .then(data => {
          this.authToken = data._kmd.authtoken;
          console.log("User authenticated!");
        });
    }
  },
  validations: {
    email: {
      required,
      email,
      notAbv: value =>
        !value
          .split("@")
          .pop()
          .startsWith("abv")
    },
    username: {
      required
    }
  }
};
</script>

<style>
</style>
