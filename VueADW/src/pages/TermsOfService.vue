<template>
  <div class="max-w-4xl mx-auto px-4 py-12 text-gray-800 leading-relaxed">
    <h1 class="text-3xl font-bold mb-6">Terms of Service</h1>
    <p class="mb-4 text-sm text-gray-500">Effective Date: {{ effectiveDate }}</p>

    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
      <p>
        By accessing or using 
        <a href="https://www.adwdronten.nl" class="text-green-600 hover:underline" target="_blank">adwdronten.nl</a>, 
        you agree to these Terms of Service and our Privacy Policy. If you do not agree with any part of these terms, please refrain from using our website.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-2">2. Use of Our Website</h2>
      <p>
        You agree to use our website only for lawful purposes and in a way that does not infringe on the rights of others or restrict their use and enjoyment. Any misuse, unauthorized access, or interference with the website is strictly prohibited.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-2">3. Intellectual Property</h2>
      <p>
        All content on this site — including text, images, graphics, and logos — is the property of ADW Dronten or its licensors and is protected by copyright and trademark laws. You may not reproduce, distribute, or reuse any content without our prior written consent.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-2">4. Privacy</h2>
      <p>
        Your use of our website is also governed by our 
        <RouterLink to="/PrivacyPolicy" class="text-green-600 hover:underline">Privacy Policy</RouterLink>. 
        We encourage you to review it to understand how we collect, use, and protect your data.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
      <p>
        ADW Dronten strives to keep the website accurate and up-to-date, but we make no guarantees of completeness or accuracy. We are not liable for any loss or damage arising from your use of or reliance on the content provided.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-2">6. Third-Party Links</h2>
      <p>
        Our website may include links to external websites. We do not control or endorse the content on those sites and are not responsible for their practices or policies.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-2">7. Modifications to These Terms</h2>
      <p>
        We reserve the right to update or modify these Terms of Service at any time. Any changes will be posted on this page with a revised effective date. Continued use of the site constitutes your acceptance of those changes.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-2">8. Governing Law</h2>
      <p>
        These terms are governed by and construed in accordance with the laws of the Netherlands. Any disputes related to these terms shall be subject to the exclusive jurisdiction of the Dutch courts.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-2">9. Contact</h2>
      <p>
        If you have any questions or concerns regarding these Terms of Service, please feel free to contact us:
      </p>
      <p class="mt-2">
        <strong>ADW Dronten</strong><br />
        <a href="mailto:info@adwdronten.nl" class="text-green-600 hover:underline">info@adwdronten.nl</a><br />
        <a href="https://www.adwdronten.nl" class="text-green-600 hover:underline" target="_blank">www.adwdronten.nl</a>
      </p>
    </section>

    <p class="mt-10 text-sm text-gray-500">
      Last updated: {{ effectiveDate }}
    </p>
  </div>
</template>

<script setup>
const effectiveDate = new Date().toLocaleDateString()
</script>
