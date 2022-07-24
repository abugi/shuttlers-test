<script setup>
import { useNav } from '../store/nav'
import ToggleTheme from './ToggleTheme.vue'

const nav = useNav()

const emit = defineEmits(['tabLabel'])

const navItems = ['Build trip', 'Review prices', 'Check out']
</script>

<template>
  <nav class="flex items-end justify-between bg-white shadow-md lg:px-10 xl:px-10 md:px-8 px-3  pt-8 relative">
    <img src="../assets/images/logo.svg" alt="Go to home" class="xl:w-28 lg:w-24 md:w-24 w-24 mb-3 cursor-pointer" @click="$router.push({ name: 'dahsboard' })" />
    <ul class="flex items-center font-medium text-sm xl:static lg:static md:static absolute top-20">
      <li v-for="(item, index) in navItems" :key="index" class="pb-1 xl:mx-5 lg:mx-5 md:mx-4 mx-3" :class="{'text-primary-color border-b-2 border-primary-color': item.toLocaleLowerCase().includes(nav.activeTab.toLocaleLowerCase())}">{{ index+1 }}. {{ item }}</li>
    </ul>
    <div class="mb-3 text-primary-color uppercase text-sm flex items-center">
      <ToggleTheme />
      <span class="mr-2 ml-6">John Doe</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1.2em" height="1.2em" fill="#1277ff" aria-hidden="true" focusable="false" class=""><path fill-rule="evenodd" d="M23.218 12.293l1.414 1.414-7.925 7.925a1 1 0 01-1.32.083l-.094-.083-7.925-7.925 1.414-1.414L16 19.51l7.218-7.217z"></path></svg>
    </div>
  </nav>
</template>
