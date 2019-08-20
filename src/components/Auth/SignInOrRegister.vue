<template>
  <div>
    <div v-if="errorMsg" class="error-msg">
      {{errorMsg}}
      <p></p>
    </div>
    <form @submit.prevent="onSubmit">
      <div class="input-control">
        <label for="email">Email</label>
        <input
          type="text"
          v-model="$v.email.$model"
          :class="{'alert-danger' : $v.email.$error}"
          value="email"
        />
        <p class="alert alert-danger" v-if="$v.email.$error">Email is not valid!</p>
        <label for="password" class="password">Password</label>
        <input
          type="password"
          v-model="$v.password.$model"
          :class="{'alert-danger' : $v.password.$error}"
          value="password"
        />
        <p class="alert alert-danger" v-if="$v.password.$error">Password is not valid!</p>
      </div>
      <button
        type="submit"
        value="Log in"
        :disabled="$v.$invalid"
        class="btn btn-primary"
      >{{ isLogin ? 'Log In' : 'Sign Up' }}</button>
    </form>
  </div>
</template>

<script>
import { required, minLength, alphaNum, email } from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
  props: {
    isLogin: {
      type: Boolean,
      required: true
    }
  },
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
        isLogin: this.isLogin,
        email: this.email,
        password: this.password
      }).then(statusCode => {
        if (statusCode === 200) {
          this.$router.push("/");
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
.password{
  margin-top: 5px;
}
</style>