<script setup>
import { useBuildStore } from '../stores/build'
const buildStore = useBuildStore()
</script>

<template>
  <aside class="widget">
    <h3>🖥️ El teu PC</h3>
    <p>Total: <strong>{{ buildStore.totalPrice }} €</strong></p>

    <div v-for="(items, type) in buildStore.groupedByType" :key="type">
      <h4>{{ type }}</h4>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          {{ item.name }} - {{ item.price }} €
          <button @click="buildStore.removeComponent(index)">❌</button>
        </li>
      </ul>
    </div>

    <button @click="buildStore.checkout()">Checkout</button>
  </aside>
</template>

<style scoped>
.widget {
  border-left: 2px solid #ddd;
  padding: 1rem;
}
</style>
