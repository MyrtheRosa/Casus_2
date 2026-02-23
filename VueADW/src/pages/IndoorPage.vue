<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useHead } from '@vueuse/head'
import Navbar from "../components/Navbar.vue";

useHead({
  title: 'Indoor Diensten | Allround Dienstverlening Willemsen',
  meta: [
    {
      name: 'description',
      content: 'Bekijk de indoor diensten van Allround Dienstverlening Willemsen: bedrijfsruimtes, badkamers, verbouwingen, vloeren, kozijnen en maatwerk projecten.'
    },
    {
      name: 'keywords',
      content: 'indoor diensten, flevoland, bedrijfsruimte, badkamer, toilet, verbouw, vloeren, kozijnen, maatwerk, Allround Dienstverlening Willemsen'
    }
  ]
})

// ------ INDOOR CARDS ------
const indoorCards = ref([
  {
    title: "Bedrijfsruimte",
    images: [
      // Kantoor
      "../images/Indoor/Bedrijfsruimte/kantoor1.jpg",
      "../images/Indoor/Bedrijfsruimte/kantoor2.jpg",
      "../images/Indoor/Bedrijfsruimte/kantoor3.jpg",
      "../images/Indoor/Bedrijfsruimte/kantoor4.jpg",

      // Magazijn
      "../images/Indoor/Bedrijfsruimte/magazijn1.jpg",
      "../images/Indoor/Bedrijfsruimte/magazijn2.jpg",
      "../images/Indoor/Bedrijfsruimte/magazijn3.jpg",
      "../images/Indoor/Bedrijfsruimte/magazijn4.jpg",
      "../images/Indoor/Bedrijfsruimte/magazijn5.jpg",
      "../images/Indoor/Bedrijfsruimte/magazijn6.jpg",
      "../images/Indoor/Bedrijfsruimte/magazijn7.jpg",
    ],
    description: "Professionele bedrijfsruimtes voor kantoor en magazijn."
  },

  {
    title: "Badkamer & Toilet",
    images: [
      "../images/Indoor/BadkamerToilet/badkamer1.jpg",
      "../images/Indoor/BadkamerToilet/badkamer2.jpg",
      "../images/Indoor/BadkamerToilet/badkamer3.jpg",
      "../images/Indoor/BadkamerToilet/badkamer4.jpg",
      "../images/Indoor/BadkamerToilet/badkamer5.jpg",
      "../images/Indoor/BadkamerToilet/badkamer6.jpg",
      "../images/Indoor/BadkamerToilet/badkamer7.jpg",
      "../images/Indoor/BadkamerToilet/badkamer8.jpg",
      "../images/Indoor/BadkamerToilet/badkamer9.jpg",
      "../images/Indoor/BadkamerToilet/badkamer10.jpg",
      "../images/Indoor/BadkamerToilet/badkamer11.jpg",
      "../images/Indoor/BadkamerToilet/badkamer12.jpg",
      "../images/Indoor/BadkamerToilet/badkamer13.jpg",
      "../images/Indoor/BadkamerToilet/badkamer14.jpg",
      "../images/Indoor/BadkamerToilet/badkamer15.jpg",
      "../images/Indoor/BadkamerToilet/badkamer16.jpg",
      "../images/Indoor/BadkamerToilet/badkamer17.jpg",
      "../images/Indoor/BadkamerToilet/badkamer18.jpg",
      "../images/Indoor/BadkamerToilet/badkamer19.jpg",
      "../images/Indoor/BadkamerToilet/badkamer20.jpg",
      "../images/Indoor/BadkamerToilet/badkamer21.jpg",
      "../images/Indoor/BadkamerToilet/badkamer22.jpg",
      "../images/Indoor/BadkamerToilet/badkamer23.jpg",
      "../images/Indoor/BadkamerToilet/badkamer24.jpg",
      "../images/Indoor/BadkamerToilet/badkamer25.jpg",
      "../images/Indoor/BadkamerToilet/badkamer26.jpg",
      "../images/Indoor/BadkamerToilet/badkamer27.jpg",
      "../images/Indoor/BadkamerToilet/badkamer28.jpg",
      "../images/Indoor/BadkamerToilet/badkamer29.jpg",
      "../images/Indoor/BadkamerToilet/badkamer30.jpg",
      "../images/Indoor/BadkamerToilet/badkamer31.jpg",
      "../images/Indoor/BadkamerToilet/badkamer32.jpg",
      "../images/Indoor/BadkamerToilet/toilet1.jpg",
    ],
    description: "Complete badkamers en toiletten op maat."
  },

  {
    title: "Verbouw",
   images: [
  "../images/Indoor/Verbouw/verbouw1.jpg",
  "../images/Indoor/Verbouw/verbouw2.jpg",
  "../images/Indoor/Verbouw/verbouw3.jpg",
  "../images/Indoor/Verbouw/verbouw4.jpg",
  "../images/Indoor/Verbouw/verbouw5.jpg",
  "../images/Indoor/Verbouw/verbouw6.jpg",
  "../images/Indoor/Verbouw/verbouw7.jpg",
  "../images/Indoor/Verbouw/verbouw8.jpg",
  "../images/Indoor/Verbouw/verbouw9.jpg",
  "../images/Indoor/Verbouw/verbouw10.jpg",
  "../images/Indoor/Verbouw/verbouw11.jpg",
  "../images/Indoor/Verbouw/verbouw12.jpg",
  "../images/Indoor/Verbouw/verbouw13.jpg",
  "../images/Indoor/Verbouw/verbouw14.jpg",
  "../images/Indoor/Verbouw/verbouw15.jpg",
  "../images/Indoor/Verbouw/verbouw16.jpg",
  "../images/Indoor/Verbouw/verbouw17.jpg",
  "../images/Indoor/Verbouw/verbouw18.jpg",
  "../images/Indoor/Verbouw/verbouw19.jpg",
  "../images/Indoor/Verbouw/verbouw20.jpg",
  "../images/Indoor/Verbouw/verbouw21.jpg",
  "../images/Indoor/Verbouw/verbouw22.jpg",
  "../images/Indoor/Verbouw/verbouw23.jpg",
  "../images/Indoor/Verbouw/verbouw24.jpg",
  "../images/Indoor/Verbouw/verbouw25.jpg",
  "../images/Indoor/Verbouw/verbouw26.jpg",
  "../images/Indoor/Verbouw/verbouw27.jpg",
  "../images/Indoor/Verbouw/verbouw28.jpg",
  "../images/Indoor/Verbouw/verbouw29.jpg",
  "../images/Indoor/Verbouw/verbouw30.jpg",
  "../images/Indoor/Verbouw/verbouw31.jpg",
  "../images/Indoor/Verbouw/verbouw32.jpg",
  "../images/Indoor/Verbouw/verbouw33.jpg",
  "../images/Indoor/Verbouw/verbouw34.jpg",
  "../images/Indoor/Verbouw/verbouw35.jpg",
  "../images/Indoor/Verbouw/verbouw36.jpg",
  "../images/Indoor/Verbouw/verbouw37.jpg",
  "../images/Indoor/Verbouw/verbouw38.jpg",
  "../images/Indoor/Verbouw/verbouw39.jpg",

  "../images/Indoor/Verbouw/verbouw40.jpeg",
  "../images/Indoor/Verbouw/verbouw41.jpeg",
  "../images/Indoor/Verbouw/verbouw42.jpeg",
  "../images/Indoor/Verbouw/verbouw43.jpeg",
  "../images/Indoor/Verbouw/verbouw44.jpeg",
],

    description: "Verbouw en renovatie van complete ruimtes."
  },

  {
    title: "Isoleren",
    images: [
      "../images/Indoor/Isoleren/isoleren1.jpg",
      "../images/Indoor/Isoleren/isoleren2.jpg",
    ],
    description: "Duurzame isolatie voor optimaal wooncomfort."
  },

  {
    title: "Vloeren",
    images: [
      "../images/Indoor/Vloeren/vloeren1.jpg",
      "../images/Indoor/Vloeren/vloeren2.jpg",
      "../images/Indoor/Vloeren/vloeren3.jpg",
      "../images/Indoor/Vloeren/vloeren4.jpg",
      "../images/Indoor/Vloeren/vloeren5.jpg",
      "../images/Indoor/Vloeren/vloeren6.jpg",
      "../images/Indoor/Vloeren/vloeren7.jpg",
      "../images/Indoor/Vloeren/vloeren8.jpg",
      "../images/Indoor/Vloeren/vloeren9.jpg",
      "../images/Indoor/Vloeren/vloeren10.jpg",
      "../images/Indoor/Vloeren/vloeren11.jpg",
      "../images/Indoor/Vloeren/vloeren12.jpg",
      "../images/Indoor/Vloeren/vloeren13.jpg",
      "../images/Indoor/Vloeren/vloeren14.jpg",
      "../images/Indoor/Vloeren/vloeren15.jpg",
      "../images/Indoor/Vloeren/vloeren16.jpg",
      "../images/Indoor/Vloeren/vloeren17.jpeg",
      "../images/Indoor/Vloeren/vloeren18.jpeg",
      "../images/Indoor/Vloeren/vloeren19.jpeg",
      "../images/Indoor/Vloeren/vloeren20.jpeg",
      "../images/Indoor/Vloeren/vloeren21.jpeg",
      "../images/Indoor/Vloeren/vloeren22.jpeg",
    ],
    description: "Hoogwaardige vloeren vakkundig gelegd."
  },

  {
    title: "Kozijnen",
    images: [
      "../images/Indoor/Kozijnen/kozijn1.jpg",
      "../images/Indoor/Kozijnen/kozijn2.jpg",
      "../images/Indoor/Kozijnen/kozijn3.jpg",
      "../images/Indoor/Kozijnen/kozijn4.jpeg",
      "../images/Indoor/Kozijnen/kozijn5.jpeg",
      "../images/Indoor/Kozijnen/kozijn6.jpeg",
      "../images/Indoor/Kozijnen/kozijn7.jpeg",
      "../images/Indoor/Kozijnen/kozijn8.jpeg",
      "../images/Indoor/Kozijnen/kozijn9.jpeg",
      "../images/Indoor/Kozijnen/kozijn10.jpeg",
      "../images/Indoor/Kozijnen/kozijn11.jpeg",
      "../images/Indoor/Kozijnen/kozijn12.jpeg",
    ],
    description: "PVC, hout en aluminium kozijnen op maat."
  },
]);

// ---- SPECIALS ----
const specialCards = ref([
  {
    title: "Speciaal Maatwerk",
    images: [
      "../images/Indoor/SpecialsSpeciaalMaatwerk/meubel1.jpg",
      "../images/Indoor/SpecialsSpeciaalMaatwerk/meubel2.jpg",
      "../images/Indoor/SpecialsSpeciaalMaatwerk/meubel3.jpg",
      "../images/Indoor/SpecialsSpeciaalMaatwerk/meubel4.jpg",
      "../images/Indoor/SpecialsSpeciaalMaatwerk/meubel5.jpg",
      "../images/Indoor/SpecialsSpeciaalMaatwerk/meubel6.jpg",
      "../images/Indoor/SpecialsSpeciaalMaatwerk/meubel7.jpg",
      "../images/Indoor/SpecialsSpeciaalMaatwerk/meubel8.jpg",
      "../images/Indoor/SpecialsSpeciaalMaatwerk/meubel9.jpg",
      "../images/Indoor/SpecialsSpeciaalMaatwerk/meubel10.jpg",
      "../images/Indoor/SpecialsSpeciaalMaatwerk/meubel11.jpg",
      "../images/Indoor/SpecialsSpeciaalMaatwerk/meubel12.jpg",
      "../images/Indoor/SpecialsSpeciaalMaatwerk/meubel13.jpg",
      "../images/Indoor/SpecialsSpeciaalMaatwerk/meubel14.jpg",
      "../images/Indoor/SpecialsSpeciaalMaatwerk/meubel15.jpeg",
      "../images/Indoor/SpecialsSpeciaalMaatwerk/meubel16.jpeg",
    ],
    description: "Uniek maatwerk: meubels en interieur op maat."
  },
]);

// ------ CAROUSEL STATE ------
const activeIndex = ref([
    ...indoorCards.value.map(() => 0),
    ...specialCards.value.map(() => 0),
]);

// Auto switching every 4s
onMounted(() => {
    const interval = setInterval(() => {
        const total =
            indoorCards.value.length +
            specialCards.value.length;

        activeIndex.value = activeIndex.value.map((i, idx) => {
            let list;
            if (idx < indoorCards.value.length)
                list = indoorCards.value[idx].images;
            else if (idx < indoorCards.value.length + specialCards.value.length)
                list = specialCards.value[idx - indoorCards.value.length].images;

            return (i + 1) % list.length;
        });
    }, 4000);

    onBeforeUnmount(() => clearInterval(interval));
});

// ------ LIGHTBOX ------
const lightboxOpen = ref(false);
const lightboxImages = ref([]);
const lightboxIndex = ref(0);

const openLightbox = (images, index) => {
    lightboxImages.value = images;
    lightboxIndex.value = index;
    lightboxOpen.value = true;
};

const nextImage = () => {
    lightboxIndex.value =
        (lightboxIndex.value + 1) % lightboxImages.value.length;
};

const prevImage = () => {
    lightboxIndex.value =
        (lightboxIndex.value - 1 + lightboxImages.value.length) %
        lightboxImages.value.length;
};
</script>

<template>
    <div class="relative bg-white min-h-screen flex flex-col">
        <Navbar :solid="true" />
        <br/>
        
       <main class="flex-grow pt-36 lg:pt-44 px-6 lg:px-16 pb-10">
            
    <!-- PAGE TITLE -->
    <h1 class="text-4xl font-bold text-center mb-40 tracking-wide text-[#2B2B2B]">
        Indoor Services
    </h1>
    <br/>

    <!-- INDOOR GRID -->
    <section class="mb-28 mt-24">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">

            <div
                v-for="(card, i) in indoorCards"
                :key="card.title"
                class="group cursor-pointer animate-fadeIn"
            >
                <div
                    class="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg transform-gpu transition-all duration-700 group-hover:scale-[1.03]"
                    @click="openLightbox(card.images, activeIndex[i])"
                >
                    <img
                        :src="card.images[activeIndex[i]]"
                        class="w-full h-full object-cover"
                    />

                    <!-- CAPRI GRADIENT (RAL 5019) -->
                    <div
                        class="absolute inset-0 bg-gradient-to-b from-[#4FB3C8]/30 via-[#2E8FA5]/50 to-[#0F4C5C]/70 pointer-events-none mix-blend-multiply"
                    ></div>

                    <!-- SOFT CAPRI GLOW -->
                    <div
                        class="absolute -top-10 -left-20 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-slide pointer-events-none"
                    ></div>

                    <span
                        class="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold text-center px-4 drop-shadow-xl tracking-wide"
                        style="
                          text-shadow:
                            0 0 10px rgba(79, 179, 200, 0.6),
                            0 0 20px rgba(46, 143, 165, 0.85);
                        "
                    >
                        {{ card.title }}
                    </span>
                </div>

                <!-- DESCRIPTION (ANTRACIET) -->
                <p class="mt-4 text-[#2B2B2B] text-center text-lg leading-relaxed">
                    {{ card.description }}
                </p>
            </div>

        </div>
    </section>
    <br/>

    <!-- SPECIALS -->
    <section class="mb-28">
        <h2 class="text-3xl font-semibold text-gray-800 mb-28 text-center">
            Specials
        </h2>

        <br/>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">

            <div
                v-for="(card, i) in specialCards"
                :key="card.title"
                class="group cursor-pointer animate-fadeIn"
            >
                <div
                    class="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg transform-gpu transition-all duration-700 group-hover:scale-[1.03]"
                    @click="openLightbox(card.images, activeIndex[i + indoorCards.length])"
                >
                    <img
                        :src="card.images[activeIndex[i + indoorCards.length]]"
                        class="w-full h-full object-cover"
                    />

                    <!-- CAPRI GRADIENT (RAL 5019) -->
                    <div
                        class="absolute inset-0 bg-gradient-to-b from-[#4FB3C8]/30 via-[#2E8FA5]/50 to-[#0F4C5C]/70 pointer-events-none mix-blend-multiply"
                    ></div>

                    <!-- SOFT CAPRI GLOW -->
                    <div
                        class="absolute -top-10 -left-20 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-slide pointer-events-none"
                    ></div>

                    <span
                        class="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold text-center px-4 drop-shadow-xl tracking-wide"
                        style="
                          text-shadow:
                            0 0 10px rgba(79, 179, 200, 0.6),
                            0 0 20px rgba(46, 143, 165, 0.85);
                        "
                    >
                        {{ card.title }}
                    </span>
                </div>

                <!-- DESCRIPTION (ANTRACIET) -->
                <p class="mt-4 text-[#2B2B2B] text-center text-lg leading-relaxed">
                    {{ card.description }}
                </p>
            </div>

        </div>
    </section>

</main>


        <!-- LIGHTBOX -->
        <div
            v-if="lightboxOpen"
            class="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            @click.self="lightboxOpen = false"
        >
            <button @click="prevImage" class="cursor-pointer absolute left-8 text-white text-4xl font-bold">‹</button>

            <img :src="lightboxImages[lightboxIndex]" class="max-h-[80vh] max-w-[90vw] rounded-xl shadow-2xl" />

            <button @click="nextImage" class="cursor-pointer absolute right-8 text-white text-4xl font-bold">›</button>

            <button @click="lightboxOpen = false" class="cursor-pointer absolute top-10 right-10 text-white text-3xl">
                ✕
            </button>
        </div>
    </div>
</template>

<style scoped>
@keyframes slide {
    0% {
        transform: translateX(-50%) translateY(0) rotate(25deg);
    }

    50% {
        transform: translateX(50%) translateY(10%) rotate(25deg);
    }

    100% {
        transform: translateX(-50%) translateY(0) rotate(25deg);
    }
}

/* Fade-in animation for cards */
@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(10px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadeIn {
    animation: fadeIn 0.8s ease forwards;
}

/* Smooth 3D transform on hover */
.group:hover img {
    transition: transform 0.7s ease;
}
</style>