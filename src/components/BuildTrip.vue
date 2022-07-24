<template>
  <section class="w-1/2 mx-auto mt-16 p-8 shadow">
    <nav class="mb-16">
      <ul class="flex items-center justify-center mx-5">
        <li class="flex items-center">
            <input v-model="tripType" type="radio" name="trip" id="oneway" value="oneWay" class="cursor-pointer w-4 h-4 mr-2" checked>
            <label for="oneway">One-way</label>
        </li>

        <li class="flex items-center mx-5">
            <input v-model="tripType" type="radio" name="trip" id="roundtrip" value="roundTrip" class="cursor-pointer w-4 h-4 mr-2">
            <label for="roundtrip" class="cursor-pointer">Round-trip</label>
        </li>
      </ul>
    </nav>

    <TripItenerary :trip-type="tripType" />
  </section>
</template>

<script>
import TripItenerary from '../components/BuildTripItenerary.vue'

export default {
  name: 'BuildTrip',
  components: { TripItenerary },
  data() {
    return {
      activeTab: 'OneWay',
      tripType: 'oneWay'
    }
  }
}
</script>
