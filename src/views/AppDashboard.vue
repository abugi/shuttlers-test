<template>
  <AppBar @tab-label="toggleInterface" />
  <component :is="activeTab" />
</template>

<script>
import AppBar from '../components/AppBar.vue'
import BuildTrip from '../components/BuildTrip.vue'
import ReviewPrices from '../components/ReviewPrices.vue'
import CheckOut from '../components/CheckOut.vue'

export default {
  name: 'Dashboard',
  components:{
    AppBar, BuildTrip, ReviewPrices, CheckOut
  },
  data(){
    return {
      activeTab: 'BuildTrip'
    }
  },
  methods:{
    toggleInterface(payload) {
      this.activeTab = this.transformString(payload)
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    transformString(string) {
      const splitString = string.split(' ')
      const transformedString = splitString.map(data => this.capitalizeFirstLetter(data)).join().replace(',', '')

      return transformedString
    }
  }
}
</script>
