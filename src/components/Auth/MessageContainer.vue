<template>
  <div>
    <div v-if="response.status === 400" class="error-msg alert alert-danger">
      <p>{{response.msg}}</p>
    </div>
    <div v-if="response.status === 200" class="success-msg alert alert-success">
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
  /* text-align: center;
  color: white;
  background: lightgreen;
  font-weight: 700;
  line-height: 30px; */
  margin-top: 20px;
}
.error-msg {
  /* text-align: center;
  background: red;
  color: white;
  font-weight: 700;
  line-height: 30px; */
  margin-top: 20px;
}
</style>