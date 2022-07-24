<script setup>
import { ref } from 'vue'
import { useThemeStore } from '../store/theme'

const themeMode = useThemeStore()

const checked = ref(true)

const toggleTheme = () => {
    const parentNode = document.documentElement

    if(themeMode.theme === 'light') {
        parentNode.classList.add('dark')
        themeMode.theme = 'dark'
    }else {
        parentNode.classList.remove('dark')
        themeMode.theme = 'light'
    }
}
</script>

<template>
  <label title="Change theme" class="switch relative mr-6">
    <img
      v-if="checked"
      src="../assets/images/dark-mode.svg"
      alt="light mode"
      class="absolute left-3 top-1.5 z-10"
    />
    <img
      v-else
      src="../assets/images/light-mode.svg"
      alt="light mode"
      class="absolute right-3 top-1.5 z-10"
    />
    <input v-model="checked" type="checkbox" checked @change="toggleTheme" />
    <span class="slider round"></span>
  </label>
</template>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 24px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #1277ff;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #1277ff;
}

input:focus + .slider {
  box-shadow: 0 0 1px #1277ff;
}

input:checked + .slider:before {
  -webkit-transform: translateX(34px);
  -ms-transform: translateX(34px);
  transform: translateX(34px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>