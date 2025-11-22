<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Navbar from "../components/Navbar.vue";

// ------ DATA FOR OUTDOOR CARDS ------
const outdoorCards = ref([
    { title: "Veranda/tuinhuis", images: ["../images/Outdoor/Veranda/veranda1.jpg", "../images/Outdoor/Veranda/veranda2.jpg", "../images/Outdoor/Veranda/veranda3.jpg", "../images/Outdoor/Veranda/veranda4.jpg"], description: "Prachtige veranda’s en tuinhuisjes volledig op maat." },
    { title: "Glazen schuifwanden plaatsen", images: ["../images/schuifwand1.jpg", "../images/schuifwand2.jpg", "../images/schuifwand3.jpg", "../images/schuifwand4.jpg"], description: "Moderne glazen schuifwanden voor binnen en buiten." },
    { title: "Straten", images: ["../images/straten1.jpg", "../images/straten2.jpg", "../images/straten3.jpg", "../images/straten4.jpg"], description: "Professioneel bestraten van opritten, terrassen en paden." },
    { title: "Riolering + elektra", images: ["../images/Outdoor/Riolering/riolering1.jpg", "../images/Outdoor/Riolering/riolering2.jpg", "../images/Outdoor/Tuin/riolering3.jpg", "../images/Outdoor/Tuin/riolering4.jpg"], description: "Vakkundige aanleg van leidingen en elektra buiten." },
    { title: "Gevelbekleding", images: ["../images/Outdoor/Gevelbekleding/gevel1.jpg", "../images/Outdoor/Gevelbekleding/gevel2.jpg", "../images/Outdoor/Gevelbekleding/gevel3.jpg"], description: "Keraliet, hout, sandwich, damwand, Trespa en meer." },
    { title: "Zetwerk", images: ["../images/zetwerk1.jpg", "../images/zetwerk2.jpg", "../images/zetwerk3.jpg", "../images/zetwerk4.jpg"], description: "Sandwich en damwand toepassingen voor elke constructie." },
    { title: "Deuren plaatsen", images: ["../images/Outdoor/Deuren/deuren1.jpg", "../images/Outdoor/Deuren/deuren2.jpg", "../images/Outdoor/Deuren/deuren3.jpg", "../images/Outdoor/Deuren/deuren4.jpg"], description: "Groot en klein deuren professioneel geplaatst." },
]);

// Specials
const specialCards = ref([
    { title: "Tuinaanleg", special: true, images: ["../images/Outdoor/Tuin/tuinaanleg1.jpg", "../images/Outdoor/Tuin/tuinaanleg2.jpg", "../images/Outdoor/Tuin/tuinaanleg3.jpg", "../images/Outdoor/Tuin/tuinaanleg4.jpg"], description: "Compleet tuinaanleg op maat en met oog voor detail." },
]);

// Aannemerij
const aannemerijCards = ref([
    { title: "Dak bekleding", images: ["../images/Outdoor/Verbouw/dak1.jpg", "../images/Outdoor/Verbouw/dak2.jpg", "../images/Outdoor/Verbouw/dak3.jpg", "../images/Outdoor/Verbouw/dak4.jpg"], description: "Professionele dakbedekking voor elk type dak." },
    { title: "Stucen", images: ["../images/stucen1.jpg", "../images/stucen2.jpg", "../images/stucen3.jpg", "../images/stucen4.jpg"], description: "Strak stucwerk voor binnen en buiten." },
    { title: "Airco plaatsen", images: ["../images/airco1.jpg", "../images/airco2.jpg", "../images/airco3.jpg", "../images/airco4.jpg"], description: "Koeling en klimaatbeheersing professioneel geïnstalleerd." },
    { title: "Zonnepanelen plaatsen", images: ["../images/zonnepanelen1.jpg", "../images/zonnepanelen2.jpg", "../images/zonnepanelen3.jpg", "../images/zonnepanelen4.jpg"], description: "Duurzame energie door zonnepanelen op maat." },
    { title: "Screens", images: ["../images/screens1.jpg", "../images/screens2.jpg", "../images/screens3.jpg", "../images/screens4.jpg"], description: "Schermen en zonwering voor een perfect comfort." },
]);

// ------ CAROUSEL STATE ------
const activeIndex = ref([
    ...outdoorCards.value.map(() => 0),
    ...specialCards.value.map(() => 0),
    ...aannemerijCards.value.map(() => 0),
]);

// auto switching every 4s
onMounted(() => {
    const interval = setInterval(() => {
        const totalCards = outdoorCards.value.length + specialCards.value.length + aannemerijCards.value.length;
        activeIndex.value = activeIndex.value.map((i, idx) => {
            let cardList;
            if (idx < outdoorCards.value.length) cardList = outdoorCards.value[idx].images;
            else if (idx < outdoorCards.value.length + specialCards.value.length) cardList = specialCards.value[idx - outdoorCards.value.length].images;
            else cardList = aannemerijCards.value[idx - outdoorCards.value.length - specialCards.value.length].images;
            return (i + 1) % cardList.length;
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
    lightboxIndex.value = (lightboxIndex.value + 1) % lightboxImages.value.length;
};

const prevImage = () => {
    lightboxIndex.value = (lightboxIndex.value - 1 + lightboxImages.value.length) % lightboxImages.value.length;
};
</script>

<template>
    <div class="relative bg-white min-h-screen flex flex-col">
        <Navbar :solid="true" />

        <br/>
        <main class="flex-grow pt-36 lg:pt-44 px-6 lg:px-16 pb-10">
            <!-- PAGE TITLE -->
            <h1 class="text-4xl font-bold text-center mb-40 tracking-wide text-gray-800">
                Outdoor Services
            </h1>
            <br/>

            <!-- OUTDOOR GRID -->
            <section class="mb-28 mt-24">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                    <div v-for="(card, i) in outdoorCards" :key="card.title"
                        class="group cursor-pointer animate-fadeIn">
                        <div class="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg transform-gpu transition-all duration-700 group-hover:scale-[1.03]"
                            @click="openLightbox(card.images, activeIndex[i])">
                            <img :src="card.images[activeIndex[i]]" class="w-full h-full object-cover" />
                            <div
                                class="absolute inset-0 bg-gradient-to-b from-emerald-400/30 via-emerald-600/50 to-emerald-800/70 pointer-events-none mix-blend-multiply">
                            </div>
                            <span
                                class="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold text-center px-4 leading-snug drop-shadow-xl tracking-wide">

                                {{ card.title }}
                            </span>
                            <div
                                class="absolute -top-10 -left-20 w-40 h-40 rounded-full blur-3xl opacity-30 bg-white/20 pointer-events-none">
                            </div>
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
                <h2 class="text-3xl font-semibold text-gray-800 mb-28 text-center">Specials</h2>
            <br/>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                    <div v-for="(card, i) in specialCards" :key="card.title"
                        class="group cursor-pointer animate-fadeIn">
                        <div class="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg transform-gpu transition-all duration-700 group-hover:scale-[1.03]"
                            @click="openLightbox(card.images, activeIndex[i + outdoorCards.length])">
                            <img :src="card.images[activeIndex[i + outdoorCards.length]]"
                                class="w-full h-full object-cover" />
                            <div
                                class="absolute inset-0 bg-gradient-to-b from-emerald-400/30 via-emerald-600/50 to-emerald-800/70 pointer-events-none mix-blend-multiply">
                            </div>
                            <span
                                class="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold text-center px-4 leading-snug drop-shadow-xl tracking-wide">

                                {{ card.title }}
                            </span>
                            <div
                                class="absolute -top-10 -left-20 w-40 h-40 rounded-full blur-3xl opacity-30 bg-white/20 pointer-events-none">
                            </div>
                        </div>
                        <p class="mt-4 text-gray-700 text-center text-lg leading-relaxed">
                            {{ card.description }}
                        </p>
                    </div>
                </div>
            </section>

            <br/>
            <!-- AANNEMERIJ -->
            <section class="mb-28">
                <h2 class="text-3xl font-semibold text-gray-800 mb-28 text-center">Aannemerij</h2>
                <br/>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                    <div v-for="(card, i) in aannemerijCards" :key="card.title"
                        class="group cursor-pointer animate-fadeIn">
                        <div class="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg transform-gpu transition-all duration-700 group-hover:scale-[1.03]"
                            @click="openLightbox(card.images, activeIndex[i + outdoorCards.length + specialCards.length])">
                            <img :src="card.images[activeIndex[i + outdoorCards.length + specialCards.length]]"
                                class="w-full h-full object-cover" />
                            <div
                                class="absolute inset-0 bg-gradient-to-b from-emerald-400/30 via-emerald-600/50 to-emerald-800/70 pointer-events-none mix-blend-multiply">
                            </div>
                            <span
                                class="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold text-center px-4 leading-snug drop-shadow-xl tracking-wide">
                                {{ card.title }}
                            </span>
                            <div
                                class="absolute -top-10 -left-20 w-40 h-40 rounded-full blur-3xl opacity-30 bg-white/20 pointer-events-none">
                            </div>
                        </div>
                        <p class="mt-4 text-gray-700 text-center text-lg leading-relaxed">
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
