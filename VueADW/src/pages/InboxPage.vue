<template>
  <div class="max-w-4xl mx-auto px-4 py-12 text-gray-800">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold">Inbox</h1>
      <button
        @click="logout"
        class="cursor-pointer rounded bg-red-600 px-4 py-2 text-white hover:bg-red-500"
      >
        Logout
      </button>
    </div>
    <p>Welcome, Admin! This is your inbox.</p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function logout() {
  localStorage.removeItem('isLoggedIn')
  router.push({ name: 'Login' })
}
</script>
