<template>
<router-link :to="advLink" class="adv-preview">
    <article>
      <div
        class="adv-thumbnail"
        :style="{backgroundImage: 'url(' + thumbnail + ')'}"></div>
      <div class="adv-content">
        <h1>{{ title }}</h1>
        <p>{{ preview }}</p>
      </div>
    </article>
</router-link>
</template>

<script>
export default {
  name: 'AdvertisementPreview',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    preview: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  },
  computed: {
    advLink() {
      return '/forsale/' + this.id;
    }
  }
}
</script>


<style scoped>
.adv-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .adv-preview {
    width: 400px;
    margin: 10px;
  }
}

.adv-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.adv-content {
  padding: 10px;
  text-align: center;
}

a:hover .adv-content,
a:active .adv-content {
  background-color: #ccc;
}
</style>