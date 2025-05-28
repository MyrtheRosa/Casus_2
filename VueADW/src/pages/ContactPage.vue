<template>
    <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 relative">
        <!-- Background blob -->
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true">
            <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[72rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#16a34a] to-[#06b6d4] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[115rem]"
                style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
            </div>
        </div>

        <!-- Heading -->
        <div class="flex flex-row grid grid-cols-2">
            <div>
                <div class="mx-auto max-w-2xl text-left">
                    <h2 class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
                        Contact Form
                    </h2>
                    <p class="mt-2 text-lg leading-22 text-gray-600">
                        Laat gerust je bericht achter – ik neem zo snel mogelijk contact met je op!
                    </p>
                </div>

                <!-- Contact Form -->
                <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label for="first-name" class="block text-sm font-semibold text-gray-900">First name</label>
                            <div class="mt-2.5">
                                <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-green-600" />
                            </div>
                        </div>

                        <div>
                            <label for="last-name" class="block text-sm font-semibold text-gray-900">Last name</label>
                            <div class="mt-2.5">
                                <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-green-600" />
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label for="company" class="block text-sm font-semibold text-gray-900">Company</label>
                            <div class="mt-2.5">
                                <input type="text" name="company" id="company" autocomplete="organization"
                                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-green-600" />
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label for="email" class="block text-sm font-semibold text-gray-900">Email</label>
                            <div class="mt-2.5">
                                <input type="email" name="email" id="email" autocomplete="email"
                                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-green-600" />
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label for="phone-number" class="block text-sm font-semibold text-gray-900">Phone
                                number</label>
                            <div class="mt-2.5">
                                <div
                                    class="flex rounded-md bg-white outline outline-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:outline-green-600">
                                    <div class="grid shrink-0 grid-cols-1 relative">
                                        <select id="country" name="country" autocomplete="country" aria-label="Country"
                                            class="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:outline-green-600 sm:text-sm">
                                            <option>EU</option>
                                        </select>
                                        <svg class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                            viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <input type="text" name="phone-number" id="phone-number"
                                        class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm"
                                        placeholder="123-456-7890" />
                                </div>
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label for="message" class="block text-sm font-semibold text-gray-900">Message</label>
                            <div class="mt-2.5">
                                <textarea name="message" id="message" rows="4"
                                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-green-600"></textarea>
                            </div>
                        </div>

                        <div class="flex gap-x-4 sm:col-span-2">
                            <div class="flex h-6.5 items-center">
                                <button type="button" @click="toggleAgreement" :class="[
                                    'flex w-8 h-5.2 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset transition-colors duration-200 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2',
                                    agreed ? 'bg-green-600 ring-green-600' : 'bg-gray-200 ring-gray-900/5'
                                ]" role="switch" :aria-checked="agreed.toString()" aria-labelledby="switch-1-label">
                                    <span class="sr-only">Agree to policies</span>
                                    <span aria-hidden="true" :class="[
                                        'size-4 transform rounded-full bg-white shadow ring-1 ring-gray-900/5 transition duration-200 ease-in-out',
                                        agreed ? 'translate-x-[16px]' : 'translate-x-0'
                                    ]"></span>
                                </button>
                            </div>
                            <label class="text-sm text-gray-600" id="switch-1-label">
                                Door dit te selecteren, accepteert u onze
                                <a href="/TermsOfService"
                                    class="font-semibold text-green-600">terms&nbsp;of&nbsp;service</a>.
                            </label>
                        </div>


                    </div>

                    <div class="mt-10">
                        <button type="submit"
                            class="cursor-pointer flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm leading-7 font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                            Let's talk
                        </button>
                    </div>
                </form>
            </div>
            <div class="max-w-150">
                <h2 class="text-xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
                    Vragen? Neem contact op!
                </h2>
                <p class="mt-2 text-lg leading-22 text-gray-600">
                    Ik ben bereikbaar tussen 8:00 en 18:00
                </p>
                <p class="mt-0 text-lg text-gray-600">
                    Heb je een vraag, een idee voor samenwerking, of wil je gewoon even sparren? Stuur me gerust een
                    bericht! Als zelfstandig ondernemer sta ik altijd open voor persoonlijk contact en denk ik graag met
                    je mee.
                    <br>

                    Of je nu meer wilt weten over mijn diensten, een offerte wilt aanvragen, of even wilt kennismaken –
                    ik hoor graag van je. Je kunt me bereiken via het contactformulier, of direct een e-mail sturen.
                    <br>

                    Omdat ik alles zelf doe, kan het soms iets langer duren voor ik reageer. Wel doe ik mijn best om
                    binnen 1 werkdag te antwoorden!
                    <br>
                    -Wytse Willemsen.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const agreed = ref(false)

function toggleAgreement() {
    agreed.value = !agreed.value
}
</script>
