import { defineStore } from 'pinia'

export const useHardwareStore = defineStore('hardware', {
  state: () => ({
    hardware: [],
    loading: false
  }),
  actions: {
    async loadHardware() {
      this.loading = true
      const data = await import('../assets/hardware.json')
      this.hardware = data.default
      this.loading = false
    }
  }
})
