<template>
  <div class="filtersWrapper">
    <span class="filterText">Filter by:</span>
    <popper
      class="popperWrapper"
      trigger="click"
      :options="{
          placement: 'bottom-start',
          modifiers: { offset: { offset: '0, 5px' } }
        }"
    >
      <div class="popper">
        <v-btn-toggle style="float:left;box-shadow: none; flex-direction: column;">
          <div v-for="(item, index) in types" :key="index">
            <div class="popper-content" @click="filterData($event, 'type')">{{item}}</div>
          </div>
        </v-btn-toggle>
      </div>
      <v-btn small class="whiteTextBtn sortersBtn" text slot="reference">Type</v-btn>
    </popper>
    <popper
      class="popperWrapper"
      trigger="click"
      :options="{
          placement: 'bottom-start',
          modifiers: { offset: { offset: '0, 5px' } }
        }"
    >
      <div class="popper">
        <v-btn-toggle style="float:left;box-shadow: none; flex-direction: column;">
          <div v-for="(item, index) in priceRanges" :key="index">
            <div class="popper-content" @click="filterData($event, 'price')">{{item | toEuro}}</div>
          </div>
        </v-btn-toggle>
      </div>
      <v-btn small class="whiteTextBtn sortersBtn" text slot="reference">Price</v-btn>
    </popper>
    <popper
      class="popperWrapper"
      trigger="click"
      :options="{
          placement: 'bottom-start',
          modifiers: { offset: { offset: '0, 5px' } }
        }"
    >
      <div class="popper">
        <v-btn-toggle style="float:left;box-shadow: none; flex-direction: column;">
          <div v-for="(item, index) in locations" :key="index">
            <div class="popper-content" @click="filterData($event, 'location')">{{item}}</div>
          </div>
        </v-btn-toggle>
      </div>
      <v-btn small class="whiteTextBtn sortersBtn" text slot="reference">Location</v-btn>
    </popper>
    <popper
      class="popperWrapper"
      trigger="click"
      :options="{
          placement: 'bottom-start',
          modifiers: { offset: { offset: '0, 5px' } }
        }"
    >
      <div class="popper">
        <v-btn-toggle style="float:left;box-shadow: none; flex-direction: column;">
          <div v-for="(item, index) in sortOptions" :key="index">
            <div class="popper-content">{{item}}</div>
          </div>
        </v-btn-toggle>
      </div>
      <v-btn small class="whiteTextBtn sortersBtn" text slot="reference">Sort</v-btn>
    </popper>
  </div>
</template>

<script>
import Popper from "vue-popperjs";
import "vue-popperjs/dist/vue-popper.css";
import { mapMutations } from "vuex";

export default {
  name: "Filters",
  props: {
    loadedPosts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      types: [
        "One bedrooms apartment",
        "Two bedrooms apartment",
        "Three bedrooms apartment",
        "House/villa",
        "Rural property"
      ],
      locations: [
        "Kavarna",
        "Balchik",
        "Bulgarevo",
        "Mogilishte",
        "Kamen Bryag",
        "Tyulenovo"
      ],
      priceRanges: [
        "to 20000",
        "from 20000 to 50000",
        "from 50000 to 100000",
        "over 10000"
      ],
      sortOptions: ["Price", "Distance", "Date"]
    };
  },
  components: {
    popper: Popper
  },
  methods: {
    ...mapMutations(["FILTER_DATA"]),
    filterData(e, filterItem) {
      this.FILTER_DATA({ event: e, filter: filterItem, page: this.$router.currentRoute.name });
    },
    sortData(e) {}
  }
};
</script>

<style scoped>
.popperWrapper {
  margin: 0 5px;
}
.filterText {
  font-weight: bold;
}
.filtersWrapper {
  margin: 20px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  flex-wrap: wrap;
}
.sortersBtn {
  text-transform: capitalize;
  padding: 0px !important;
  margin: 0px !important;
}
.whiteTextBtn {
  color: #000;
  background: #fff;
  font-weight: bold;
  box-shadow: 0.07143rem 0.1429rem 0.3571rem 0.07143rem rgba(29, 29, 29, 0.08);
  padding: 0 0.7rem !important;
  font-size: 1rem;
  font-weight: 500;
  color: #3a3a3a;
  top: -0.07143rem;
}
#popper-content-selected,
.popper-content-selected {
  background: #f4f4f4ad;
  font-weight: bold;
}
.popper-content {
  text-transform: capitalize;
  padding: 0 0.7142rem;
  color: #3a3a3a !important;
  height: 2.4285rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.popper-content:hover {
  background: #f3f3f3;
}
</style>