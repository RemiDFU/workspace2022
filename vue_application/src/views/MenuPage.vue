<template>
    <h2>MenuPage</h2>
    <button @click="goHome()">Go home</button>
</template>

<script>
export default {
    methods: {
        goHome () {
            this.$router.push({ name: 'home'});
        }
    }
}
</script>
