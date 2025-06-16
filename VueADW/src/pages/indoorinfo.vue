<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <a
          v-for="dienst in diensten"
          :key="dienst.id"
          href="#"
          class="group"
          @click.prevent="openModal(dienst)"
        >
          <img
            src="https://via.placeholder.com/300"
            :alt="dienst.type"
            class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75"
          />
          <h3 class="mt-4 text-sm text-gray-700">{{ dienst.type }}</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">{{ dienst.message }}</p>
        </a>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="modalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="bg-white p-6 rounded-lg max-w-lg w-full">
        <h2 class="text-xl font-bold mb-4">{{ geselecteerdeDienst.type }}</h2>
        <p class="mb-4 text-gray-700">{{ geselecteerdeDienst.message }}</p>

        <form @submit.prevent="verzendFormulier">
          <div class="mb-2">
            <label class="block text-sm font-medium text-gray-700">Naam</label>
            <input v-model="formulier.name" type="text" required class="mt-1 w-full border rounded p-2" />
          </div>

          <div class="mb-2">
            <label class="block text-sm font-medium text-gray-700">E-mail</label>
            <input v-model="formulier.email" type="email" required class="mt-1 w-full border rounded p-2" />
          </div>

          <div class="mb-2">
            <label class="block text-sm font-medium text-gray-700">Telefoonnummer</label>
            <input v-model="formulier.mobile_number" type="text" class="mt-1 w-full border rounded p-2" />
          </div>

          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Bericht</label>
            <textarea v-model="formulier.message" rows="3" class="mt-1 w-full border rounded p-2"></textarea>
          </div>

          <div class="flex justify-between">
            <button
              type="submit"
              class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Verstuur
            </button>
            <button
              type="button"
              @click="sluitModal"
              class="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
            >
              Sluiten
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const diensten = ref([])
const modalOpen = ref(false)
const geselecteerdeDienst = ref(null)

const formulier = ref({
  name: '',
  email: '',
  mobile_number: '',
  message: ''
})

onMounted(async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/diensten')
    const data = await response.json()
    diensten.value = data
  } catch (error) {
    console.error('Fout bij ophalen diensten:', error)
  }
})

const openModal = (dienst) => {
  geselecteerdeDienst.value = dienst
  modalOpen.value = true

  // Optioneel: pre-fill het formulier
  formulier.value.message = `Ik wil graag meer info over ${dienst.type}`
}

const sluitModal = () => {
  modalOpen.value = false
  geselecteerdeDienst.value = null
  formulier.value = {
    name: '',
    email: '',
    mobile_number: '',
    message: ''
  }
}

const verzendFormulier = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/aanvragen', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'X-CSRF-TOKEN': '...' // Als nodig via Laravel CSRF
      },
      body: JSON.stringify({
        ...formulier.value,
        type: geselecteerdeDienst.value.type
      })
    })

    if (!response.ok) {
      throw new Error('Fout bij verzenden formulier')
    }

    alert('Verstuurd!')
    sluitModal()
  } catch (error) {
    console.error(error)
    alert('Verzenden mislukt.')
  }
}
</script>
