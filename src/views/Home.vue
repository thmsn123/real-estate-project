<template>
  <div class="mx-3 my-3 text-center container">
    <h3>Welcome to Kavarna Real Estate Properties!</h3>
    <p>Here you can find a variety of apartment, houses, villas, properties and etc. for rent and sale.</p>
    <p>Please feel free to contact us!</p>
    <router-link class="btn btn-primary" :to="{path: '/aboutus'}">Read More</router-link>
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/AfpAnvO-ons"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.btn {
  width: 120px;
  margin: 0 auto 20px auto;
}
</style>
