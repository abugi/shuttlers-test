<script setup>
import AppAlert from './components/AppAlert.vue'
import { useValidation } from './store/dataValidation'

const dataValidation = useValidation()
</script>

<template>
<AppAlert v-if="dataValidation.isValidationError" />
  <router-view></router-view>
</template>
