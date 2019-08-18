<template>
  <div>
    <calendar class="calendar"></calendar>
    <banners></banners>
  </div>
</template>

<script>
import Calendar from "../components/Calendar"
import Banners from "../components/Banners"

export default {
    components: {
        Calendar,
        Banners
    }
}
</script>

<style scoped>
    .calendar{ 
        margin: 3px 0;
    }
</style>