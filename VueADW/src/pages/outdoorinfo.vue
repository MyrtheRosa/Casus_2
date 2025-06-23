<template>
  <div class="p-10 min-h-screen bg-gray-100">
    <h1 class="text-3xl font-bold mb-6 text-center">OUTDOOR SERVICES</h1>

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
    name: 'Veranda’s / tuinhuisen',
    description: 'Maatwerk veranda’s en tuinhuisjes.',
    longDescription: 'Wij bouwen stijlvolle veranda’s en tuinhuisjes die naadloos aansluiten bij uw tuin en woning. Volledig afgestemd op uw wensen, duurzaam en professioneel geplaatst.',
  },
  {
    id: 2,
    name: 'Glazen schuifwanden',
    description: 'Moderne glazen wanden voor buitenruimtes.',
    longDescription: 'Glazen schuifwanden bieden beschutting en behoud van zicht en licht. Ideaal voor veranda’s en overkappingen, met strakke afwerking en hoge kwaliteit glas.',
  },
  {
    id: 3,
    name: 'Straatwerk',
    description: 'Bestrating en aanleg van tuinpaden.',
    longDescription: 'Wij verzorgen het aanleggen van opritten, terrassen en paden met hoogwaardige bestrating. Strak gelegd en afgestemd op uw tuinontwerp.',
  },
  {
    id: 4,
    name: 'Riolering & elektra',
    description: 'Installatie buitenriolering en elektriciteit.',
    longDescription: 'Veilige en correcte aanleg van buitenriolering en elektra. Voor onder andere tuinverlichting, buitenkeukens of werkplaatsen.',
  },
  {
    id: 5,
    name: 'Gevelbekleding',
    description: 'Moderne gevelbekleding voor buitenmuren.',
    longDescription: 'Bekleding met keraliet, hout, sandwichpanelen, damwand of trespa. Voor een frisse uitstraling en duurzame bescherming van uw gevels.',
  },
  {
    id: 6,
    name: 'Zetwerk',
    description: 'Afwerking met sandwichpanelen en damwand.',
    longDescription: 'Zetwerk met metalen profielen (sandwich/damwand) voor een nette en waterdichte afwerking. Meer informatie hierover op de zetwerkpagina.',
  },
  {
    id: 7,
    name: 'Deuren (groot en klein)',
    description: 'Plaatsing van binnen- en buitendeuren.',
    longDescription: 'Wij leveren en plaatsen houten, kunststof of metalen deuren in elke maat. Ook voor schuren, tuinhuisjes of technische ruimtes.',
  },
  {
    id: 8,
    name: 'Tuinaanleg',
    description: 'Volledige aanleg van uw tuin.',
    longDescription: 'Van ontwerp tot uitvoering: wij leggen complete tuinen aan, inclusief grondwerk, bestrating, beplanting en verlichting.',
  },
  {
    id: 9,
    name: 'Dakbedekking',
    description: 'Daken professioneel bedekt en waterdicht.',
    longDescription: 'Wij zorgen voor stevige en duurzame dakbedekking voor buitenruimtes zoals veranda’s of schuren. Inclusief isolatie indien gewenst.',
  },
  {
    id: 10,
    name: 'Stucwerk',
    description: 'Strak en weersbestendig buitenstucwerk.',
    longDescription: 'Buitenstucwerk voor gevels en muren met een gladde of decoratieve afwerking. Bescherming en uitstraling in één.',
  },
  {
    id: 11,
    name: 'Airco-installaties',
    description: 'Buitenunits en systemen voor airco.',
    longDescription: 'Professionele plaatsing van airco-installaties inclusief buitenunits. Efficiënt, stil en afgestemd op uw wooncomfort.',
  },
  {
    id: 12,
    name: 'Zonnepanelen',
    description: 'Duurzame energie via zonne-installaties.',
    longDescription: 'Advies, levering en installatie van zonnepanelen op platte of schuine daken. Inclusief monitoring en optimalisatie.',
  },
  {
    id: 13,
    name: 'Screens',
    description: 'Zonwering voor ramen en overkappingen.',
    longDescription: 'Screens zijn een elegante manier om warmte en licht buiten te houden. Op maat gemaakt en elektrisch bedienbaar mogelijk.',
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