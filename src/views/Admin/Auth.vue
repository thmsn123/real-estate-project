<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <div v-if="errorMsg" class="error-msg">{{errorMsg}}<p></p></div>
      <form @submit.prevent="onSubmit">
        <div class="input-control">
          <label for="email">Email</label>
          <input type="text" v-model="$v.email.$model" value="email" id="email" />
          <label for="password">Password</label>
          <input type="password" v-model="$v.password.$model" value="password" id />
        </div>
        <button value="Log in" :disabled="$v.$invalid" class="btn btn-primary">Log in</button>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength, alphaNum, email } from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
  name: "AdminAuthPage",
  layout: "admin",
  data() {
    return {
      errorMsg: "",
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["authenticateUser"]),
    onSubmit() {
      this.authenticateUser({
        email: this.email,
        password: this.password
      }).then(statusCode => {
        if (statusCode === 200) {
          this.$router.push("/admin");
        } else if (statusCode === 400) {
          this.errorMsg = "Invalid email address or password!";
        } 
      });
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6),
      alphaNum
    }
  }
};
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}

.input-control {
  margin: 10px 0;
}

.input-control label {
  display: block;
  font-weight: bold;
}

.input-control input {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  border: 1px solid #ccc;
  padding: 5px;
}

.input-control input:focus,
.input-control textarea:focus {
  background-color: #eee;
  outline: none;
}
.error-msg {
  text-align: center;
  color: red;
}
</style>