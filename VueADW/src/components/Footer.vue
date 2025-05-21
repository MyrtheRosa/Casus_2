<template>
  <footer class="bg-[rgba(44,44,44,1)] text-white">
    <div class="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <!-- Logo and Description -->
        <div>
          <h4 class="text-xl text-green-600 font-bold mb-2">Allround Dienstverlening Willemsen</h4>
        </div>

        <!-- Navigation -->
        <div>
          <h4 class="text-xl font-semibold mb-3">Company</h4>
          <ul class="text-lg space-y-2 text-gray-400">
            <li><a href="/" class="hover:text-green-600">Home</a></li>
            <li><a href="#" class="hover:text-green-600">Diensten</a></li>
            <li><a href="/contact" class="hover:text-green-600">Contact</a></li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h4 class="text-xl font-semibold mb-3">Support</h4>
          <ul class="text-lg space-y-2 text-gray-400">
            <li><a href="#" class="hover:text-green-600">Help Center</a></li>
            <li><a href="#" class="hover:text-green-600">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-green-600">Terms of Service</a></li>
          </ul>
        </div>

        <!-- Social Media -->
        <div>
          <h4 class="text-lg font-semibold mb-3">Follow Us</h4>
          <div class="flex space-x-4">
            <a href="#" aria-label="Facebook" class="text-gray-400 hover:text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2v1.8h2.4l-.4 3h-2v7A10 10 0 0022 12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="text-green-600 mt-10 leading-4 border-t border-gray-700 pt-6 text-left text-sm">
        © {{ new Date().getFullYear() }} Allround Dienstverlening Willemsen. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
