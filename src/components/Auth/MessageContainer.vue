<template>
  <div>
    <div v-if="response.status === 400" class="error-msg">
      <p>{{response.msg}}</p>
    </div>
    <div v-else class="success-msg">
      <p>{{response.msg}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    response: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.success-msg {
  text-align: center;
  color: white;
  background: lightgreen;
  font-weight: 700;
  margin-top: 20px;
  line-height: 30px;
}
.error-msg {
  text-align: center;
  background: red;
  color: white;
  font-weight: 700;
  margin-top: 20px;
  line-height: 30px;
}
</style>