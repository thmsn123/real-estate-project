<template>
    <div class="text-center">
        <div>
            <button class="btn btn-primary" @click="$router.push('/admin/newpost')">Create New Advertisement</button> 
            <button class="btn btn-primary">Log Out</button>
        </div>
        <h1>Advertisements List</h1>
    </div>
</template>

<style scoped>
    button { 
        margin: 10px;
    }
</style>

