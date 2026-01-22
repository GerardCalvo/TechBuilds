<script setup>
import { useUserSessionStore } from '../stores/userSession'
const userStore = useUserSessionStore()
</script>

<template>
  <nav class="navbar">
    <h2>TechBuilds</h2>
    <div>
      👤 {{ userStore.username }}
      <button @click="userStore.visitGithub()">GitHub</button>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: #0f172a;
  color: white;
}
</style>
