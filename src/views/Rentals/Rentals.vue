<template>
  <div class="text-center">
    <h1>Rentals page!</h1>
    <div class="advs">
      <adv-list :advs="advs"></adv-list>
      <button @click="getData">Get Data</button>
    </div>
  </div>
</template>

<script>
import AdvList from "../../components/Advertisements/AdvList";

export default {
  components: {
    AdvList
  },
  data() {
    return {
      advs: [
        {
          author: "ttomov",
          content: "This is my first real estate advertisement.",
          id: "-LhCIM8WE-BjAgCswarv5",
          previewText: "This is short preview",
          thumbnail: "https://investinbg.co.uk/files/1485611348_3.jpg",
          title: "House in Kavarna",
          updatedDate: "2019-06-12T20:07:30.972Z"
        },
        {
          author: "ttomov",
          content: "This is my second real estate advertisement.",
          id: "-LhCIM8WE-BjAgCswarv37",
          previewText: "This is short preview",
          thumbnail:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/743/74311742.jpg",
          title: "House in Bulgarevo",
          updatedDate: "2019-06-12T20:07:30.972Z"
        },
        {
          author: "ttomov",
          content: "This is my first real estate advertisement.",
          id: "-LhCIM8WE-BjAgCswarv59",
          previewText: "This is short preview",
          thumbnail: "https://investinbg.co.uk/files/1485611348_3.jpg",
          title: "House in Kavarna",
          updatedDate: "2019-06-12T20:07:30.972Z"
        },
        {
          author: "ttomov",
          content: "This is my second real estate advertisement.",
          id: "-LhCIM8WE-BjAgCswarv38",
          previewText: "This is short preview",
          thumbnail:
            "https://t-ec.bstatic.com/images/hotel/max1024x768/743/74311742.jpg",
          title: "House in Bulgarevo",
          updatedDate: "2019-06-12T20:07:30.972Z"
        }
      ]
    };
  }
};
</script>

<style scoped>
.advs {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>