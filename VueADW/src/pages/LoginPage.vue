<template>
  <main class="bg-white flex items-center justify-center h-dvh overflow-hidden m-0">
    <div
      class="flex max-w-md mx-auto justify-center items-center border border-green-600 border-solid rounded-sm w-[500px]">
      <div class="flex flex-col justify-center gap-4 px-6 py-8 lg:px-8 w-full">

        <!-- Heading -->
        <div class="sm:mx-auto sm:w-full sm:max-w-sm cursor-default">
          <h2 class="text-center text-3xl leading-9 font-bold tracking-tight text-gray-900 mb-8">
            Sign in to your account
          </h2>
        </div>

        <!-- Form -->
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <form @submit.prevent="submitForm" class="flex flex-col gap-5">

            <!-- Email -->
            <div>
              <label for="email" class="block text-lg leading-7 font-medium text-gray-900">
                Email address
              </label>
              <div class="mt-3">
                <input
                  v-model="login.email"
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="email"
                  required
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm leading-6"
                />
              </div>
            </div>

            <!-- Password -->
            <div>
              <div class="flex items-center justify-between">
                <label for="password" class="block text-lg leading-7 font-medium text-gray-900">
                  Password
                </label>
              </div>
              <div class="mt-3">
                <input
                  v-model="login.password"
                  type="password"
                  name="password"
                  id="password"
                  required
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm leading-6"
                />
              </div>
              <div class="text-sm">
                <a href="#" class="font-semibold gap-2 text-green-600 hover:text-green-500">
                  Forgot password?
                </a>
              </div>
            </div>

            <!-- Submit -->
            <div>
              <button
                type="submit"
                class="cursor-pointer flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm leading-7 font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Sign in
              </button>
            </div>

            <!-- Error message -->
            <p v-if="login.error" class="text-red-600 text-center mt-2">{{ error }}</p>

          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const login = ref({
  email: '',
  password: ''
})

const submitForm = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(login.value)
    })

      if (!response.ok) {
  console.error('Login failed:', data);
  error.value = data.message || 'Login failed.';
  return;
}

    const data = await response.json()
    console.log('Contact saved:', data)

    // Reset form
    login.value = {email: '', password: '' }
    alert('Your message has been sent successfully!')
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('Something went wrong while sending your message.')
  }
}

const router = useRouter()

</script>

