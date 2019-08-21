<template>
  <v-app id="carousel-wrapper">
    <v-carousel
      dark
      delimiter-icon="$vuetify.icons.delimiter"
      prev-icon="$vuetify.icons.prev"
      next-icon="$vuetify.icons.next"
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://i.ytimg.com/vi/_G8by0G9cPg/maxresdefault.jpg"
        },
        {
          src:
            "https://s-ec.bstatic.com/images/hotel/max1024x768/699/69907903.jpg"
        },
        {
          src:
            "https://svetdimitrov.com/wp-content/uploads/2017/06/Kavarna-region-bolata-beach-featured-image-1.jpg"
        },
        {
          src:
            "https://trud.bg/wp-content/uploads/2018/06/obshtina-kavarna-2-1280x720.jpg"
        },
        {
          src:
            "https://www.bulgaria-real.ru/media/bulgaria-property-images/881/image881-1.jpg"
        },
        {
          src:
            "https://www.alo.bg/user_files/a/anvar1965/5472832_101136876_big.jpg"
        },
        {
          src:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Kavarna%2C_Bulgaria_-_panoramio_%288%29.jpg/1280px-Kavarna%2C_Bulgaria_-_panoramio_%288%29.jpg"
        },
        {
          src:
            "https://media-cdn.tripadvisor.com/media/photo-m/1280/13/b6/3b/59/20180713-214537-largejpg.jpg"
        }
      ]
    };
  }
};
</script>

<style>
.v-application--wrap {
  min-height: 0 !important;
}
#carousel-wrapper {
  max-width: 50%;
  margin: 0 auto !important;
}
</style>