<template>
  <div>
    <v-footer dark padless>
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text
          class="white--text pt-0"
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, in cum. Aliquid ratione hic maxime maiores velit architecto, nihil non qui perferendis, voluptas excepturi. Dolore dignissimos magnam quod maxime praesentium.</v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text">
          	&copy;
          {{ new Date().getFullYear() }} —
          <strong>ttm2</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "NavFooter",
  data() {
    return {
      icons: [
        "fab fa-facebook",
        "fab fa-twitter",
        "fab fa-google-plus",
        "fab fa-linkedin",
        "fab fa-instagram"
      ]
    };
  }
};
</script>


