<template>
  <div class="text-center container my-3">
    <div>
      <router-link class="btn btn-primary" :to="{path: '/admin/newpost'}">Add New Post</router-link>
      <router-link class="btn btn-primary" :to="{path: '/admin/comments'}">Comments</router-link>
    </div>
  </div>
</template>

<style scoped>
.btn {
  margin: 10px;
}
</style>

