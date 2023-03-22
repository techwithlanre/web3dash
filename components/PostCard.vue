 <template>
  <div>
    <div v-for="post in posts" v-bind:key="post.title" class="w-full p-5 bg-[#1C1D1F] mt-12 border border-gray-700 rounded-lg">
        <div class="flex flex-row justify-between">
            <p class="text-xl text-white font-inter">{{ post.title }}</p>
            <div>
                <nuxt-link to="post/${ post.slug }">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7" stroke="#626366" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7 7H17V17" stroke="#626366" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </nuxt-link>
            </div>
        </div>
        <p class="text-sm text-gray-500 font-inter mt-2">{{ post.description }}</p>
        <div class="flex flex-row gap-5 mt-8">
            <div class=" bg-[#34230E] rounded-full px-0 pr-5 text-sm font-inter text-[#FB9C2B] flex flex-row gap-3 items-center">
                <div class="p-1 h-8 w-8 rounded-full bg-gray-400 bg-[url('https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png')] bg-cover"></div>
                {{ post.author }}
            </div>
            <p class="p-2 bg-[#383633] rounded-full px-5 text-sm font-inter text-[#C6C6C6]">{{ post.time }}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        posts: [
            {
                title: 'Things you can sell as an NFT',
                description: 'Read everything you need to know about selling your first nft items',
                author: 'Jamiu Olanrewaju',
                time: '5 mins',
                slug:'things-you-can-sell-as-an-NFT'
            },
            {
                title: 'How to buy yout first Bitcoin',
                description: 'Read everything you need to know about selling your first nft items',
                author: 'Adeosun Abiola',
                time: '3 mins',
                slug:'things-you-can-sell-as-an-NFT'
            },
            {
                title: 'Use cases of ethereum',
                description: 'Read everything you need to know about selling your first nft items',
                author: 'Mark Ametuo',
                time: '5 mins',
                slug:'things-you-can-sell-as-an-NFT'
            },
            {
                title: 'How to gain what I lost in crypto currency',
                description: 'Read everything you need to know about selling your first nft items',
                author: 'Jamiu Olanrewaju',
                time: '5 mins',
                slug:'things-you-can-sell-as-an-NFT'
            },
        ]
      }
    }
}
</script>

<style>

</style>