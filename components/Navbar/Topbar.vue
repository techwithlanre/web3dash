<template>
  <nav class="bg-transparent top-0 border-b border-1 border-gray-800">
		<div class="px-4 md:px-20 mx-auto">
			<div class="flex justify-between">
				<div class="flex space-x-7 mt-6">
					<div>
						<!-- Website Logo -->
						<a href="#" class="flex items-center py-4 px-2">
							<!-- <img src="logo.png" alt="Logo" class="h-8 w-8 mr-2"> -->
							<span class="font-semibold text-white text-xl logo-text" style="">Web3Dash</span>
						</a>
					</div>
					<!-- Primary Navbar items -->
					<!-- <div class="hidden md:flex flex-row items-center justify-center w-full">
						<input type="text" class="rounded-full px-6 py-3 w-full mx-auto" name="" id="">
					</div> -->
				</div>
				<!-- Secondary Navbar items -->
				<div class="hidden md:flex items-center space-x-10">
					<a v-if="!isLoggedIn" href="/onboard?next=/" class="py-3 px-4 font-inter font-medium border border-lg text-white bg-transparent hover:bg-white hover:text-gray-900 rounded-full transition duration-300">Become an author</a>
					<a v-if="!isLoggedIn" href="" class="py-3 px-4 font-inter font-medium text-white bg-[#8511FF] hover:bg-black rounded-full transition duration-300" style="">Get Started</a>
					<a v-if="isLoggedIn" href="" class="py-3 px-8 font-inter font-medium text-white bg-[#8511FF] hover:bg-black rounded-full transition duration-300" style="">
						Write
					</a>
				</div>
				<!-- Mobile menu button -->
				<div class="md:hidden flex items-center">
					<button class="outline-none mobile-menu-button">
					<svg class=" w-6 h-6 text-gray-500 hover:text-green-500"
						x-show="!showMenu"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>
				</div>
			</div>
		</div>
		<!-- mobile menu -->
		<div class="hidden mobile-menu">
			<ul class="">
				<li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
				<li><a href="#services" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
				<li><a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
				<li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			isLoggedIn: true
		}
	}
}
</script>

<style scoped>
.logo-text {
    font-family: 'Irish Grover', cursive;
    letter-spacing: 0.1cm;
    font-size: 24px !important;
}
</style>>
