import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import groupBy from 'lodash/groupBy'

export const useBuildStore = defineStore('build', {
  state: () => ({
    components: useLocalStorage('techbuilds-build', [])
  }),

  getters: {
    totalPrice(state) {
      return state.components.reduce((sum, c) => sum + c.price, 0)
    },
    groupedByType(state) {
      return groupBy(state.components, 'type')
    }
  },

  actions: {
    addComponent(component) {
      this.components.push(component)
    },
    removeComponent(index) {
      this.components.splice(index, 1)
    },
    checkout() {
      alert('Compra realitzada!')
      this.components = []
    }
  }
})
