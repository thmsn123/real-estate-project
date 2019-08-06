<template>
  <div class="text-center">
    <h1>This is For Sale page!</h1>
    <div class="advs">
      <adv-list :advs="loadedSales"></adv-list>
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
    loadedSales() {
      return this.$store.getters.loadedSales;
    }
  },
  created() {
    this.$store.dispatch('getSales');
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