<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <main class="bg-white min-h-screen">
    <!-- Gebruik de Navbar component -->
    <Navbar />

    <!-- Hero Section -->
    <section
      id="hero"
      class="relative h-screen bg-cover bg-center transition-all duration-500"
      style="background-image: url('/images/homebackground.jpeg')">
      <!-- Donkere overlay -->
      <div class="absolute inset-0 bg-black opacity-60"></div>

      <!-- Hero tekst -->
      <div class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 class="text-5xl font-bold sm:text-7xl mb-4">Welkom bij ADW</h1>
        <p class="text-lg sm:text-2xl max-w-2xl">
          Allround Dienstverlening Willemsen — uw partner voor aanleg, onderhoud en bouwprojecten.
        </p>
      </div>
    </section>

    <!-- Over ADW -->
    <section class="relative px-6 py-20 lg:px-8 bg-white text-gray-800">
      <div class="mx-auto max-w-6xl">
        <h2 class="text-4xl font-semibold mb-8">Over ADW</h2>
        <p class="text-lg leading-relaxed text-gray-600">
          Allround Dienstverlening Willemsen (ADW) is opgericht door mij,
                Wytse Willemsen, in februari 2016. ADW is ontstaan door de
                verschillende uitgevoerde werkzaamheden. Zo ben ik in 2011
                begonnen met tuinen aanleggen bij een bedrijf dat gespecialiseerd
                is in het leggen van kunstgras. Aan de hand van aantrekkende
                aanvragen voor soortgelijke werkzaamheden, maar ook voor
                verschillende werkzaamheden in de agrarische sector, ben ik voor
                mijzelf begonnen. Door de jaren heen heb ik vele disciplines
                aangeleerd, van (kunst)gras leggen en bestrating, tot bezigheden
                in de bouw, loodgieterij en wereld van elektriciteit. Daarnaast
                heb ik een interesse ontwikkeld in het uitdenken en aanleggen van
                tuinen.
                <br /><br />
                Door deze achtergrond in veelzijdigheid, is het voor mij makkelijk
                geworden om integraal uw wensen uit te denken en te combineren.
                Dit in tegenstelling tot bijvoorbeeld mijn ervaring in de bouw,
                waar (te) vaak enkel op de eigen discipline wordt gelet en er zo
                uitvoeringsfouten ontstaan. Door met u uw wensen en ideeën door te
                spreken, kunnen we gezamenlijk tot een praktisch (en financieel)
                haalbaar plan komen.
                <br /><br />
                Heeft u interesse of vragen? Leg het mij voor aan de hand van de
                contactgegevens onder het kopje
                <a
                  href="/ContactPage"
                  class="text-green-600 hover:text-green-500"
                  >"Contact"</a
                >.
                <br /><br />
                U bent altijd welkom bij
                <span class="text-green-600 font-semibold"
                  ><span style="color: rgb(31, 78, 121)">A</span>llround
                  <span style="color: rgb(31, 78, 121)">D</span>ienstverlening
                  <span style="color: rgb(31, 78, 121)">W</span>illemsen</span
                >, gevestigd in Oud-Dronten.
          </p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-antraciet text-white py-10 text-center">
      <p>&copy; 2025 Allround Dienstverlening Willemsen — Alle rechten voorbehouden</p>
    </footer>
  </main>
</template>
