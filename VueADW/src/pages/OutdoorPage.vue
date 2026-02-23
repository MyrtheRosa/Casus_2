<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { useHead } from '@vueuse/head'
import Navbar from "../components/Navbar.vue";

useHead({
  title: 'Outdoor Diensten | Allround Dienstverlening Willemsen',
  meta: [
    {
      name: 'description',
      content: 'Ontdek de outdoor diensten van Allround Dienstverlening Willemsen: veranda’s, tuinhuisjes, deuren, riolering, gevelbekleding, tuinen en complete verbouwingen.'
    },
    {
      name: 'keywords',
      content: 'outdoor diensten, flevoland, veranda, tuinhuis, deuren, riolering, gevelbekleding, tuin, verbouw, Allround Dienstverlening Willemsen'
    }
  ]
});

/* ================= OUTDOOR CARDS ================= */

const outdoorCards = ref([
  {
    title: "Veranda/Tuinhuis",
    images: [
      "../images/Outdoor/VerandaTuinhuis/veranda1.jpg",
      "../images/Outdoor/VerandaTuinhuis/veranda2.jpg",
      "../images/Outdoor/VerandaTuinhuis/veranda3.jpg",
      "../images/Outdoor/VerandaTuinhuis/veranda4.jpg",
      "../images/Outdoor/VerandaTuinhuis/veranda5.jpg",
      "../images/Outdoor/VerandaTuinhuis/veranda6.jpg",
      "../images/Outdoor/VerandaTuinhuis/veranda7.jpg",
      "../images/Outdoor/VerandaTuinhuis/veranda8.jpg",
      "../images/Outdoor/VerandaTuinhuis/veranda9.jpg",
      "../images/Outdoor/VerandaTuinhuis/veranda10.jpg",
      "../images/Outdoor/VerandaTuinhuis/veranda11.jpg",
    ],
    description: "Prachtige veranda’s en tuinhuisjes volledig op maat."
  },
  {
    title: "Deuren groot & klein",
    images: [
      "../images/Outdoor/DeurenGrootKlein/deur1.jpg",
      "../images/Outdoor/DeurenGrootKlein/deur2.jpg",
      "../images/Outdoor/DeurenGrootKlein/deur3.jpg",
      "../images/Outdoor/DeurenGrootKlein/deur4.jpg",
      "../images/Outdoor/DeurenGrootKlein/deur5.jpg",
      "../images/Outdoor/DeurenGrootKlein/deur6.jpg",
      "../images/Outdoor/DeurenGrootKlein/deur7.jpg",
      "../images/Outdoor/DeurenGrootKlein/deur8.jpg",
      "../images/Outdoor/DeurenGrootKlein/deur9.jpg",
      "../images/Outdoor/DeurenGrootKlein/deur10.jpg",
      "../images/Outdoor/DeurenGrootKlein/deur11.jpg",
      "../images/Outdoor/DeurenGrootKlein/deur12.jpg",
      "../images/Outdoor/DeurenGrootKlein/deur13.jpg",
      
    ],
    description: "Deuren: groot en klein.",
  },
  {
    title: "Riolering",
    images: [
      "../images/Outdoor/Riolering/riolering1.jpg",
      "../images/Outdoor/Riolering/riolering2.jpg",
      "../images/Outdoor/Riolering/riolering3.jpg",
      "../images/Outdoor/Riolering/riolering4.jpg",
      "../images/Outdoor/Riolering/riolering5.jpg",
      "../images/Outdoor/Riolering/riolering6.jpg",
      "../images/Outdoor/Riolering/riolering7.jpg",
    ],
    description: "Vakkundige aanleg van leidingen en elektra buiten (ook binnenwerk)."
  },
  {
    title: "Gevelbekleding",
    images: [
      "../images/Outdoor/Gevelbekleding/gevelbekleding1.jpg",
      "../images/Outdoor/Gevelbekleding/gevelbekleding2.jpg",
      "../images/Outdoor/Gevelbekleding/gevelbekleding3.jpg",
      "../images/Outdoor/Gevelbekleding/gevelbekleding4.jpg",
    ],
    description: "Keraliet, hout, sandwich, damwand, Trespa en meer."
  },
  {
    title: "Tuin",
    images: [
      "../images/Outdoor/Tuin/tuin1.jpg",
      "../images/Outdoor/Tuin/tuin2.jpg",
      "../images/Outdoor/Tuin/tuin3.jpg",
      "../images/Outdoor/Tuin/tuin4.jpg",
      "../images/Outdoor/Tuin/tuin5.jpg",
      "../images/Outdoor/Tuin/tuin6.jpg",
      "../images/Outdoor/Tuin/tuin7.jpg",
      "../images/Outdoor/Tuin/tuin8.jpg",
      "../images/Outdoor/Tuin/tuin9.jpg",
      "../images/Outdoor/Tuin/tuin10.jpg",
      "../images/Outdoor/Tuin/tuin11.jpg",
      "../images/Outdoor/Tuin/tuin12.jpg",
      "../images/Outdoor/Tuin/tuin13.jpg",
      "../images/Outdoor/Tuin/tuin14.jpg",
      "../images/Outdoor/Tuin/tuin15.jpg",
      "../images/Outdoor/Tuin/tuin16.jpg",
      "../images/Outdoor/Tuin/tuin17.jpg",
      "../images/Outdoor/Tuin/tuin18.jpg",
      "../images/Outdoor/Tuin/tuin19.jpg",
      "../images/Outdoor/Tuin/tuin20.jpg",
      "../images/Outdoor/Tuin/tuin21.jpg",
      "../images/Outdoor/Tuin/tuin22.jpg",
      "../images/Outdoor/Tuin/tuin23.jpg",
      "../images/Outdoor/Tuin/tuin24.jpg",
      "../images/Outdoor/Tuin/tuin25.jpg",
      "../images/Outdoor/Tuin/tuin26.jpg",
      "../images/Outdoor/Tuin/tuin27.jpg",
      "../images/Outdoor/Tuin/tuin28.jpg",
      "../images/Outdoor/Tuin/tuin29.jpg",
      "../images/Outdoor/Tuin/tuin30.jpg",
      "../images/Outdoor/Tuin/tuin31.jpg",
      "../images/Outdoor/Tuin/tuin32.jpg",
      "../images/Outdoor/Tuin/tuin33.jpg",
      "../images/Outdoor/Tuin/tuin34.jpg",
      "../images/Outdoor/Tuin/tuin35.jpg",
      "../images/Outdoor/Tuin/tuin36.jpg",
      "../images/Outdoor/Tuin/tuin37.jpg",
      "../images/Outdoor/Tuin/tuin38.jpg",
      "../images/Outdoor/Tuin/tuin39.jpg",
      "../images/Outdoor/Tuin/tuin40.jpg",
      "../images/Outdoor/Tuin/tuin41.jpg",
      "../images/Outdoor/Tuin/tuin42.jpg",
      "../images/Outdoor/Tuin/tuin43.jpg",
      "../images/Outdoor/Tuin/tuin44.jpg",
      "../images/Outdoor/Tuin/tuin45.jpg",
      "../images/Outdoor/Tuin/tuin46.jpg",
      "../images/Outdoor/Tuin/tuin47.jpg",
      "../images/Outdoor/Tuin/tuin48.jpg",
      "../images/Outdoor/Tuin/tuin49.jpg",
      "../images/Outdoor/Tuin/tuin50.jpg",
      "../images/Outdoor/Tuin/tuin51.jpg",
      "../images/Outdoor/Tuin/tuin52.jpg",
      "../images/Outdoor/Tuin/tuin53.jpg",
      "../images/Outdoor/Tuin/tuin54.jpg",
    ],
    description: "Tuinaanleg en renovatie met professioneel vakwerk."
  },
  {
    title: "Verbouw",
    images: [
      "../images/Outdoor/Verbouw/verbouw1.jpg",
      "../images/Outdoor/Verbouw/verbouw2.jpg",
      "../images/Outdoor/Verbouw/verbouw3.jpg",
      "../images/Outdoor/Verbouw/verbouw4.jpg",
      "../images/Outdoor/Verbouw/verbouw5.jpg",
      "../images/Outdoor/Verbouw/verbouw6.jpg",
      "../images/Outdoor/Verbouw/verbouw7.jpg",
      "../images/Outdoor/Verbouw/verbouw8.jpg",
      "../images/Outdoor/Verbouw/verbouw9.jpg",
      "../images/Outdoor/Verbouw/verbouw10.jpg",
      "../images/Outdoor/Verbouw/verbouw11.jpg",
      "../images/Outdoor/Verbouw/verbouw12.jpg",
      "../images/Outdoor/Verbouw/verbouw13.jpg",
      "../images/Outdoor/Verbouw/verbouw14.jpg",
      "../images/Outdoor/Verbouw/verbouw15.jpg",
      "../images/Outdoor/Verbouw/verbouw16.jpg",
      "../images/Outdoor/Verbouw/verbouw17.jpg",
      "../images/Outdoor/Verbouw/verbouw18.jpg",
      "../images/Outdoor/Verbouw/verbouw19.jpg",
      "../images/Outdoor/Verbouw/verbouw20.jpg",
      "../images/Outdoor/Verbouw/verbouw21.jpg",
      "../images/Outdoor/Verbouw/verbouw22.jpg",
      "../images/Outdoor/Verbouw/verbouw23.jpg",
      "../images/Outdoor/Verbouw/verbouw24.jpg",
      "../images/Outdoor/Verbouw/verbouw25.jpg",
      "../images/Outdoor/Verbouw/verbouw26.jpg",
    ],
    description: "Verbouw en renovatie van complete ruimtes."
  },
]);

/* ================= CAROUSEL ================= */

const activeIndex = ref(outdoorCards.value.map(() => 0));

let carouselInterval = null;

const startCarousel = () => {
  stopCarousel();
  carouselInterval = setInterval(() => {
    activeIndex.value = activeIndex.value.map((i, idx) => {
      const imgs = outdoorCards.value[idx].images;
      return (i + 1) % imgs.length;
    });
  }, 4000);
};

const stopCarousel = () => {
  if (carouselInterval) {
    clearInterval(carouselInterval);
    carouselInterval = null;
  }
};

onMounted(startCarousel);
onBeforeUnmount(stopCarousel);

/* ================= LIGHTBOX ================= */

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

        <br />
       <main class="flex-grow pt-36 lg:pt-44 px-6 lg:px-16 pb-10">
    <!-- PAGE TITLE -->
    <h1 class="text-4xl font-bold text-center mb-40 tracking-wide text-[#2F4F2F]">
        Outdoor Services
    </h1>
    <br />

    <!-- OUTDOOR GRID -->
    <section class="mb-28 mt-24">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            <div
                v-for="(card, i) in outdoorCards"
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

                    <!-- OCHRE BROWN GRADIENT (RAL 3001) -->
                    <div
                        class="absolute inset-0 bg-gradient-to-b from-[#8C3A2B]/30 via-[#7A2E22]/50 to-[#5C1F16]/70 pointer-events-none mix-blend-multiply"
                    ></div>

                    <span
                        class="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold text-center px-4 leading-snug drop-shadow-xl tracking-wide"
                        style="
                          text-shadow:
                            0 0 10px rgba(140, 58, 43, 0.6),
                            0 0 20px rgba(92, 31, 22, 0.85);
                        "
                    >
                        {{ card.title }}
                    </span>

                    <!-- SOFT AMBIENT GLOW -->
                    <div
                        class="absolute -top-10 -left-20 w-40 h-40 rounded-full blur-3xl opacity-30 bg-white/20 pointer-events-none"
                    ></div>
                </div>

                <!-- DESCRIPTION (LEAF GREEN – RAL 6002) -->
                <p class="mt-4 text-[#2F4F2F] text-center text-lg leading-relaxed">
                    {{ card.description }}
                </p>
            </div>
        </div>
    </section>
</main>


        <!-- LIGHTBOX -->
        <div v-if="lightboxOpen" class="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            @click.self="lightboxOpen = false">
            <button @click="prevImage" class="cursor-pointer absolute left-8 text-white text-4xl font-bold">
                ‹
            </button>

            <img :src="lightboxImages[lightboxIndex]" class="max-h-[80vh] max-w-[90vw] rounded-xl shadow-2xl" />

            <button @click="nextImage" class="cursor-pointer absolute right-8 text-white text-4xl font-bold">
                ›
            </button>

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
