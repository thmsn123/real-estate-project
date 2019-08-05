<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <div class="input-control">
          <label for="email">Email</label>
          <input type="text" v-model="email" value="email" id="email" />
          <label for="password">Password</label>
          <input type="password" v-model="password" value="password" id />
        </div>
        <button value="Log in">Log in</button>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength, alphaNum, email } from "vuelidate/lib/validators";

export default {
  name: "AdminAuthPage",
  layout: "admin",
  data() {
    return {
      isLogin: true,
      email: "",
      password: "",
      authToke: ""
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('authenticateUser', {
        email: this.email,
        password: this.password
      })
      .then(()=> this.$router.push('/admin'))
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

button {
  font: inherit;
  background-color: black;
  color: white;
  padding: 5px;
  cursor: pointer;
  border: 1px solid black;
}

button:hover,
button:active {
  background-color: rgb(51, 51, 51);
  border: 1px solid black;
}
</style>