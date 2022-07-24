<script setup>
import { useNav } from '../store/nav'

const nav = useNav()

const emit = defineEmits(['tabLabel'])

const navItems = ['Build trip', 'Review prices', 'Check out']
</script>

<template>
  <nav class="flex items-end justify-between bg-white shadow-md px-10 pt-8">
    <img src="../assets/images/logo.svg" alt="Go to home" class="w-28 mb-3" />
    <ul class="flex items-center font-medium text-sm">
      <li v-for="(item, index) in navItems" :key="index" class="pb-1 mx-5" :class="{'text-primary-color border-b-2 border-primary-color': item.toLocaleLowerCase().includes(nav.activeTab.toLocaleLowerCase())}">{{ index+1 }}. {{ item }}</li>
    </ul>
    <div class="mb-3 text-primary-color uppercase text-sm flex items-center">
      <span class="mr-2">John Doe</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1.2em" height="1.2em" fill="#1277ff" aria-hidden="true" focusable="false" class=""><path fill-rule="evenodd" d="M23.218 12.293l1.414 1.414-7.925 7.925a1 1 0 01-1.32.083l-.094-.083-7.925-7.925 1.414-1.414L16 19.51l7.218-7.217z"></path></svg>
    </div>
  </nav>
</template>
