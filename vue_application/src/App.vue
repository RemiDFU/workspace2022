<template>
	<h1>Application page</h1>
	<router-link to="/">MyHome</router-link> |
	<router-link to="/menu">MenuPage</router-link> |
	<router-link :to="{  name: 'dynamic', params: { id: 33} }">DynamicPage</router-link>
	<router-view/>
</template>

<script>

export default {
	name: 'App',
	components: {
	}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
