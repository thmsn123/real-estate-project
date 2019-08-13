<template>
    <div class="text-center">
        <div>
            <button class="btn btn-primary" @click="$router.push('/admin/newpost')">Add new post</button> 
            <button class="btn btn-primary" @click="$router.push('/admin/comments')">Comments</button>
        </div>
    </div>
</template>

<style scoped>
    button { 
        margin: 10px;
    }
</style>

