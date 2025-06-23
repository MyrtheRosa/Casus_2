<template>
  <div class="p-10 min-h-screen bg-gray-100">
    <h1 class="text-3xl font-bold mb-6 text-center">Our Services</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="service in services"
        :key="service.id"
        class="bg-white p-5 rounded-xl shadow hover:shadow-lg cursor-pointer transition"
        @click="openModal(service)"
      >
        <h2 class="text-xl font-semibold mb-2">{{ service.name }}</h2>
        <p class="text-gray-600">{{ service.description }}</p>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-xl p-8 w-full max-w-lg relative">
        <button
          @click="closeModal"
          class="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>

        <h2 class="text-2xl font-bold mb-4">{{ selectedService?.name }}</h2>
        <p class="mb-6 text-gray-700">{{ selectedService?.longDescription }}</p>

        <form @submit.prevent class="space-y-4">
          <div>
            <label class="block text-sm font-medium">Name</label>
            <input type="text" class="w-full border rounded-md p-2" required />
          </div>
          <div>
            <label class="block text-sm font-medium">Email</label>
            <input type="email" class="w-full border rounded-md p-2" required />
          </div>
          <div>
            <label class="block text-sm font-medium">Message</label>
            <textarea class="w-full border rounded-md p-2" rows="4" required></textarea>
          </div>
          <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const services = ref([
  {
    id: 1,
    name: 'yamamama',
    description: '',
    longDescription: 'We provide deep cleaning services for your home interiors including kitchens, bathrooms, and living spaces.',
  },
  {
    id: 2,
    name: 'Badkamer',
    description: '',
    longDescription: 'Includes weeding, trimming, watering, and regular maintenance of your outdoor spaces.',
  },
  {
    id:3 ,
    name: 'Keuken' ,
    description: '',
    longDescription: '',

  },

  {
    id: 4,
    name: ' Isolatie' ,
    description: '',
    longDescription: '',

  },

  {
    id:5 ,
    name: 'Vloeren' ,
    description: '',
    longDescription: '',

  },

  {
    id: 6 ,
    name: 'Vloerverwarming' ,
    description: '',
    longDescription: '',

  },

  {
    id: 7,
    name: 'Kozijnen plaatsen/vervangen ' ,
    description: '',
    longDescription: '',

  },

  {
    id: 8,
    name: 'Riolering & elektra' ,
    description: '',
    longDescription: '',

  },
  
  {
    id: 9,
    name: 'Maatwerk Tafels' ,
    description: '',
    longDescription: '',

  },

  {
    id: 10,
    name: 'Maatwerk Meubilair ' ,
    description: '',
    longDescription: '',

  },

  
]);

const selectedService = ref(null);
const showModal = ref(false);

function openModal(service) {
  selectedService.value = service;
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
  selectedService.value = null;
}
</script>