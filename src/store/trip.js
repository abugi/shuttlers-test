import { defineStore } from 'pinia'

export const useTrip = defineStore('trip', {
  state: () => {
    return {
        trip: null
    }
  }
})