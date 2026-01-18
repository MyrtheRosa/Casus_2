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
            <li><a href="/DienstPage" class="hover:text-green-600">Diensten</a></li>
            <li><a href="/ContactPage" class="hover:text-green-600">Contact</a></li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h4 class="text-xl font-semibold mb-3">Support</h4>
          <ul class="text-lg space-y-2 text-gray-400">
            <li><a href="/PrivacyPolicy" class="hover:text-green-600">Privacy Policy</a></li>
            <li><a href="/TermsOfService" class="hover:text-green-600">Terms of Service</a></li>
          </ul>
        </div>

        <!-- Social Media -->
        <div>
          <h4 class="text-lg font-semibold mb-3">Follow Us</h4>
          <div class="flex space-x-4">
            <a href="https://www.instagram.com/allround_dienst.willemsen/" aria-label="Instagram" class="text-gray-400 hover:text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm4.5 3.5a5 5 0 1 1 0 10a5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6zm4.75-.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5z" />
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
