<template>
  <div>
    <Navbar v-if="!isInboxPage" />
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

// Hide Navbar and Footer on InboxPage only
const isInboxPage = computed(() => route.name === 'InboxPage')
</script>

