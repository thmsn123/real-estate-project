<template>
  <div class="my-3 text-center container">
    <h1 class="title">Sind Sie bereit für ihr neues zuhause in Bulgarien?</h1>
    <h3>Willkommen!</h3>
    <p>Wir helfen ihnen kompetent dabei.</p>
    <router-link class="btn btn-primary" :to="{path: '/aboutus'}">Mehr lesen</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
}
.btn {
  width: 120px;
  margin: 0 auto 20px auto;
}

.title {
  font-family: "Roboto", sans-serif;
  font-weight: 800;
  color: white;
  text-transform: uppercase;
  margin: 20px 0 0 0;
  position: relative;
  top: 50%;
  left: 50%;
  font-size: 3rem;
  transform: translate(-50%, -50%);
}
</style>
