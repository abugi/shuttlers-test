<script setup>
import { computed, ref } from 'vue'
import { useTrip } from '../store/trip'
import { useVehicles } from '../store/vehicles'
import { useNav } from '../store/nav'
import { useSummaryStore } from '../store/orderSummary'
import AppButton from '../components/AppButton.vue'
import safetyInfo from '../util/safetyInfo'

const tripDetails = useTrip()
const availableVehicles = useVehicles()
const nav = useNav()
const summary = useSummaryStore()

let currentOrder = ref(availableVehicles.vehicles[0])

// Order information
const orderBus = (item) => {
  currentOrder.value = item
}

// a compute subtotal
const subtotal = computed(() => {
  let sum

  if(currentOrder.value) {
    sum = currentOrder.value.price + currentOrder.value.serviceFee + currentOrder.value.gratuity
  }

  return sum
})

// a compute grandtotal
const grandTotal = computed(() => {
  let sum

  if(currentOrder.value) {
    sum = currentOrder.value.price + currentOrder.value.serviceFee + currentOrder.value.gratuity + currentOrder.value.ficav
  }

  return sum
})

const continueToPayment = () => {
  nav.activeTab = 'Check'
  summary.order = {
    serviceFee: currentOrder.value.serviceFee,
    gratuity: currentOrder.value.gratuity,
    ficav: currentOrder.value.ficav,
    vehicleType: currentOrder.value.vehicleType,
    quantity: currentOrder.value.quantity,
    price: currentOrder.value.price, 
    subtotal,
    grandTotal

  }

}

</script>

<template>
  <section class="xl:w-3/4 lg:w-3/4 md:w-3/4 w-11/12 max-w-screen-xl mx-auto flex xl:flex-row lg:flex-row md:flex-row flex-col text-sm py-20">
    <main class="w-full mr-8">
      <div class="border border-gray-100 dark:border-gray-700 border-b-0 px-3">
        <div class="flex items-center justify-center capitalize pt-20 pb-8 font-medium xl:text-lg lg:text-lg md:text-lg text-sm">
          <div>{{ tripDetails.trip.departureLocation }}</div>
          <img src="https://www.seekpng.com/png/small/16-162719_long-arrow-right-svg-png-icon-free-download.png" class="w-6 mx-3">
          <div>{{ tripDetails.trip.destination }}</div>
        </div>
        <div class="pb-8 text-gray-400 text-center">{{ tripDetails.trip.departureDate.toDateString() }}</div>
      </div>
      <div v-for="(item, index) in availableVehicles.vehicles" :key="index" class="dashboard flex xl:flex-row lg:flex-row md:flex-row flex-col items-center py-12 xl:pl-8 lg:pl-8 md:pl-6 pl-3 xl:pr-16 lg:pr-16 md:pr-12 pr-3 relative border border-gray-100 dark:border-gray-700 border-b-0 cursor-pointer" :class="{'bg-[#F0F9FE] dark:bg-gray-800': currentOrder.vehicleType === item.vehicleType}" @click="orderBus(item)">
        <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 w-full">
          <img :src="item.image" :alt="item.vehicleType" class="w-4/5">
        </div>
        <div class="xl:w-3/5 lg:w-3/5 md:w-3/5 w-full xl:pl-6 lg:pl-6 md:pl-4 pl-0">
          <div class="flex items-center">
            <h1 class="text-xl font-bold">{{ item.vehicleType }}</h1>
            <input v-if="currentOrder.vehicleType === item.vehicleType" v-model="currentOrder.quantity" type="text" class="ml-3 w-12 h-6 border border-gray-200 dark:bg-transparent dark:border-gray-700 rounded focus:outline-none px-2">
          </div>
          <div class="text-[#9ea9b0] text-xs mt-3 mb-5">Seats a total of {{ item.numberOfSeats }} passengers</div>
          <div>{{ item.description }}</div>
        </div>
        <div class="absolute right-8 top-12">${{currentOrder.price}}</div>
        <div v-if="currentOrder.vehicleType === item.vehicleType" class="label"></div>
      </div>
    </main>
    <aside class="xl:w-[30%] lg:w-[30%] md:w-[30%] w-full flex-shrink-0">
      <div v-if="currentOrder" class="w-full p-6 shadow rounded mb-6">
        <header class="font-semibold text-lg text-center">
          {{ currentOrder.vehicleType }} x {{currentOrder.quantity}}
        </header>
        <div class="w-full mt-8">
          <div class="flex justify-between my-4">
            <div>{{ currentOrder.vehicleType }} x {{currentOrder.quantity}} with driver</div>
            <div>${{currentOrder.price}}</div>
          </div>
          <div class="flex justify-between my-4">
            <div>Service fee</div>
            <div>${{currentOrder.serviceFee}}</div>
          </div>
          <div class="flex justify-between my-4">
            <div>Gratuity</div>
            <div>${{currentOrder.gratuity}}</div>
          </div>
          <div class="flex justify-between py-4 font-bold border-t border-gray-100 dark:border-gray-700">
            <div>Subtotal</div>
            <div>${{subtotal}}</div>
          </div>
          <div class="flex justify-between py-4 border-b border-gray-100 dark:border-gray-700">
            <div>FICAV</div>
            <div>${{currentOrder.ficav}}</div>
          </div>
          <div class="flex justify-between my-8">
            <div>Total (USD)</div>
            <div>${{grandTotal}}</div>
          </div>
        </div>
        <app-button class="block w-full bg-primary-color text-white" @click="continueToPayment">
          <template v-slot:btn-text>
            <span>Continue to payment</span>
          </template>
        </app-button>
        
        <app-button class="block w-full text-primary-color border border-gray-200 dark:border-gray-700 mt-4">
          <template v-slot:btn-text>
            <span>Book now, pay later</span>
          </template>
        </app-button>
      </div>

      <div class="w-full p-6 shadow rounded">
        <header class="font-semibold text-base text-center">
          What we are doing to ensure your health and safety
        </header>
        <div v-for="(item, index) in safetyInfo" :key="index" class="flex my-8">
          <div class="w-1/5 flex-shrink-0"></div>
          <div class="w-full">
            <h1 class="font-semibold mb-2">{{ item.title }}</h1>
            <p class="text-xs text-gray-500">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </aside>
  </section>
</template>

<style scoped>
.label {
content: '';
width: 5px;
height: 100%;
background-color: blue;
position: absolute;
left: 0;
top: 0;
}
</style>