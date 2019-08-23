<template>
  <v-card>
    <div class="container p-5">
      <form class="form-wrapper" @submit.prevent="onSubmit">
        <h3>Contact us</h3>
        <div class="form-group text-left">
          <label for="user-name">Name:</label>
          <input
            type="text"
            v-model.trim="$v.username.$model"
            value="user-name"
            :class="['form-control', {'alert-danger' : $v.username.$error}]"
          />
          <p class="alert alert-danger" v-if="$v.username.$error">Name is not valid!</p>
        </div>
        <div class="form-group text-left">
          <label for="email">Email:</label>
          <input
            v-model.trim="$v.email.$model"
            type="text"
            id="email"
            :class="['form-control', {'alert-danger' : $v.email.$error}]"
          />
          <p class="alert alert-danger" v-if="$v.email.$error">Email is not valid!</p>
        </div>
        <div class="form-group text-left">
          <label for="description">Description</label>
          <br />
          <textarea v-model="description" id="description" rows="5" class="form-control"></textarea>
        </div>
        <button :disabled="$v.$invalid" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </v-card>
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
    ...mapActions(["addComment"]),
    onSubmit() {
      let postData = {
        username: this.username,
        email: this.email,
        description: this.description,
        date: new Date()
      };

      this.addComment(postData).then(() => {
        this.$router.push("/");
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
