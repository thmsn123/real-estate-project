<template>
  <div class="my-3 text-center container">
    <h1 class="title">ARE YOU READY TO FIND YOUR NEW HOME?</h1>
    <h3>Welcome to Real Estate Properties!</h3>
    <p>Here you can find a wide variety of apartments, houses, villas, properties and etc. for rent and sale.</p>
    <p>Please feel free to contact us!</p>
    <router-link class="btn btn-primary" :to="{path: '/aboutus'}">Read More</router-link>
  </div>
</template>

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
  font-weight: 900;
  color: white;
  text-transform: uppercase;
  margin: 0;
  position: relative;
  top: 50%;
  left: 50%;
  font-size: 3rem;
  transform: translate(-50%, -50%);
}
</style>
