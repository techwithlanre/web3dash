<template>
  <section class="">
    <div class="flex flex-col items-center justify-center mt-10" style="margin-top: 150px;">
      <div>
          <div class="text-white text-xl md:text-2xl mb-10 md:mb-0 font-bold">
            Sign Up / Log In
          </div>
          <div class="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-64 lg:max-w-7xl">
            <div>
              <div class="flex flex-col md:flex-row xs:p-10 gap-10 sm:w-full">
                <div id="google-button" class="px-5 py-3 bg-blue-700 rounded-full md:mt-10 flex flex-row justify-center gap-2 items-center">
                  <img class="h-5 w-5" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="">
                  <h1 class="text-white text-center text-[12px]">Continue with Google</h1>
                </div>
                <div id="apple-button" class="px-5 py-3 bg-white rounded-full md:mt-10 flex flex-row justify-center gap-2 items-center">
                  <img class="h-5 w-5" src="https://alchemyimmersive.com/wp-content/uploads/sites/4/2020/04/apple-logo-transparent.png" alt="">
                  <h1 class="text-gray-900 text-center text-[12px]">Continue with Apple</h1>
                </div>
              </div>
              <div class="mt-20">
                <p class="flex flex-row text-white">Or continue with magic link</p>
                <div class="mt-9">
                  <input type="text" class="px-10 py-3 w-full rounded-full" placeholder="Enter your email address">
                  <button class="mt-5 text-center w-full text-gray-300 p-3 bg-purple-600 rounded-full justify-center">Continue</button>
                </div>
              </div>
            </div>
            <div class="hidden mt-20 px-10 md:px-0 md:flex flex-col">
              <div class="">
                <p class="text-white">"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old 🤯."</p>
                <div class="mt-5 flex flex-row gap-4">
                  <img class="h-12 w-12 rounded-full" src="https://hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1645091032744%2FUERdc-IVr.jpeg%3Fauto%3Dcompress&w=1920&q=75" alt="">
                  <div>
                    <p class="text-white font-semibold">Jamiu Olanrewaju</p>
                    <p class="text-xs text-gray-500">Fullstack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {

  },
  created() {
    console.log(this.$route.query.current)
  }
}
</script>

<style>

</style>
