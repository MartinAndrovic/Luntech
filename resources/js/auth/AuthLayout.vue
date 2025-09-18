<template>
    <div class="authForm">
        <router-view/>
    </div>
</template>


<script>
export default {
    name: "AuthLayout"
}
</script>


<style scoped>

.authForm{
    border:  4px solid black;
}
</style>