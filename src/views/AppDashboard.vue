<template>
  <AppBar />
  <component :is="activeTab" />
</template>

<script>
import AppBar from '../components/AppBar.vue'
import Trip from '../components/BuildTrip.vue'
import Prices from '../components/ReviewPrices.vue'
import Check from '../components/CheckOut.vue'
import { mapState } from 'pinia'
import { useNav } from '../store/nav'

export default {
  name: 'Dashboard',
  components:{
    AppBar, Trip, Prices, Check
  },
  computed: {
     ...mapState(useNav, ['activeTab'])
  }
}
</script>
