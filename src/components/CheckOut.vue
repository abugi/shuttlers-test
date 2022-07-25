<script setup>
import { ref } from 'vue';
import AppButton from '../components/AppButton.vue'
import { useSummaryStore } from '../store/orderSummary'
import { useTrip } from '../store/trip'

const currentTrip = useTrip()
const summary = useSummaryStore()

const promoCode = ref(null)
</script>

<template>
  <section class="flex items-start p-20 text-sm">
    <form class="shadow p-6 w-full">
      <h1>Contact details</h1>
      <div>
        <label for="first-name">First name</label>
        <input type="text" id="first-name">
      </div>

    </form>

    <form class="shadow p-6 w-1/3 flex-shrink-0 mx-8">
      <h1>Payment details</h1>
      <div>
        <label for="first-name">First name</label>
        <input type="text" id="first-name">
      </div>

    </form>
    <aside class="shadow p-6 w-1/3 flex-shrink-0">
      <div>
        <h1 class="font-semibold">
          <span class="capitalize">{{ currentTrip.trip.departureLocation }}</span>
           to 
           <span class="capitalize">{{ currentTrip.trip.destination }}</span>
        </h1>
        <div class="text-gray-400 my-3 text-center border-b border-gray-100 pb-4 mb-6 font-medium">{{ currentTrip.trip.departureDate.toDateString() }}</div>
        <div class="text-xs flex items-center justify-between ">
          <span>{{ currentTrip.trip.passengers }} passenger<span v-if="currentTrip.trip.passengers > 1">s</span></span>
          <router-link to="#" class="text-primary-color">View itenerary</router-link>
        </div>
         <div class="w-full my-6">
        <header class="font-semibold text-lg text-center">
          {{ summary.order.vehicleType }} x {{summary.order.quantity}}
        </header>
        <div class="w-full mt-8">
          <div class="flex justify-between my-3">
            <div>{{ summary.order.vehicleType }} x {{summary.order.quantity}} with driver</div>
            <div>${{summary.order.price}}</div>
          </div>
          <div class="flex justify-between my-3">
            <div>Service fee</div>
            <div>${{summary.order.serviceFee}}</div>
          </div>
          <div class="flex justify-between my-3">
            <div>Gratuity</div>
            <div>${{summary.order.gratuity}}</div>
          </div>
          <div class="flex justify-between py-3 font-bold border-t border-gray-100 dark:border-gray-700">
            <div>Subtotal</div>
            <div>${{summary.order.subtotal}}</div>
          </div>
          <div class="flex justify-between py-3 border-b border-gray-100 dark:border-gray-700">
            <div>FICAV</div>
            <div>${{summary.order.ficav}}</div>
          </div>
          <div class="flex justify-between my-6 font-bold">
            <div>Total (USD)</div>
            <div>${{summary.order.grandTotal}}</div>
          </div>
        </div>
        <div>
          <input type="text" placeholder="Promo code" class="border border-gray-200 p-2 rounded mr-2 text-sm">
          <app-button class="bg-transparent text-primary-color border border-gray-100 px-4">
          <template v-slot:btn-text>
            <span>Apply</span>
          </template>
        </app-button>
        </div>
        <div class="flex items-center my-8">
            <input v-model="promoCode" type="check" name="promo" id="promo" class="cursor-pointer w-4 h-4 border border-gray-300 rounded mr-2" checked>
            <label for="promo">
              <span>I accept the </span><router-link to="#" class="text-primary-color">terms of service</router-link>
            </label>
        </div>
        <app-button class="block w-full bg-primary-color text-white" @click="continueToPayment">
          <template v-slot:btn-text>
            <span>Complete booking</span>
          </template>
        </app-button>
      </div>
      </div>
    </aside>
  </section>
</template>
