<template>
    <h2>Dynamic Page</h2>
    <p>identifiant: {{ id }}</p>
</template>

<script>
export default {
    props: ['id'],
    created() {
        setTimeout(() => {
            console.log(this.id);
        }, 500);
    }
}
</script>
