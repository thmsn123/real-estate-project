<template>
  <div class="admin-auth-page container my-3">
    <div class="auth-container">
      <b-tabs content-class>
        <b-tab title="Log In" active>
          <sign-in-register :isLogin="true"></sign-in-register>
        </b-tab>
        <b-tab title="Sign Up">
          <sign-in-register :isLogin="false"></sign-in-register>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import SignInRegister from "../../components/Auth/SignInOrRegister";

export default {
  name: "AdminAuthPage",
  layout: "admin",
  components: {
    SignInRegister
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
  background-color: #fff;
}
</style>