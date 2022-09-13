<template>
	<div class="home" style="margin-bottom: 10%;">
		<div class="form-login-container mt-5">
			<div class="row d-flex justify-content-center" style="width: 100%;">
				<div class="col-md-6">
					<main class="form-signin w-100 m-auto">
					<form>
						<h1 class="h3 mb-3 fw-normal">Please sign in</h1>
						<div class="fields-container">
							<div class="form-floating">
								<input type="username" class="form-control field-login" id="floatingInput" v-model="this.username"/>
								<label for="floatingInput" class="label-input-login">Username</label>
							</div>
							<div class="invalid-feedback">A valid username is required</div>
							<div class="form-floating">
								<input type="password" class="form-control field-login" id="floatingPassword" v-model="this.password"/>
								<label for="floatingPassword" class="label-input-login">Password</label>
							</div>
							<div class="invalid-feedback">A valid password is required</div>
							<button class="w-100 btn btn-lg btn-dark btn-primary btn-container" @click="getAuthentificated()">Sign in</button>
							<p class="mt-5 mb-3 text-muted">2022</p>
						</div>
					</form>
					</main>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			authentificated: false,
			username: "",
			password: "",
		};
	},
	methods: {
		getAuthentificated() {
			console.log("username: " + this.username, "password: " + this.password);
			console.log("COND IF", this.username === "test" && this.password === "test");
			if (this.username == "test" && this.password == "test") {
				this.authentificated = true;
				this.$router.push({ name: "menu" });
			} else {
				this.authentificated = false;
				console.log("not authentificated");
			}
		},
	},
	components: {}
};
</script>
<style scoped>
body {
	background: #000;
}

.card {
	border: none;
	height: 320px;
}

.forms-inputs {
	position: relative;
}

.forms-inputs span {
	position: absolute;
	top: 8px;
	left: 10px;
	background-color: #fff;
	padding: 5px 10px;
	font-size: 15px;
}

.forms-inputs input {
	height: 50px;
	border: 2px solid #eee;
}

.forms-inputs input:focus {
	box-shadow: none;
	outline: none;
	border: 2px solid #000;
}

.btn {
	height: 50px;
}

.success-data {
	display: flex;
	flex-direction: column;
}

.bxs-badge-check {
	font-size: 90px;
}
.fields-container {
    width: 50%;
    display: inline-grid;
}
.btn-container {
	margin-top: 30px;
}
.field-login {
	height: 90%;
}
.label-input-login {
	width: 35%;
} 
.floatingInput {
	padding-left: 20px;
}
</style>
