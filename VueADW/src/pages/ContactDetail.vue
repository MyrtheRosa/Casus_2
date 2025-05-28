<template>
  <div v-if="contact">
    <h2>{{ contact.name }}</h2>
    <p>Email: {{ contact.email }}</p>
    <p>Phone: {{ contact.phone }}</p>
    <p>Message: {{ contact.message }}</p>
    <p>Status: {{ contact.status }}</p>

  </div>
  <div v-else>
    <p>Loading contact details...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const contact = ref(null)

onMounted(async () => {
  const id = route.params.id
  try {
    const res = await fetch(`http://localhost:8000/api/contacts/${id}`)
    const data = await res.json()
    contact.value = data
  } catch (err) {
    console.error('Failed to fetch contact:', err)
  }
})
</script>
