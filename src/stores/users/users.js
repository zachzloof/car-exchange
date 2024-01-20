import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import users from '../assets/users.json'

export const useUserStore = defineStore('users', () => {
  
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  // return { useUserStore }
})
