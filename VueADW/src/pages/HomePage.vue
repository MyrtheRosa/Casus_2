<script setup>
import { useHead } from '@vueuse/head'
import Navbar from '@/components/Navbar.vue'


useHead({
  title: 'Allround Dienstverlening Willemsen | Klusbedrijf & Onderhoud',
  meta: [
    {
      name: 'description',
      content:
        'Allround Dienstverlening Willemsen is uw partner voor aanleg, onderhoud en bouwprojecten. Betrouwbaar vakmanschap voor particulieren en bedrijven.'
    },
    {
      name: 'keywords',
      content:
        'allround klusbedrijf, flevoland, bouw en onderhoud, aanleg projecten, zzp klusbedrijf, renovatie en onderhoud'
    }
  ]
})
</script>

<template>
  <main class="bg-white min-h-screen">
    <!-- Gebruik de Navbar component -->
    <Navbar />

    <!-- Hero Section -->
    <section id="hero" class="relative h-screen bg-cover bg-center transition-all duration-500"
      style="background-image: url('/images/Indoor/Bedrijfsruimte/magazijn7.jpg')">
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
    <section class="relative px-6 py-20 lg:px-8 bg-white text-gray-900">
      <div class="mx-auto max-w-6xl">
        <h2 class="text-4xl font-semibold mb-8">Over Mij</h2>
        <p class="text-lg leading-relaxed text-gray-900">
          Vanaf jongs af aan ben ik altijd bezig met bouw en klussen. Om van niets iets te maken. Met 2 rechterhanden
          wilde ik mijn brood kunnen en blijven verdienen. Eentonig werk is niks voor mij, daarom blijf ik mij verdiepen
          om mijn kennis en kunnen uit te breiden.
          <br /><br />
          Sinds een jaar of 10 ben ik werkzaam als zelfstandig ondernemer. Ik werk precies, zorgvuldig en neem u zoveel
          mogelijk mee in het proces om samen het (gewenste/beoogte) resultaat te behalen.
          <br /><br />
          Heeft u vragen of wilt u werkzaamheden door mij willen laten uitvoeren? Dan kunt u altijd <a
            href="/ContactPage" class="text-green-600 hover:text-green-500 hover:underline">contact</a> opnemen.
          <br /><br />
          U bent altijd welkom bij
          <span class="text-green-600 font-semibold"><span style="color: rgb(31, 78, 121)">A</span>llround
            <span style="color: rgb(31, 78, 121)">D</span>ienstverlening
            <span style="color: rgb(31, 78, 121)">W</span>illemsen</span>.
        </p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-antraciet text-white py-10 text-center">
      <p>&copy; 2026 Allround Dienstverlening Willemsen — Alle rechten voorbehouden</p>
    </footer>
  </main>
</template>
