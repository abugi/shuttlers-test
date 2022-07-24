import { defineStore } from 'pinia'

export const useValidation = defineStore('validation', {
  state: () => {
    return {
        isValidationError: false
    }
  }
})