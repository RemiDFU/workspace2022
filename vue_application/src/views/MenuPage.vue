<template>
    <div class="menu-container">
        <div class="row">
            <h2>MenuPage</h2>
        </div>
        <button class="btn btn-dark col text-center" @click="goHome()">Go home</button>
    </div>
</template>

<script>

export default {
    methods: {
        goHome() {
            this.$router.push({ name: "home" });
        }
    },
    components: {}
}
</script>
