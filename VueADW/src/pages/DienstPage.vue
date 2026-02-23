<script setup>
import { useHead } from '@vueuse/head'
import Navbar from '../components/Navbar.vue';
import Indoorhome from '../components/indoorhome.vue';
import Outdoorhome from '../components/outdoorhome.vue';

useHead({
  title: 'Diensten | Allround Dienstverlening Willemsen',
  meta: [
    {
      name: 'description',
      content:
        'Ontdek de diensten van Allround Dienstverlening Willemsen. Van indoor- tot outdoor werkzaamheden, onderhoud en klussen voor particulieren en bedrijven.'
    },
    {
      name: 'keywords',
      content:
        'diensten ADW, flevoland, indoor klussen, outdoor klussen, onderhoud woning, onderhoud bedrijf, bouwprojecten, Allround Dienstverlening Willemsen'
    }
  ]
})
</script>

<template>
  <div class="relative bg-white min-h-screen flex flex-col">
    <Navbar :solid="true" />

    <main class="flex-grow pt-36 lg:pt-44 px-6 lg:px-16 pb-32 flex flex-col lg:flex-row justify-center gap-16">
      <!-- Grid container -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start justify-items-center">
        <Indoorhome />
        <Outdoorhome />
      </div>
    </main>
  </div>
</template>
