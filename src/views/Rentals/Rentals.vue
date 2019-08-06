<template>
  <div class="text-center">
    <h1>Rentals page!</h1>
    <div class="advs">
      <adv-list :advs="loadedRentals"></adv-list>
    </div>
  </div>
</template>

<script>
import AdvList from "../../components/Advertisements/AdvList";

export default {
  components: {
    AdvList
  },
  computed: {
    loadedRentals() {
      return this.$store.getters.loadedRentals;
    }
  },
  created() {
    this.$store.dispatch('getRentals');
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