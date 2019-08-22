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
            <div
              :value="item"
              :class="['popper-content', 'sort-popper-content', {'popper-content-selected': selectedFilterProp === item ? true:false}]"
              @click="filterData($event, 'type')"
            >{{item}}</div>
          </div>
        </v-btn-toggle>
      </div>
      <v-btn small class="standardFiltersButton sortersBtn" text slot="reference">Type</v-btn>
    </popper>
    <popper
      v-if="this.$router.currentRoute.name === 'sales'"
      class="popperWrapper"
      trigger="click"
      :options="{
          placement: 'bottom-start',
          modifiers: { offset: { offset: '0, 5px' } }
        }"
    >
      <div class="popper">
        <v-btn-toggle style="float:left;box-shadow: none; flex-direction: column;">
          <div v-for="(item, index) in salesPriceRanges" :key="index">
            <div
              :value="item"
              :class="['popper-content', 'sort-popper-content', {'popper-content-selected': selectedFilterProp === item ? true:false}]"
              @click="filterData($event, 'price')"
            >{{item | toEuro}}</div>
          </div>
        </v-btn-toggle>
      </div>
      <v-btn small class="standardFiltersButton sortersBtn" text slot="reference">Price</v-btn>
    </popper>
    <popper
      v-else
      class="popperWrapper"
      trigger="click"
      :options="{
          placement: 'bottom-start',
          modifiers: { offset: { offset: '0, 5px' } }
        }"
    >
      <div class="popper">
        <v-btn-toggle style="float:left;box-shadow: none; flex-direction: column;">
          <div v-for="(item, index) in rentalsPriceRanges" :key="index">
            <div
              :value="item"
              :class="['popper-content', 'sort-popper-content', {'popper-content-selected': selectedFilterProp === item ? true:false}]"
              @click="filterData($event, 'price')"
            >{{item | toEuro}}</div>
          </div>
        </v-btn-toggle>
      </div>
      <v-btn small class="standardFiltersButton sortersBtn" text slot="reference">Price</v-btn>
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
            <div
              :value="item"
              :class="['popper-content', 'sort-popper-content', {'popper-content-selected': selectedFilterProp === item ? true:false}]"
              @click="filterData($event, 'location')"
            >{{item}}</div>
          </div>
        </v-btn-toggle>
      </div>
      <v-btn small class="standardFiltersButton sortersBtn" text slot="reference">Location</v-btn>
    </popper>
    <div style="margin-left: 5px">
      <span></span>
      <v-btn small class="clearFilterButton sortersBtn" text slot="reference" @click="clearFilter">X</v-btn>
    </div>
  </div>
</template>

<script>
import Popper from "vue-popperjs";
import "vue-popperjs/dist/vue-popper.css";
import { mapMutations, mapActions } from "vuex";

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
      salesPriceRanges: [
        "to 20000",
        "from 20000 to 50000",
        "from 50000 to 100000",
        "over 10000"
      ],
      rentalsPriceRanges: [
        "to 100",
        "from 100 to 500",
        "from 500 to 1000",
        "over 1000"
      ],
      sortOptions: ["Price", "Distance", "Date"],
      selectedFilterProp: ""
    };
  },
  components: {
    popper: Popper
  },
  methods: {
    ...mapMutations(["FILTER_DATA"]),
    ...mapActions(["getPosts"]),
    filterData(e, filterItem) {
      this.selectedFilterProp = event.target.getAttribute("value");
      this.FILTER_DATA({
        event: e,
        filter: filterItem,
        page: this.$router.currentRoute.name
      });
    },
    clearFilter(e) {
      if (this.$router.currentRoute.name === "sales") {
        this.getPosts("sales");
      } else {
        this.getPosts("rentals");
      }
    }
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
  justify-content: center;
  flex-wrap: wrap;
}
.sortersBtn {
  text-transform: capitalize;
  padding: 0px !important;
  margin: 0px !important;
}
.standardFiltersButton {
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
.clearFilterButton {
  background: #f59696;
  color: #fff !important;
  font-weight: bold;
  box-shadow: 0.07143rem 0.1429rem 0.3571rem 0.07143rem rgba(29, 29, 29, 0.08);
  padding: 0 0.7rem !important;
  font-size: 1rem;
  font-weight: 500;
  top: -0.07143rem;
}
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
  cursor: pointer;
}
.popper-content:hover {
  background: #f3f3f3;
}
</style>