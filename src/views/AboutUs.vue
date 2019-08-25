<template>
  <div class="container">
    <carousel class="carousel"></carousel>
    <div class="mx-5 my-5 text-center">
      <p>The company was found in 2019 in Kavarna. With us you can find the most affordable houses and holiday complexes near the sea or in the nearby villages.</p>
      <p>Whether you are selling or buying, renting or renting real estate, registering a company, our office in Kavarna will arrange everything necessary for the successful completion of your desired transaction - preliminary inspection of the property, organization of inspections and transportation to each settlement in Bulgaria, consulting for determining the sale or rental price, project and investment consulting, property management, asserting and protecting your interests, support in providing all the necessary documents, lawyer nomic and credit counseling and more.</p>
      <p>Our goal is to offer our clients the most suitable properties on the market at the time of their offering.</p>
    </div>
    <v-card>
      <div class="contacts-wrapper">
        <div>
          <h3>Contact us</h3>
          <div class="office-contacts">
            <div class="phone">
              <span class="font-weight-bold">Tel:</span> +359 2 8591370
            </div>
            <div class="mobile-phone">
              <span class="font-weight-bold">Mob:</span> +359 8123456
            </div>
            <div class="e-mail">
              <span class="font-weight-bold">E-mail:</span> sales@kavarnarealestate.com
            </div>
            <div class="address">
              <span class="font-weight-bold">Address:</span> 12, Dobrotitza, floor 2, office 10, Kavarna
            </div>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.2513856104956!2d28.336517216180688!3d43.43446547456423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4e88dbf926e83%3A0x7978474f84b344e8!2z0YPQuy4g4oCe0JTQvtCx0YDQvtGC0LjRhtCw4oCcIDEyLCA5NjUwINCm0LXQvdGC0YrRgCwg0JrQsNCy0LDRgNC90LA!5e0!3m2!1sbg!2sbg!4v1566337146598!5m2!1sbg!2sbg"
            width="600"
            height="450"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import Carousel from "../components/Carousel";
export default {
  name: "AboutUs",
  components: {
    Carousel
  }
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