<template>
  <v-card>
    <message-container :response="response"></message-container>
    <div class="container p-5">
      <form class="form-wrapper" @submit.prevent="onSubmit">
        <h3>Kontakt</h3>
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
          <p class="alert alert-danger" v-if="$v.email.$error">Email ist nicht gültig!</p>
        </div>
        <div class="form-group text-left">
          <label for="description">Text:</label>
          <br />
          <textarea v-model="description" id="description" rows="5" class="form-control"></textarea>
        </div>
        <button :disabled="$v.$invalid" class="btn btn-primary">Senden</button>
      </form>
    </div>
  </v-card>
</template>

<script>
import MessageContainer from "../components/Auth/MessageContainer";
import { mapActions } from "vuex";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "Contact",
  components: {
    MessageContainer
  },
  data() {
    return {
      username: "",
      email: "",
      description: "",
      errorMsg: "",
      successMsg: "",
      response: {
        status: "",
        msg: ""
      }
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

      this.addComment(postData).then(result => {
        if (result.status === 200) {
          this.response.status = 200;
          this.response.msg = "You added your comment successfully!";

          this.$router.push("/");
        } else if (result.status === 400) {
          this.response.status = 400;
          this.response.msg = result.message.replace(/_/g, " ") + "!";
        }
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

<style scoped>
.container {
  margin-top: 100px;
  margin-bottom: 20px;
}
</style>
