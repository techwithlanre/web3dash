<template>
  <div class="flex flex-col items-center justify-center mt-10" style="margin-top: 150px;">
    <p class="text-gray-400 font-inter">Learn, Study and Share</p>
    <h1 class="text-white font-inter font-extrabold text-5xl mt-3">Get everything Web3 here</h1>
    <p></p>
    <span class="" style="margin-left: 250px">
        <svg width="100" height="12" viewBox="0 0 100 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 10C8.27729 6.33331 25.8135 0.499949 41.7402 6.49998C61.6485 14 69.6965 -1.99999 81.9804 4.00001C91.8074 8.8 97.0881 4 98.5 1" stroke="#1F93FF" stroke-width="3"/>
        </svg>
    </span>
    <div class="h-max bg-[#202328] p-5 mt-10 rounded-full flex flex-row gap-4" style="width: 40%">
        <input type="text" class="font-inter border pl-5 h-12 w-9/12 border-none focus:border-none active:border-none bg-inherit form-control text-xl text-gray-500 rounded-full transition ease-in-out m-0" id="" placeholder="Search"/>
        <div>
            <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="m-auto text-white font-inter bg-[#3A3C40] hover:bg-[#8511FF] h-12 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Topic 
                <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            <!-- Dropdown menu -->
            <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                <li>
                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                </li>
                </ul>
            </div>
        </div>
        <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="m-auto text-white font-inter bg-[#8511FF] h-12 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Search</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>