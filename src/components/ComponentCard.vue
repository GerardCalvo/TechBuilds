<script setup>
defineProps({
  component: Object
})
defineEmits(['add'])
</script>

<template>
  <div class="card">
    <h3>{{ component.name }}</h3>
    <p>{{ component.type }}</p>
    <p>{{ component.price }} €</p>
    <button @click="$emit('add', component)">
      Afegir al Muntatge
    </button>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
}
</style>
