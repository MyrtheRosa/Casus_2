<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import contactlist from './contactlist.vue'

const contacts = ref([])
const router = useRouter()

onMounted(async () => {
  try {
    const res = await fetch('http://localhost:8000/api/contacts')
    const data = await res.json()
    contacts.value = data.filter(c => c.status !== 'closed')
  } catch (error) {
    console.error('Failed to fetch contacts:', error)
  }
})

const goToContact = (id) => {
  router.push(`/contacts/${id}`)
}

function logout() {
  localStorage.removeItem('isLoggedIn')
  router.push({ name: 'LoginPage' })
}
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-12 text-gray-800">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold">Inbox</h1>
      <h2>Open Contacts</h2>
      <contactlist />
      <button @click="logout" class="cursor-pointer rounded bg-red-600 px-4 py-2 text-white hover:bg-red-500">
        Logout
      </button>
    </div>
    <p>Welcome, Admin! This is your inbox.</p>
  </div>
</template>