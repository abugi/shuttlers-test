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
  <section class="flex xl:flex-row lg:flex-row md:flex-col flex-col items-start xl:p-20 lg:p-16 md:p-16 p-3 xl:mt-0 lg:mt-0 md:mt-0 mt-10 text-sm">
    <form class="shadow p-6 w-full">
      <h1 class="font-semibold text-center text-lg">Contact details</h1>
      <section class="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label for="first-name" class="font-semibold text-xs">First name</label>
          <input type="text" id="first-name" class="bg-transparent block p-2 border border-gray-200 rounded w-full mt-1">
        </div>
        <div>
          <label for="last-name" class="font-semibold text-xs">Last name</label>
          <input type="text" id="last-name" class="block p-2 border bg-transparent border-gray-200 rounded w-full mt-1">
        </div>
        <div>
          <label for="email" class="font-semibold text-xs">Email</label>
          <input type="text" id="email" class="bg-transparent block p-2 border border-gray-200 rounded w-full mt-1">
        </div>
        <div>
          <label for="phone" class="font-semibold text-xs">Phone</label>
          <input type="text" id="phone" class=" bg-transparent block p-2 border border-gray-200 rounded w-full mt-1">
        </div>
      </section>
      <section>
        <h1 class="font-semibold text-center text-lg mt-8 mb-4">Billing Address</h1>
        <div class="my-4">
          <label for="phone" class="font-semibold text-xs">Address line 1</label>
          <input type="text" id="phone" class="bg-transparent block p-2 border border-gray-200 rounded w-full mt-1">
        </div>
        <div class="my-4">
          <label for="phone" class="font-semibold text-xs">Address line 2</label>
          <input type="text" id="phone" class="bg-transparent block p-2 border border-gray-200 rounded w-full mt-1">
        </div>
        <div class="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label for="first-name" class="font-semibold text-xs">City</label>
          <input type="text" id="city" class="bg-transparent block p-2 border border-gray-200 rounded w-full mt-1">
        </div>
        <div>
          <label for="postal-code" class="font-semibold text-xs">Postal code</label>
          <input type="text" id="postal-code" class="bg-transparent block p-2 border border-gray-200 rounded w-full mt-1">
        </div>
        <div>
          <label for="email" class="font-semibold text-xs">Country</label>
          <input type="text" id="email" class="bg-transparent block p-2 border border-gray-200 rounded w-full mt-1">
        </div>
        <div>
          <label for="phone" class="font-semibold text-xs">Province or state</label>
          <input type="text" id="phone" class="bg-transparent block p-2 border border-gray-200 rounded w-full mt-1">
        </div>
      </div>
      </section>

    </form>

    <form class="shadow xl:w-1/3 lg:w-1/3 md:w-full w-full flex-shrink-0 xl:mx-10 lg:mx-10 md:mx-0 mx-0 xl:mt-0 lg:mt-0 md:mt-0 mt-8 pb-10">
      <h1 class="font-semibold text-center text-lg">Payment details</h1>
      <ul class="my-3 px-6 flex border-b border-gray-200">
        <li class="font-bold border-b-2 border-primary-color">Pay now</li>
      </ul>
      <div class="px-6">
        <p class="text-xs my-8">Enter your credit card details and pay for your trip in full today.</p>
        <section>
          <label for="card-number" class="font-semibold text-xs">Card number</label>
          <input type="text" id="card-number" class="bg-transparent block p-2 border border-gray-200 rounded w-full mt-1">
        </section>
        <section class="grid grid-cols-3 gap-4 mt-4">
        <div>
          <label for="cvc" class="font-semibold text-xs">CVC</label>
          <input type="text" id="cvc" class="bg-transparent block p-2 border border-gray-200 rounded w-full mt-1">
        </div>
        <div>
          <label for="month" class="font-semibold text-xs">Month</label>
          <input type="text" placeholder="MM" id="month" class="bg-transparent block p-2 border border-gray-200 rounded w-full mt-1">
        </div>
        <div>
          <label for="year" placeholder="YYYY" class="font-semibold text-xs">Year</label>
          <input type="text" id="year" class="bg-transparent block p-2 border border-gray-200 rounded w-full mt-1">
        </div>
      </section>
      </div>

    </form>
    <aside class="shadow p-6 xl:w-[30%] lg:w-[30%] md:w-full w-full flex-shrink-0 xl:mt-0 lg:mt-0 md:mt-0 mt-8">
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
          <input type="text" placeholder="Promo code" class="bg-transparent border border-gray-200 p-2 rounded mr-2 text-sm">
          <app-button class="bg-transparent text-primary-color border border-gray-200 px-4">
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
