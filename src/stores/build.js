import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import groupBy from 'lodash/groupBy'

export const useBuildStore = defineStore('build', () => {
  const components = useLocalStorage('techbuilds-build', [])

  const totalPrice = computed(() =>
    components.value.reduce((sum, c) => sum + c.price, 0)
  )

  const groupedByType = computed(() =>
    groupBy(components.value, 'type')
  )

  function addComponent(component) {
    components.value.push(component)
  }

  function removeComponent(index) {
    components.value.splice(index, 1)
  }

  function checkout() {
    alert('Compra realitzada!')
    components.value = []
  }

  return {
    components,
    totalPrice,
    groupedByType,
    addComponent,
    removeComponent,
    checkout
  }
})
