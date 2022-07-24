<script setup>
import { useSummaryStore } from '../store/orderSummary'

const summary = useSummaryStore()
</script>

<template>
  <h1>Order summary</h1>
  <div>{{ summary.order }}</div>
</template>
