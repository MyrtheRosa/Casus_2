<template>
  <div>
    <div v-for="contact in contacts" :key="contact.id" class="card">
      <h3>{{ contact.name }}</h3>
      <p>Email: {{ contact.email }}</p>
      <button @click="goToContact(contact.id)">View Details</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const contacts = ref([])
const router = useRouter()

onMounted(async () => {
  try {
    const res = await fetch('http://localhost:8000/api/contacts')
    const data = await res.json()
    contacts.value = data.filter(c => c.status !== 'closed')
  } catch (err) {
    console.error('Failed to fetch contacts:', err)
  }
})

const goToContact = (id) => {
  router.push(`/contacts/${id}`)
}
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
}
</style>
