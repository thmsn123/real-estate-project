<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedAdv.title }}</h1>
      <div class="post-details">
        <div class="post-detail">Last updated on {{ loadedAdv.updatedDate}}</div>
        <div class="post-detail">Written by {{ loadedAdv.author }}</div>
        <div class="post-detail">Adv id: {{this.$route.params.id}}</div>
      </div>
      <p class="post-content">{{ loadedAdv.content }}</p>
    </section>
    <section class="post-feedback">
      <p>
        Let me know what you think about the post, send a mail to
        <a
          href="mailto:feedback@my-awesome-domain.com"
        >feedback@my-awesome-domain.com</a>.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadedAdv: {
        author: "ttomov",
        content: "This is my first real estate advertisement.",
        id: "-LhCIM8WE-BjAgCswarv",
        previewText: "This is short preview",
        thumbnail: "https://investinbg.co.uk/files/1485611348_3.jpg",
        title: "House in Kavarna",
        updatedDate: "2019-06-12T20:07:30.972Z"
      }
    };
  }
};
</script>


<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>

