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
  router.push({ name: 'Login' })
}
</script>


<template>
    <h2 class="text-2xl font-bold mb-4">Open Contacts</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    <div
      v-for="contact in contacts"
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

