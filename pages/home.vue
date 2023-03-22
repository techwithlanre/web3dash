<template>
  <section class="basis-7/8">
    <div class="rounded-lg bg-[#1E1431] border border-1 border-gray-800">
        <h1 class="text-gray-300 p-3 rounded-t-lg bg-[#171524]">Recommended Profiles</h1>
        <div class="hidden md:flex flex-row gap-5 p-5 ">
            <div v-for="pro in pros" :key="pro.id" class="p-1 h-16 w-16 rounded-full bg-gray-400 bg-[url('https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png')] bg-cover"></div>
        </div>
    </div>
    <HomePosts />
  </section>
</template>

<script>
export default {
    layout: 'authenticated',
    data() {
        return {
            'pros': [
                {
                    id:1,
                    image: 'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png'
                },
                {
                    id:2,
                    image: 'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png'
                },
                {
                    id:3,
                    image: 'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png'
                },
                {
                    id:4,
                    image: 'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png'
                },
                {
                    id:5,
                    image: 'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png'
                },
                {
                    id:6,
                    image: 'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png'
                },
                {
                    id:7,
                    image: 'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png'
                },
                {
                    id:8,
                    image: 'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png'
                },
                {
                    id:8,
                    image: 'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png'
                },
                {
                    id:8,
                    image: 'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png'
                },
                {
                    id:8,
                    image: 'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png'
                },
            ]
        }
    }
}
</script>

<style>

</style>