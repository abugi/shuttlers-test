import { defineStore } from 'pinia'
import vehiclesData from '../util/vehicles'

export const useVehicles = defineStore('vehicles', {
  state: () => {
    return {
        vehicles: vehiclesData
    }
  }
})