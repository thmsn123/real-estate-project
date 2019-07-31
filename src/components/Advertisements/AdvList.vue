<template>
  <section class="advertisement-list">
    <advertisement-preview
      v-for="adv in advs"
      :key="adv.id"
      :id="adv.id"
      :thumbnail="adv.thumbnail"
      :title="adv.title"
      :previewText="adv.previewText"
    />
  </section>
</template>

<script>
import AdvertisementPreview from './AdvPreview'

export default {
  name: "advertisementList",
  components: {
      AdvertisementPreview
  },
  props: {
    advs: {
      type: Array,
      required: true
    }
  }
};
</script>


<style scoped>
.advertisement-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>