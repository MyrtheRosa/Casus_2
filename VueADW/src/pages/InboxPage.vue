

<template>
  <h2 class="text-2xl font-bold mb-4">Open Contacts</h2>

  <div class="w-full flex justify-center mb-6">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search messages..."
      class="w-full max-w-md rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-green-600 focus:outline-none"
    />
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="contact in filteredContacts"
      :key="contact.id"
      class="p-6 bg-green-600 rounded-xl shadow hover:shadow-lg transition"
    >
      <h3 class="text-lg font-semibold">{{ contact.name }}</h3>
      <p class="text-sm text-gray-700">Email: {{ contact.email }}</p>
      <button
        @click="goToContact(contact.id)"
        class="mt-2 bg-blue-800 text-white px-4 py-1 rounded hover:bg-blue-600"
      >
        View Details
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import contactlist from './contactlist.vue'

const contacts = ref([])
const searchQuery = ref('')
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

const filteredContacts = computed(() => {
  const q = searchQuery.value.toLowerCase()
  return contacts.value.filter(contact =>
    contact.name.toLowerCase().includes(q) ||
    contact.email.toLowerCase().includes(q)
  )
})

function goToContact(id) {
  router.push(`/contacts/${id}`)
}

function logout() {
  localStorage.removeItem('isLoggedIn')
  router.push({ name: 'LoginPage' })
}
</script>