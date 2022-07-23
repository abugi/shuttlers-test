<script setup>
import {ref} from 'vue'
const emit = defineEmits(['tabLabel'])

let activeTab = ref('build trip')

const navItems = ['Build trip', 'Review prices', 'Check out']

const toggleInterface = (event) => {
    const value = event.target.textContent.split('.')[1].trim()
    activeTab.value = value.toLowerCase()
    emit('tabLabel', value)
}
</script>

<template>
  <nav class="flex items-end justify-between bg-white shadow-md px-6 pt-8">
    <img src="../assets/images/logo.svg" alt="Go to home" class="w-24 mb-3" />
    <ul class="flex items-center font-medium text-sm" @click.stop="toggleInterface">
      <li v-for="(item, index) in navItems" :key="index" class="pb-1 cursor-pointer mx-5" :class="{'text-primary-color border-b-2 border-primary-color': activeTab.includes(item.toLowerCase())}">{{ index+1 }}. {{ item }}</li>
    </ul>
    <div class="mb-3">
      <span>John Doe</span>
    </div>
  </nav>
</template>
