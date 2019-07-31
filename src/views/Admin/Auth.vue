<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <div class="input-control">
          <label for="username">User</label>
          <input type="text" v-model="username" value="username" id="username" />
          <label for="password">Password</label>
          <input type="password" v-model="password" value="password" id />
        </div>
        <button value="Log in">Log in</button>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength, alphaNum } from "vuelidate/lib/validators";

export default {
  name: "AdminAuthPage",
  layout: "admin",
  data() {
    return {
      isLogin: true,
      username: "",
      password: "",
      authToke: ""
    };
  },
  methods: {
    onSubmit() {
      let appKey = "kid_SJ2Ll6dzB";
      let appSecret = "e63e973905c147f3aec8540a92154af6";
      let authString = btoa(`${this.username}:${this.password}`);
      let options = {
        method: "POST",
        headers: {
          Authorization: `Basic ${authString}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password
        })
      };

      fetch(`https://baas.kinvey.com/user/${appKey}/login`, options)
        .then(res => res.json())
        .then(data => {
          this.authToken = data._kmd.authtoken;
          console.log("User authenticated!");
        })
        .then(() => {
        this.$router.push('/admin');
      });
    }
  },
  validations: {
    username: {
      required
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