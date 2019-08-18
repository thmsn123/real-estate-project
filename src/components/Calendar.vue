<template>
  <div>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs9 class="mainContainer max-width"></v-flex>
        <date-picker
          v-model="pickerValue"
          format="YYYY-MM-DD"
          ref="datepicker"
          :lang="lang"
          days="lang.days"
          @panel-change="handlePanelChange"
        ></date-picker>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
export default {
  name: "Calendar",
  components: {
    DatePicker
  },
  data() {
    return {
      pickerValue: "",
      lang: {
        days: ["S", "M", "T", "W", "T", "F", "S"],
        months: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        pickers: [
          "next 7 days",
          "next 30 days",
          "previous 7 days",
          "previous 30 days"
        ],
        placeholder: {
          date: "Select Date",
          dateRange: "Select Date Range"
        }
      },
      timePickerOptions: {
        start: "00:00",
        step: "00:30",
        end: "23:30"
      }
    };
  },
  methods: {
    handlePanelChange(panel) {
      if (panel === "NONE") {
        this.$refs.datepicker.showPopup();
      }
    }
  },
  mounted() {
    this.$refs.datepicker.showPopup();
  }
};
</script>

<style>
.container {
  padding: 0 12px !important;
}
.max-width {
  max-width: 830px !important;
}
.mx-datepicker-popup {
  border: none !important;
  box-shadow: none !important;
  -webkit-box-shadow: none !important;
  left: -1.42rem !important;
  top: -0.5rem !important;
}
.mx-calendar-header {
  color: #3a3a3a;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: 600;
}
.mx-panel thead {
  color: #007bff !important;
}
.cur-month {
  color: #3a3a3a !important;
  font-weight: 500;
}
.last-month {
  color: #c4c4c4 !important;
}
.next-month {
  color: #c4c4c4 !important;
}
.mx-calendar {
  padding: 0 12px 6px 12px;
}
.mx-calendar div {
  background: white;
  font-family: roboto;
  font-size: 1rem;
}
.actived {
  border-radius: 1.571rem;
  box-shadow: 0 0 0 0.1429rem #007bff;
  border: none;
  border-radius: 1.429rem;
  font-weight: bold;
  color: #007bff !important;
  background-color: white !important;
}
.cell:hover {
  border-radius: 1.429rem;
}
</style>