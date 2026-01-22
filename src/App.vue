<script setup>
import { onMounted } from 'vue'
import { useHardwareStore } from './stores/hardware'
import { useBuildStore } from './stores/build'

import NavBar from './components/NavBar.vue'
import ComponentCard from './components/ComponentCard.vue'
import CurrentBuildWidget from './components/CurrentBuildWidget.vue'

const hardwareStore = useHardwareStore()
const buildStore = useBuildStore()

onMounted(() => {
  hardwareStore.loadHardware()
})
</script>

<template>
  <NavBar />

  <main class="layout">
    <section class="catalog">
      <ComponentCard
        v-for="component in hardwareStore.hardware"
        :key="component.name"
        :component="component"
        @add="buildStore.addComponent"
      />
    </section>

    <CurrentBuildWidget />
  </main>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
}
.catalog {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
}
</style>
