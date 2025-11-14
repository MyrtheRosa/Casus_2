<script setup>
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'

const agreed = ref(false)
const formData = ref({
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  message: ''
})
const success = ref(false)
const loading = ref(false)

function toggleAgreement() {
  agreed.value = !agreed.value
}

async function handleSubmit(e) {
  e.preventDefault()
  loading.value = true
  success.value = false

  try {
    const response = await fetch('https://formspree.io/f/xeoqdjgk', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Voornaam: formData.value.firstName,
        Achternaam: formData.value.lastName,
        Bedrijf: formData.value.company,
        Email: formData.value.email,
        Telefoonnummer: formData.value.phone,
        Bericht: formData.value.message
      })
    })

    if (response.ok) {
      success.value = true
      formData.value = {
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        message: ''
      }
    } else {
      alert('Er ging iets mis. Probeer het opnieuw.')
    }
  } catch (err) {
    alert('Er is een fout opgetreden. Controleer je internetverbinding.')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="relative bg-white min-h-screen flex flex-col">
    <Navbar :solid="true" />

    <main class="flex-grow pt-36 lg:pt-44 px-6 lg:px-16 max-w-7xl mx-auto pb-32">
      <div class="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <!-- Left: Contact Form -->
        <div>
          <div class="max-w-2xl">
            <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contactformulier</h2>
            <p class="mt-3 text-lg text-gray-600 leading-8">
              Laat gerust je bericht achter – ik neem zo snel mogelijk contact met je op!
            </p>
          </div>

          <form @submit="handleSubmit"
                class="leading-9 mt-12 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label for="first-name" class="block text-sm font-semibold text-gray-900">Voornaam</label>
              <input id="first-name" name="first-name" v-model="formData.firstName" type="text" required
                     class="mt-2 w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 
                     outline outline-1 outline-gray-300 placeholder:text-gray-400 
                     focus:outline-2 focus:outline-green-600"/>
            </div>

            <div>
              <label for="last-name" class="block text-sm font-semibold text-gray-900">Achternaam</label>
              <input id="last-name" name="last-name" v-model="formData.lastName" type="text" required
                     class="mt-2 w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 
                     outline outline-1 outline-gray-300 placeholder:text-gray-400 
                     focus:outline-2 focus:outline-green-600"/>
            </div>

            <div class="sm:col-span-2">
              <label for="company" class="block text-sm font-semibold text-gray-900">Bedrijf</label>
              <input id="company" name="company" v-model="formData.company" type="text"
                     class="mt-2 w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 
                     outline outline-1 outline-gray-300 placeholder:text-gray-400 
                     focus:outline-2 focus:outline-green-600"/>
            </div>

            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-semibold text-gray-900">E-mail</label>
              <input id="email" name="email" v-model="formData.email" type="email" required
                     class="mt-2 w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 
                     outline outline-1 outline-gray-300 placeholder:text-gray-400 
                     focus:outline-2 focus:outline-green-600"/>
            </div>

            <div class="sm:col-span-2">
              <label for="phone-number" class="block text-sm font-semibold text-gray-900">Telefoonnummer</label>
              <div class="mt-2 flex rounded-md bg-white outline outline-1 outline-gray-300 
                  focus-within:outline-2 focus-within:outline-green-600">
                <select id="country" name="country"
                        class="w-20 rounded-l-md py-2 pl-3 text-gray-500 focus:outline-none">
                  <option>+31</option>
                  <option>+32</option>
                  <option>+49</option>
                </select>
                <input id="phone-number" name="phone-number" v-model="formData.phone" type="text" placeholder="612345678"
                       class="flex-1 py-2 px-3 rounded-r-md focus:outline-none text-gray-900"/>
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-semibold text-gray-900">Bericht</label>
              <textarea id="message" name="message" v-model="formData.message" rows="4" required
                        class="mt-2 w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 
                        outline outline-1 outline-gray-300 placeholder:text-gray-400 
                        focus:outline-2 focus:outline-green-600"></textarea>
            </div>

            <div class="sm:col-span-2 flex items-center gap-x-4">
              <button type="button" @click="toggleAgreement"
                      :class="['flex w-9 h-4.2 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset transition-colors duration-200 ease-in-out', agreed ? 'bg-green-600 ring-green-600' : 'bg-gray-200 ring-gray-900/5']"
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

            <div class="sm:col-span-2 mt-4">
              <button type="submit"
                      :disabled="loading"
                      class="w-full cursor-pointer rounded-md bg-green-600 px-4 py-3 text-sm font-semibold text-white 
                      shadow-sm hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 
                      focus-visible:outline-green-600 transition disabled:opacity-60 disabled:cursor-not-allowed">
                {{ loading ? 'Verzenden...' : 'Verstuur bericht' }}
              </button>
            </div>
          </form>

          <!-- Succesbericht -->
          <transition name="fade">
            <div v-if="success" class="mt-8 p-4 border border-green-600 rounded-md bg-green-50 text-green-700 shadow-md">
              <p class="font-medium">✅ Bedankt voor je bericht!</p>
              <p class="text-sm">Ik neem zo snel mogelijk contact met je op.</p>
            </div>
          </transition>
        </div>

        <!-- Right: Contact Text -->
        <div class="flex-1">
          <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Vragen? Neem contact op!</h2>
          
          <p class="mt-2 text-lg leading-9 text-gray-600">
            Ik ben bereikbaar tussen <span class="text-green-600 font-semibold">8:00 en 18:00</span>
          </p>
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

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
