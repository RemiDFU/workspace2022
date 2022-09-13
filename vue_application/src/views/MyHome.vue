<template>
	<div class="home">
		<h2>MyHome</h2>
		<div class="container mt-5">
			<div class="row d-flex justify-content-center">
				<div class="col-md-6">
					<div class="card px-5 py-5" id="form1">
						<div class="form-data" v-if="!submitted">
							<div class="forms-inputs mb-4">
								<span>username</span>
								<input autocomplete="off" type="text" v-model="this.username" />
								<div class="invalid-feedback">A valid email is required!</div>
							</div>
							<div class="forms-inputs mb-4">
								<span>Password</span>
								<input autocomplete="off" type="password" v-model="this.password" />
								<div class="invalid-feedback">
									Password must be 8 character!
								</div>
							</div>
							<div class="mb-3">
								<button class="btn btn-dark w-100" @click="getAuthentificated()">
									Login
								</button>
							</div>
						</div>
						<div class="success-data" v-else>
							<div class="text-center d-flex flex-column">
								<i class="bx bxs-badge-check"></i>
								<span class="text-center fs-1">You have been logged in <br />
									Successfully</span>
							</div>
						</div>
					</div>
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
</style>
