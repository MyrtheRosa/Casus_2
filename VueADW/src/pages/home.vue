<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'

import { onMounted, onBeforeUnmount } from 'vue'

const handleScroll = () => {
  const hero = document.getElementById('hero');
  const scrollY = window.scrollY;
  const maxHeight = window.innerHeight;
  const minHeight = 0;
  const speed = 2;

  const newHeight = Math.max(maxHeight - (scrollY * speed), minHeight);

  if (hero) {
    hero.style.height = `${newHeight}px`;
  }

  // Navbar transparant maken en naar antraciet kleuren
  const navbar = document.querySelector('nav');
  if (navbar) {
    if (scrollY > maxHeight * 0.4) {
      navbar.classList.add('bg-antraciet');
      navbar.classList.remove('bg-transparent');  // Verwijder transparante achtergrond als navbar antraciet is
    } else {
      navbar.classList.remove('bg-antraciet');
      navbar.classList.add('bg-transparent');  // Voeg transparantie toe wanneer de navbar klein is
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>

nav {
  transition: background-color 0.2s ease-in-out;
 
}

.bg-antraciet {
  background-color: rgba(44, 44, 44, 1);
  
}

.bg-transparent {
  background-color: rgba(45, 45, 45, 0.5);
}

#hero {
  transition: height 0.2s ease-in-out;
}


main {
  padding-top: 14rem;
}
</style>

<template>
 
  <main>
    
    <div class="bg-white">
      <header class="fixed inset-x-0 top-0 z-50">
        <!-- Hero section -->
        <section id="hero" class="relative h-screen bg-cover bg-center transition-all duration-400"
          style="background-image: url('/images/homebackground.jpeg')">
          <!-- Overlay om de afbeelding donkerder te maken -->
          <div class="absolute inset-0 bg-black opacity-85 z-0"></div>

          <!-- Navbar, sticky bovenaan het scherm -->
          <nav class="sticky top-0 z-10 flex items-center justify-between p-10 lg:px-8 text-white bg-transparent">
            <div class="flex lg:flex-1">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img class="h-8 w-auto"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="">
              </a>
             
            </div>
            <div class="hidden lg:flex lg:gap-x-12 cursor-pointer">
              
              <a href="#" class="menu-item text-xl font-semibold">Home</a>
              <a href="#" class="menu-item text-xl font-semibold">Diensten</a>
              <a href="#" class="menu-item text-xl font-semibold">Contact</a>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" class="menu-item text-lg font-semibold">Log in <span aria-hidden="true">&rarr;</span></a>
            </div>
          </nav>
        </section>

        <!-- Mobile menu, show/hide based on menu open state. -->
        <div class="lg:hidden" role="dialog" aria-modal="true">
          <!-- Background backdrop, show/hide based on slide-over state. -->
          <div class="fixed inset-0 z-50"></div>
          <div
            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img class="h-8 w-auto"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="">
              </a>
              <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                <span class="sr-only">Close menu</span>
                <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <a href="#"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Home</a>
                  <a href="#"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Diensten</a>
                  <a href="#"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Contact</a>
                </div>
                <div class="py-6">
                  <a href="#"
                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log
                    in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="pt-[14rem]">
      <section class="relative px-8 pt-6 lg:px-8 mt-36">
        
        <div class="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56">
          <!-- Flex container die de tekst centreert (zowel verticaal als horizontaal) -->
          <div class="flex items-center justify-center h-full">
            <!-- Voeg padding toe voor wat buffer rondom de tekst -->
            <div class="text-start w-full px-4">
              <h1 class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">About ADW</h1>
              <br>
              <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl">
                Dienstverlening Willemsen (ADW) is opgericht door mij, Wytse Willemsen, in februari 2016. ADW is
                ontstaan door de verschillende uitgevoerde werkzaamheden. Zo ben ik in 2011 begonnen met tuinen
                aanleggen bij een
                bedrijf dat gespecialiseerd is in het leggen van kunstgras. Aan de hand van aantrekkende aanvragen voor
                soortgelijke werkzaamheden, maar ook voor verschillende werkzaamheden in de agrarische sector, ben ik
                voor mijzelf begonnen. Door de jaren heen heb ik vele disciplines aangeleerd, van (kunst)gras leggen en
                bestrating, tot bezigheden in de bouw, loodgieterij en wereld van elektriciteit. Daarnaast heb ik een
                interesse ontwikkelt in het uitdenken en aanleggen van tuinen.

                Door deze achtergrond in veelzijdigheid, is het voor mij makkelijk geworden om integraal uw wensen uit
                te denken en te combineren. Dit in tegenstelling tot bijvoorbeeld mijn ervaring in de bouw, waar (te)
                vaak
                enkel op de eigen discipline wordt gelet en er zo uitvoerings-fouten ontstaan. Door met u uw wensen en
                de ideeën door te spreken, kunnen we gezamenlijk tot een praktisch (en financieel) haalbaar plan komen.

                <br>
                <br>
                Heeft u interesse of vragen? Leg het mij voor aan de hand van de contactgegevens onder het kopje
                "Contact".

                <br>
                <br>
                U bent altijd welkom bij Allround Dienstverlening Willemsen, gevestigd in Oud-Dronten.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

      <!-- IDEK wat dit is tbf -->
      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true">
        <div
          class="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: 'home'
};
</script>