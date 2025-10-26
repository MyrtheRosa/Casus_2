<script setup>
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'

const agreed = ref(false)
function toggleAgreement() {
  agreed.value = !agreed.value
}
</script>

<template>
  <div class="relative bg-white min-h-screen">
    <!-- Navbar solid/antraciet -->
    <Navbar :solid="true" />

    <main class="pt-36 lg:pt-44 px-6 lg:px-16 max-w-7xl mx-auto">
      <div class="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <!-- Left: Contact Form -->
        <div>
          <div class="max-w-2xl">
            <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contactformulier</h2>
            <p class="mt-3 text-lg text-gray-600">
              Laat gerust je bericht achter – ik neem zo snel mogelijk contact met je op!
            </p>
          </div>

          <form action="#" method="POST" class="mt-12 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label for="first-name" class="block text-sm font-semibold text-gray-900">Voornaam</label>
              <input id="first-name" name="first-name" type="text"
                     class="mt-2 w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-green-600"/>
            </div>

            <div>
              <label for="last-name" class="block text-sm font-semibold text-gray-900">Achternaam</label>
              <input id="last-name" name="last-name" type="text"
                     class="mt-2 w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-green-600"/>
            </div>

            <div class="sm:col-span-2">
              <label for="company" class="block text-sm font-semibold text-gray-900">Bedrijf</label>
              <input id="company" name="company" type="text"
                     class="mt-2 w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-green-600"/>
            </div>

            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-semibold text-gray-900">E-mail</label>
              <input id="email" name="email" type="email"
                     class="mt-2 w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-green-600"/>
            </div>

            <div class="sm:col-span-2">
              <label for="phone-number" class="block text-sm font-semibold text-gray-900">Telefoonnummer</label>
              <div class="mt-2 flex rounded-md bg-white outline outline-1 outline-gray-300 focus-within:outline-2 focus-within:outline-green-600">
                <select id="country" name="country"
                        class="w-20 rounded-l-md py-2 pl-3 text-gray-500 focus:outline-none">
                  <option>+31</option>
                  <option>+32</option>
                  <option>+49</option>
                </select>
                <input id="phone-number" name="phone-number" type="text" placeholder="612345678"
                       class="flex-1 py-2 px-3 rounded-r-md focus:outline-none text-gray-900"/>
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-semibold text-gray-900">Bericht</label>
              <textarea id="message" name="message" rows="4"
                        class="mt-2 w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-green-600"></textarea>
            </div>

            <div class="sm:col-span-2 flex items-center gap-x-4">
              <button type="button" @click="toggleAgreement"
                      :class="['flex w-10 h-5 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset transition-colors duration-200 ease-in-out', agreed ? 'bg-green-600 ring-green-600' : 'bg-gray-200 ring-gray-900/5']"
                      role="switch"
                      :aria-checked="agreed.toString()">
                <span aria-hidden="true"
                      :class="['size-4 transform rounded-full bg-white shadow ring-1 ring-gray-900/5 transition duration-200 ease-in-out', agreed ? 'translate-x-[18px]' : 'translate-x-0']"></span>
              </button>
              <label class="text-sm text-gray-600">
                Door dit te selecteren, accepteert u onze
                <a href="/TermsOfService" class="font-semibold text-green-600">terms&nbsp;of&nbsp;service</a>.
              </label>
            </div>

            <div class="sm:col-span-2">
              <button type="submit"
                      class="w-full rounded-md bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                Verstuur bericht
              </button>
            </div>
          </form>
        </div>

        <!-- Right: Contact Text -->
        <div class="flex-1">
          <h2 class="text-gray-900 sm:text-5xl font-semibold mb-4">Vragen? Neem contact op!</h2>
          <p class="mt-2 text-lg leading-7 text-gray-600">Ik ben bereikbaar tussen 8:00 en 18:00</p>
          <p class="mt-4 text-lg text-gray-600 leading-relaxed">
            Heb je een vraag, een idee voor samenwerking, of wil je gewoon even sparren? Stuur me gerust een bericht! 
            Als zelfstandig ondernemer sta ik altijd open voor persoonlijk contact en denk ik graag met je mee.
            <br><br>
            Of je nu meer wilt weten over mijn diensten, een offerte wilt aanvragen, of even wilt kennismaken – ik hoor graag van je. 
            Je kunt me bereiken via het contactformulier, of direct een e-mail sturen.
            <br><br>
            Omdat ik alles zelf doe, kan het soms iets langer duren voor ik reageer. 
            Wel doe ik mijn best om binnen 1 werkdag te antwoorden!
            <br><br>
            - Wytse Willemsen
          </p>
        </div>

      </div>
    </main>
  </div>
</template>
