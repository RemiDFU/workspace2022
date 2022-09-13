<template>
	<div>
		<HeaderComp />
		<h1>Application page</h1>
		<div class="router-container">
			<router-link to="/">MyHome</router-link> |
			<router-link to="/menu">MenuPage</router-link> |
			<router-link :to="{  name: 'dynamic', params: { id: 33} }">DynamicPage</router-link>
		</div>
		<router-view />
		<FooterPage />
	</div>
</template>

<script>
import FooterPage from './components/FooterPage.vue';
import HeaderComp from './components/HeaderComp.vue';

export default {
	name: 'App',
	components: {
		FooterPage,
		HeaderComp
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
}

.router-container {
	display: none;
}
</style>
