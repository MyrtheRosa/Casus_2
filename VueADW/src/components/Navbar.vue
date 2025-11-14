<template>
  <nav :class="[
    'fixed top-0 left-0 w-full z-50 transition-colors duration-300 flex items-center justify-between p-6 lg:px-8',
    props.solid || isScrolled
      ? 'bg-white text-[#1f2937] shadow-md'
      : 'bg-transparent text-white'
  ]">
    <!-- Logo -->
    <div class="flex items-center">
      <a href="/" class="-m-1.5 p-1.5">
        <img class="h-22 w-auto" src="/images/adwLogo.png" alt="ADW Logo" />
      </a>
    </div>

    <!-- Desktop menu -->
    <div class="hidden lg:flex lg:gap-x-12">
      <a href="/" class="menu-item text-lg font-semibold relative">Home</a>
      <a href="/DienstPage" class="menu-item text-lg font-semibold relative">Diensten</a>
      <a href="/ContactPage" class="menu-item text-lg font-semibold relative">Contact</a>
    </div>

 <!-- Hamburger / Close button (mobile) -->
<div class="lg:hidden relative z-[60]">
  <button
    @click="toggleMobileMenu"
    type="button"
    class="inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
    :class="(props.solid || isScrolled) ? 'text-[#1f2937]' : 'text-white'"
  >
    <!-- Hamburger icon -->
    <svg
      v-if="!mobileMenuOpen"
      xmlns="http://www.w3.org/2000/svg"
      class="h-7 w-7"
      fill="none"
      viewBox="0 0 24 24"
      :stroke="props.solid || isScrolled ? '#1f2937' : '#ffffff'"
      stroke-width="2"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>

    <!-- Cross icon (ALWAYS WHITE) -->
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      class="h-7 w-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#ffffff"
      stroke-width="2"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
</div>

    <!-- Mobile menu overlay -->
    <transition name="slide">
      <div v-if="mobileMenuOpen"
        class="fixed inset-0 bg-[#1f1f1f]/95 flex flex-col items-center justify-center space-y-8 text-2xl font-semibold text-white z-40">
        <a href="/" @click="toggleMobileMenu">Home</a>
        <a href="/DienstPage" @click="toggleMobileMenu">Diensten</a>
        <a href="/ContactPage" @click="toggleMobileMenu">Contact</a>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  solid: {
    type: Boolean,
    default: false
  }
})

const mobileMenuOpen = ref(false)
const toggleMobileMenu = () => (mobileMenuOpen.value = !mobileMenuOpen.value)

const isScrolled = ref(false)
function handleScroll() {
  isScrolled.value = window.scrollY > window.innerHeight * 0.4
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.menu-item {
  position: relative;
  padding: 0.25rem 0;
  text-decoration: none;
  transition: color 0.3s ease;
  color: inherit;
  /* neemt automatisch wit of grijs over van nav */
}

/* Dubbele lijn animatie */
.menu-item::before,
.menu-item::after {
  content: '';
  position: absolute;
  height: 1.2px;
  background-color: #22c55e;
  width: 0;
  transition: all 0.4s ease;
}

.menu-item::before {
  top: 0;
  right: 0;
}

.menu-item::after {
  bottom: 0;
  left: 0;
}

.menu-item:hover::before {
  width: 100%;
  left: 0;
  right: auto;
}

.menu-item:hover::after {
  width: 100%;
  right: 0;
  left: auto;
}

.menu-item:hover {
  color: #22c55e;
}

/* Slide animatie voor mobiel menu */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
