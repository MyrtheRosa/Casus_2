<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Navbar from "../components/Navbar.vue";

// ------ INDOOR CARDS ------
const indoorCards = ref([
    { title: "Tegelen", images: ["../images/tegelen1.jpg", "../images/tegelen2.jpg", "../images/tegelen3.jpg", "../images/tegelen4.jpg"], description: "Professioneel tegelwerk voor elke ruimte." },
    { title: "Badkamer", images: ["../images/badkamer1.jpg", "../images/badkamer2.jpg", "../images/badkamer3.jpg", "../images/badkamer4.jpg"], description: "Complete badkamers op maat gemaakt." },
    { title: "Keuken", images: ["../images/keuken1.jpg", "../images/keuken2.jpg", "../images/keuken3.jpg", "../images/keuken4.jpg"], description: "Strakke en moderne keukens volledig geplaatst." },
    { title: "Isoleren", images: ["../images/isoleren1.jpg", "../images/isoleren2.jpg", "../images/isoleren3.jpg", "../images/isoleren4.jpg"], description: "Duurzame isolatie voor optimaal wooncomfort." },
    { title: "Aanleg vloeren", images: ["../images/vloeren1.jpg", "../images/vloeren2.jpg", "../images/vloeren3.jpg", "../images/vloeren4.jpg"], description: "Hoogwaardige vloeren zorgvuldig geplaatst." },
    { title: "Vloerverwarming", images: ["../images/vloerverwarming1.jpg", "../images/vloerverwarming2.jpg", "../images/vloerverwarming3.jpg", "../images/vloerverwarming4.jpg"], description: "Comfortabele en energiezuinige vloerverwarming." },
    { title: "Kozijnen plaatsen/vervangen", images: ["../images/kozijnen1.jpg", "../images/kozijnen2.jpg", "../images/kozijnen3.jpg", "../images/kozijnen4.jpg"], description: "PVC, hout en aluminium kozijnen op maat." },
    { title: "Riolering + elektra", images: ["../images/elektra1.jpg", "../images/elektra2.jpg", "../images/elektra3.jpg", "../images/elektra4.jpg"], description: "Volledige aanleg van riolering en elektriciteit." },
]);

// ---- SPECIALS ----
const specialCards = ref([
    { title: "Tafels samenstellen", images: ["../images/tafel1.jpg", "../images/tafel2.jpg", "../images/tafel3.jpg", "../images/tafel4.jpg"], description: "Op maat gemaakte tafels in elke stijl." },
    { title: "Meubilair samenstellen", images: ["../images/meubel1.jpg", "../images/meubel2.jpg", "../images/meubel3.jpg", "../images/meubel4.jpg"], description: "Kasten, meubels en maatwerk interieur." },
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
            specialCards.value.length +
            aannemerijCards.value.length;

        activeIndex.value = activeIndex.value.map((i, idx) => {
            let list;
            if (idx < indoorCards.value.length)
                list = indoorCards.value[idx].images;
            else if (idx < indoorCards.value.length + specialCards.value.length)
                list = specialCards.value[idx - indoorCards.value.length].images;
            else
                list =
                    aannemerijCards.value[
                        idx - indoorCards.value.length - specialCards.value.length
                    ].images;

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
            <h1 class="text-4xl font-bold text-center mb-40 tracking-wide text-gray-800">
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
                            <img :src="card.images[activeIndex[i]]" class="w-full h-full object-cover" />

                            <!-- GOLD GRADIENT -->
                            <div
                                class="absolute inset-0 bg-gradient-to-b from-yellow-300/30 via-yellow-500/50 to-yellow-700/70 pointer-events-none mix-blend-multiply"
                            ></div>

                            <span
                                class="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold text-center px-4 drop-shadow-xl tracking-wide"
                            >
                                {{ card.title }}
                            </span>
                        </div>

                        <p class="mt-4 text-gray-700 text-center text-lg leading-relaxed">
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
                            <img :src="card.images[activeIndex[i + indoorCards.length]]" class="w-full h-full object-cover" />

                            <!-- GOLD GRADIENT -->
                            <div
                                class="absolute inset-0 bg-gradient-to-b from-yellow-300/30 via-yellow-500/50 to-yellow-700/70 pointer-events-none mix-blend-multiply"
                            ></div>

                            <span
                                class="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold text-center px-4 drop-shadow-xl tracking-wide"
                            >
                                {{ card.title }}
                            </span>
                        </div>

                        <p class="mt-4 text-gray-700 text-center text-lg leading-relaxed">
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
            <button @click="prevImage" class="absolute left-8 text-white text-4xl font-bold">‹</button>

            <img :src="lightboxImages[lightboxIndex]" class="max-h-[80vh] max-w-[90vw] rounded-xl shadow-2xl" />

            <button @click="nextImage" class="absolute right-8 text-white text-4xl font-bold">›</button>

            <button @click="lightboxOpen = false" class="cursor-pointer absolute top-10 right-10 text-white text-3xl">
                ✕
            </button>
        </div>
    </div>
</template>

<style scoped>
@keyframes fadeIn {
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
    animation: fadeIn 0.8s ease forwards;
}

.group:hover img {
    transition: transform 0.7s ease;
}
</style>
