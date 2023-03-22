<template>
  <section class="w-full mx-auto">
    <div class="mt-20">
        <div>
            <h1 class="text-3xl text-white font-inter font-semibold">Featured Posts</h1>
            <PostCard />
        </div>
    </div>
  </section>
</template>

<script>
import PostCard from '../PostCard.vue';
export default {
    components: { PostCard, PostCard }
}
</script>

<style>

</style>