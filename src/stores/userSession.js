import { defineStore } from 'pinia'

export const useUserSessionStore = defineStore('userSession', {
  state: () => ({
    username: 'Guest Builder'
  }),
  actions: {
    visitGithub() {
      window.open('https://github.com', '_blank')
    }
  }
})
