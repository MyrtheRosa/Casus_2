<template>
  <div>
    <Navbar />
    <RouterView />
    <Footer v-if="!isInboxPage" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const route = useRoute()

// Hide ONLY the Footer on the InboxPage
const isInboxPage = computed(() => route.name === 'InboxPage')
</script>
