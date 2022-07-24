import { defineStore } from 'pinia'

export const useSummaryStore = defineStore('nav', {
  state: () => {
    return {
        order: null
    }
  }
})