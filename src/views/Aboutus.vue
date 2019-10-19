<template>
  <div class="container">
    <!-- <carousel class="carousel"></carousel> -->
    <v-card>
      <div class="contacts-wrapper">
        <div>
          <h3>Kontakt</h3>
          <div class="office-contacts">
            <div class="phone">
              <span class="font-weight-bold">Tel:</span> 00359 886 561878
            </div>
            <div class="mobile-phone">
              <span class="font-weight-bold">Mob:</span> 0049 176 527 66 942
            </div>
            <div class="e-mail">
              <span class="font-weight-bold">E-mail:</span> info@zuhause-in-bulgarien.de
            </div>
            <div class="address">
              <span class="font-weight-bold">Address:</span> 24, Al. Stambolyisky, Kavarna
            </div>
          </div>
        </div>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.328886042674!2d28.331222115452345!3d43.43284667912952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4e89196de2aed%3A0x5c596a3dc4f5529c!2sul.%20%22Al.%20Stambolijski%22%2024%2C%209650%20Tsentar%2C%20Kavarna%2C%20Bulgarien!5e0!3m2!1sde!2sde!4v1571510053052!5m2!1sde!2sde" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
// import Carousel from "../components/Carousel";
export default {
  name: "Aboutus",
  // components: {
  //   Carousel
  // }
};
</script>

<style scoped>
.container {
  margin-top: 100px;
  margin-bottom: 20px;
}
.carousel {
  margin: 1rem 0 !important;
}
p {
  color: #fff;
}
.contacts-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: left;
}
.contacts-wrapper div {
  padding: 10px;
}
.contacts-wrapper p {
  color: black;
  display: flex;
  flex-direction: column;
}
</style>