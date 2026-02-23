<script setup>
import Navbar from '@/components/Navbar.vue'
import { useHead } from '@vueuse/head'

const lastUpdated = new Date().toLocaleDateString()

useHead({
  title: 'Privacybeleid | Allround Dienstverlening Willemsen',
  meta: [
    {
      name: 'description',
      content: 'Lees ons privacybeleid bij Allround Dienstverlening Willemsen. Ontdek hoe wij omgaan met uw gegevens, cookies, en uw rechten.'
    },
    {
      name: 'keywords',
      content: 'privacybeleid, cookies, gegevensbescherming, persoonsgegevens, flevoland, Allround Dienstverlening Willemsen'
    }
  ]
})
</script>

<template>
  <div class="relative bg-white min-h-screen">
    <!-- Navbar solid -->
    <Navbar :solid="true" />
    <br/>
    
    <main class="pt-36 lg:pt-44 px-6 lg:px-16 max-w-7xl mx-auto">
      <h1 class="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
      <p class="mb-6 text-sm text-gray-500">Effective Date: {{ lastUpdated }}</p>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          At ADW Dronten, your privacy is important to us. This policy outlines what data we collect, how we use it, and the rights you have regarding your information.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-2">2. Information We Collect</h2>
        <p>We may collect the following types of personal data:</p>
        <ul class="list-disc list-inside mt-2 space-y-1">
          <li><strong>Contact details:</strong> such as name, email address, and phone number.</li>
          <li><strong>Technical data:</strong> including IP address, browser type, and site usage statistics.</li>
          <li><strong>Communication data:</strong> content of inquiries and any other correspondence with us.</li>
          <li><strong>Cookies:</strong> used to enhance your experience and track site performance.</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-2">3. How We Use Your Data</h2>
        <ul class="list-disc list-inside mt-2 space-y-1">
          <li>Respond to inquiries and provide customer service.</li>
          <li>Improve our website and services.</li>
          <li>Send relevant updates or communications (if opted in).</li>
          <li>Ensure site security and legal compliance.</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-2">4. Sharing Your Data</h2>
        <p>
          We do not sell your personal information. We may share data with trusted service providers who assist in running our website, under strict confidentiality agreements.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-2">5. Cookies</h2>
        <p>
          Cookies help us understand how visitors use our site and allow us to enhance functionality. You can adjust your cookie preferences in your browser settings at any time.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-2">6. Your Rights</h2>
        <ul class="list-disc list-inside mt-2 space-y-1">
          <li>Access, correct, or delete your personal data.</li>
          <li>Object to or restrict certain processing activities.</li>
          <li>Request data portability in a structured format.</li>
        </ul>
        <p class="mt-2">
          To exercise any of these rights, please contact us at
          <a href="mailto:info@adwdronten.nl" class="text-green-600 hover:underline">info@adwdronten.nl</a>.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-2">7. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your data from unauthorized access, misuse, or disclosure.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-2">8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The latest version will always be available on our website and reflected by the effective date above.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-2">9. Contact</h2>
        <p>For any questions or requests related to this policy, feel free to contact us:</p>
        <p class="mt-2">
          <strong>ADW Dronten</strong><br />
          <a href="mailto:info@adwdronten.nl" class="text-green-600 hover:underline">info@adwdronten.nl</a><br />
          <a href="https://www.adwdronten.nl" class="text-green-600 hover:underline" target="_blank">www.adwdronten.nl</a>
        </p>
      </section>

      <p class="mt-10 text-sm text-gray-500">
        Last updated: {{ lastUpdated }}
      </p>
    </main>
  </div>
</template>
