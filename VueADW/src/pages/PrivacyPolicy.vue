<template>
  <div class="max-w-4xl mx-auto px-4 py-12 text-gray-800">
    <h1 class="text-3xl font-bold mb-6">Privacy Policy</h1>

    <p class="mb-4">
      Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.
    </p>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">1. Information We Collect</h2>
      <p>
        We may collect personal information such as your name, email address, and usage data when you use our services or interact with our website.
      </p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">2. How We Use Information</h2>
      <p>
        We use the information we collect to provide, improve, and personalize our services, communicate with you, and ensure security and compliance.
      </p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">3. Sharing Your Information</h2>
      <p>
        We do not sell your personal data. We may share information with trusted third parties who assist in operating our services, as long as they agree to keep it confidential.
      </p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">4. Cookies</h2>
      <p>
        We use cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.
      </p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-2">5. Your Rights</h2>
      <p>
        You have the right to access, correct, or delete your personal information. Contact us at [your-email@example.com] for any privacy-related requests.
      </p>
    </section>

    <section>
      <h2 class="text-xl font-semibold mb-2">6. Changes to This Policy</h2>
      <p>
        We may update this policy from time to time. Any changes will be posted on this page with an updated revision date.
      </p>
    </section>

    <p class="mt-8 text-sm text-gray-500">
      Last updated: {{ lastUpdated }}
    </p>
  </div>
</template>

<script setup>
const lastUpdated = new Date().toLocaleDateString()
</script>
