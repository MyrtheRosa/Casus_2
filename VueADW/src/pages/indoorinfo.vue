<template>
  <div class="p-10 min-h-screen bg-gray-100">
    <h1 class="text-3xl font-bold mb-6 text-center">INDOOR SERVICES</h1>

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
    name: 'Tegelwerk',
    description: 'Professionele betegeling voor elke ruimte.',
    longDescription: 'Wij verzorgen tegelwerk voor badkamers, keukens en vloeren. Strak gelegd, duurzaam en stijlvol afgewerkt.',
  },
  {
    id: 2,
    name: 'Badkamer',
    description: 'Complete badkamerrenovaties op maat.',
    longDescription: 'Van ontwerp tot realisatie: wij renoveren of bouwen uw badkamer met oog voor comfort, stijl en functionaliteit.',
    
  },
  {
    id: 3,
    name: 'Keuken',
    description: 'Keukenrenovaties en maatwerk keukens.',
    longDescription: 'Wij ontwerpen en realiseren keukens die passen bij uw wensen, inclusief installaties, tegels en afwerking.',
    
  },
  {
    id: 4,
    name: 'Isolatie',
    description: 'Duurzame isolatieoplossingen voor uw woning.',
    longDescription: 'Wij verbeteren de energie-efficiëntie van uw huis met hoogwaardige isolatiematerialen voor vloer, muur en dak.',
    
  },
  {
    id: 5,
    name: 'Vloeren',
    description: 'Luxe vloeren voor elke stijl en ruimte.',
    longDescription: 'Van laminaat tot visgraatparket: wij leveren en leggen vloeren die passen bij uw interieur en budget.',
    
  },
  {
    id: 6,
    name: 'Vloerverwarming',
    description: 'Comfortabele warmte met vloerverwarming.',
    longDescription: 'Wij installeren energiezuinige vloerverwarming die zorgt voor gelijkmatige warmteverdeling in huis.',
    
  },
  {
    id: 7,
    name: 'Kozijnen plaatsen/vervangen',
    description: 'Nieuwe kozijnen voor betere isolatie en uitstraling.',
    longDescription: 'Wij plaatsen en vervangen houten, kunststof of aluminium kozijnen met aandacht voor duurzaamheid en design.',
    
  },
  {
    id: 8,
    name: 'Riolering & elektra',
    description: 'Installatie en renovatie van riolering en elektra.',
    longDescription: 'Wij zorgen voor veilige en goed functionerende leidingen, aansluitingen en elektra volgens de nieuwste normen.',
   
  },
  {
    id: 9,
    name: 'Maatwerk Tafels',
    description: 'Unieke tafels op maat gemaakt.',
    longDescription: 'Van robuuste eettafels tot moderne werktafels – wij ontwerpen en maken tafels die perfect passen in uw interieur.',
  },
  {
    id: 10,
    name: 'Maatwerk Meubilair',
    description: 'Meubels op maat voor elk interieur.',
    longDescription: 'Wij ontwerpen en bouwen kasten, banken en andere meubelstukken die volledig afgestemd zijn op uw wensen.',
  }
  
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
