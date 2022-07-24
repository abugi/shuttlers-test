<script setup>
import { ref } from 'vue'
import Datepicker from 'vue3-datepicker'
import AppButton from './AppButton.vue'
import { useTrip } from '../store/trip'
import { useNav } from '../store/nav'
import { useValidation } from '../store/dataValidation'

const store = useTrip()
const nav = useNav()
const dataValidation = useValidation()

defineProps(
    {
        tripType: {
            type: String,
            required: true
        }
    }
)

const departureLocation = ref(null)
const outBoundLocation = ref(null)
const destination = ref(null)
const departureTime = ref(null)
const departureDate = ref(new Date())
const passengers = ref(1)
const showLocationOption = ref(false)
const showDestinationOption = ref(false)
const showOutBoundLocation = ref(null)
const showTimeSlots = ref(false)
const locations = [
   'los angeles international airport',
   'los angeles convention center'
]

const timeSlots = [
    '8 Am', '10 AM', '12PM'
]

const selectLocation = (payload) => {
    departureLocation.value = payload
    showLocationOption.value = false
}

const selectOutboundLocation = (payload) => {
    outBoundLocation.value = payload
    showOutBoundLocation.value = false
}

const selectDestination = (payload) => {
    destination.value = payload
    showDestinationOption.value = false
}

const selectTimeSlot = (payload) => {
    departureTime.value = payload
    showTimeSlots.value = false
}

const viewPrices = () => {
    if(!validation()) {
        return
    }

    const trip = {
        departureLocation: departureLocation.value,
        departureDate: departureDate.value,
        departureTime: departureTime.value,
        destination: destination.value,
        passengers: passengers.value
    }
    
    // Update state data in store
    store.trip = trip
    nav.activeTab = 'Prices'
}

/*
    - this is low level validation
    - a more robust validation validation library should be used here given enough time
*/
const validation = () => {
    if(!departureLocation.value || !departureDate.value || !departureTime.value || !destination.value || !passengers.value) {
        dataValidation.isValidationError = true
        return false
    }else {
        dataValidation.isValidationError = false
        return true
    }
}

</script>

<template>
    <section class="flex items-center">
        <div class="w-full relative">
            <label for="departure">Depart from</label>
            <input v-model="departureLocation" type="text" class="block w-full mt-2 border border-gray-200 rounded p-2 focus:outline-none capitalize" @focus="showLocationOption = true">
            <ul v-if="showLocationOption" class="absolute top-full left-0 z-10 bg-white border border-gray-100 w-full capitalize">
                <li v-for="(item, index) in locations" :key="index" class="py-1 px-3 cursor-pointer hover:bg-blue-200" @click="selectLocation(item)">{{ item }}</li>
            </ul>
        </div>
        <div class="flex-shrink-0 w-[25%] mx-6 relative">
            <label for="departure">On</label>
            <datepicker v-model="departureDate" class="block w-full mt-2 border border-gray-200 rounded p-2 focus:outline-none" />
            <img src="../assets/images/calendar.svg" class="absolute right-2 bottom-3" />
        </div>
        <div class="flex-shrink-0 w-[15%] relative">
            <label for="departure">At</label>
            <input v-model="departureTime" type="text" class="block w-full mt-2 border border-gray-200 rounded p-2 focus:outline-none" @focus="showTimeSlots = true">
                <img src="../assets/images/chevron.svg" class="absolute right-2 bottom-3" />
                <ul v-if="showTimeSlots" class="absolute top-full left-0 z-10 bg-white border border-gray-100 w-full capitalize">
                <li v-for="(item, index) in timeSlots" :key="index" class="py-1 px-3 cursor-pointer hover:bg-blue-200" @click="selectTimeSlot(item)">{{ item }}</li>
            </ul>
        </div>
    </section>
    <section class="py-10 relative">
            <label for="departure">Travel to</label>
            <input v-model="destination" type="text" class="block w-full mt-2 border border-gray-200 rounded p-2 focus:outline-none capitalize" @focus="showDestinationOption = true">
            <ul v-if="showDestinationOption" class="absolute -bottom-7 left-0 z-10 bg-white border border-gray-100 w-full capitalize">
                <li v-for="(item, index) in locations" :key="index" class="py-1 px-3 cursor-pointer hover:bg-blue-200" @click="selectDestination(item)">{{ item }}</li>
            </ul>
    </section>
    <transition>
        <section v-if="tripType.toLocaleLowerCase() === 'roundtrip'" class="pb-8 relative">
                <label for="departure">Return to</label>
                <input v-model="outBoundLocation" type="text" class="block w-full mt-2 border border-gray-200 rounded p-2 focus:outline-none capitalize" @focus="showOutBoundLocation = true">
                <ul v-if="showOutBoundLocation" class="absolute -bottom-7 left-0 z-10 bg-white border border-gray-100 w-full capitalize">
                    <li v-for="(item, index) in locations" :key="index" class="py-1 px-3 cursor-pointer hover:bg-blue-200" @click="selectOutboundLocation(item)">{{ item }}</li>
                </ul>
        </section>
    </transition>
    <section class="py-10 border-t border-b border-gray-100">
            <label for="departure">Estimated passengers</label>
            <input v-model="passengers" type="text" class="block w-24 mt-2 border border-gray-200 rounded py-1 px-2 focus:outline-none">
    </section>
    <app-button class="block w-2/5 bg-primary-color text-white text-base mt-10 mx-auto" @click="viewPrices">
            <template v-slot:btn-text>
            <span>View prices →</span>
            </template>
    </app-button>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.7s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>