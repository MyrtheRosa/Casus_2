<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import contactlist from '../components/contactlist.vue'

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
</script>

<template>
  <div>
    <h2>Open Contacts</h2>
    <contactlist />
  </div>
</template>