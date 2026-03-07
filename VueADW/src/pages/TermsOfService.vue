<script setup>
import Navbar from '@/components/Navbar.vue'
import { useHead } from '@vueuse/head'

const effectiveDate = new Date().toLocaleDateString()

useHead({
  title: 'Terms of Service | Allround Dienstverlening Willemsen',
  meta: [
    {
      name: 'description',
      content: 'Lees de Terms of Service van Allround Dienstverlening Willemsen. Informatie over gebruik van onze website, aansprakelijkheid, en uw rechten.'
    },
    {
      name: 'keywords',
      content: 'terms of service, gebruiksvoorwaarden, aansprakelijkheid, website regels, flevoland , Allround Dienstverlening Willemsen'
    }
  ]
})
</script>

<template>
  <div class="relative bg-white min-h-screen">
    <!-- Navbar solid -->
    <Navbar :solid="true" />
    <br/>
    
    <main class="pt-36 lg:pt-44 px-6 lg:px-16 max-w-7xl mx-auto leading-relaxed text-gray-900">
      <h1 class="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Terms of Service</h1>
      <p class="mb-6 text-sm text-gray-500 leading-8">Effective Date: {{ effectiveDate }}</p>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-2 leading-10">1. Acceptance of Terms</h2>
        <p>
          By accessing or using 
          <a href="https://www.adwillemsen.nl" class="text-green-600 hover:underline" target="_blank">adwillemsen.nl</a>, 
          you agree to these Terms of Service and our Privacy Policy. If you do not agree with any part of these terms, please refrain from using our website.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-2 leading-10">2. Use of Our Website</h2>
        <p>
          You agree to use our website only for lawful purposes and in a way that does not infringe on the rights of others or restrict their use and enjoyment. Any misuse, unauthorized access, or interference with the website is strictly prohibited.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-2 leading-10">3. Intellectual Property</h2>
        <p>
          All content on this site — including text, images, graphics, and logos — is the property of ADW Dronten or its licensors and is protected by copyright and trademark laws. You may not reproduce, distribute, or reuse any content without our prior written consent.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-2 leading-10">4. Privacy</h2>
        <p>
          Your use of our website is also governed by our 
          <RouterLink to="/PrivacyPolicy" class="text-green-600 hover:underline">Privacy Policy</RouterLink>. 
          We encourage you to review it to understand how we collect, use, and protect your data.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-2 leading-10">5. Limitation of Liability</h2>
        <p>
          Allround Dienstverlening Willemsen strives to keep the website accurate and up-to-date, but we make no guarantees of completeness or accuracy. We are not liable for any loss or damage arising from your use of or reliance on the content provided.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-2 leading-10">6. Third-Party Links</h2>
        <p>
          Our website may include links to external websites. We do not control or endorse the content on those sites and are not responsible for their practices or policies.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-2 leading-10">7. Modifications to These Terms</h2>
        <p>
          We reserve the right to update or modify these Terms of Service at any time. Any changes will be posted on this page with a revised effective date. Continued use of the site constitutes your acceptance of those changes.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-2 leading-10">8. Governing Law</h2>
        <p>
          These terms are governed by and construed in accordance with the laws of the Netherlands. Any disputes related to these terms shall be subject to the exclusive jurisdiction of the Dutch courts.
        </p>
      </section>

      <section class="mb-8 mt-3">
        <h2 class="text-xl font-semibold mb-2 leading-10">9. Contact</h2>
        <p>For any questions or requests related to these Terms of Service, please feel free to contact us:</p>
        <p class="leading-10">
          <strong class="text-green-600">Allround Dienstverlening Willemsen</strong><br />
          <a href="mailto:info@adwillemsen.nl" class="text-green-600 hover:underline">info@adwillemsen.nl</a><br />
          <a href="https://www.adwillemsen.nl" class="text-green-600 hover:underline" target="_blank">www.adwillemsen.nl</a>
        </p>
      </section>

      <p class="mt-10 text-sm text-gray-500 leading-8">
        Last updated: {{ effectiveDate }}
      </p>
    </main>
  </div>
</template>
