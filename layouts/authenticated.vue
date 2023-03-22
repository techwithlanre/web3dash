<template>
    <div class="page-wrapper min-h-screen pb-40 overflow-hidden">
        <NavbarTopbar />
        <div class="flex flex-row w-screen gap-16 mt-10">
            <NavbarSidebar />
            <Nuxt />
            <section class="hidden md:flex">
                <div class="p-5 border border-1 rounded-lg border-gray-800 basis-1/8">
                    <div class="p-5 w-96 border border-1 rounded-lg border-gray-800">
                        <div class="flex flex-row justify-between items-center">
                            <h1 class="text-gray-200 text-xl font-semibold">Stats</h1>
                            <p class="px-5 py-2 rounded-full bg-[#8511FF] bg-opacity-10 text-white text-sm">Dashboard</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>

</script>

<style>
* {
    font-family: 'Inter', cursive;
}

.page-wrapper {
    background: radial-gradient(at bottom, #391163,#171524,#13151A);
}
</style>