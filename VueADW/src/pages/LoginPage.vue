<template>
    <main class="bg-white flex items-center justify-center h-dvh overflow-hidden m-0">
      <div class="flex max-w-md mx-auto justify-center items-center border border-green-600 border-solid rounded-sm w-[500px]">
        <div class="flex flex-col justify-center gap-4 px-6 py-8 lg:px-8 w-full">
          
          <!-- Heading with proper bottom margin -->
          <div class="sm:mx-auto sm:w-full sm:max-w-sm cursor-default">
            <h2 class="text-center text-3xl leading-9 font-bold tracking-tight text-gray-900 mb-8">
              Sign in to your account
            </h2>
          </div>
  
          <!-- Form with vertical spacing -->
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="flex flex-col gap-5" action="#" method="POST">
              
              <!-- Email Field -->
              <div>
                <label for="email" class="block text-lg leading-7 font-medium text-gray-900">
                  Email address
                </label>
                <div class="mt-3">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autocomplete="email"
                    required
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm leading-6"
                  />
                </div>
              </div>
  
              <!-- Password Field -->
              <div>
                <div class="flex items-center justify-between">
                  <label for="password" class="block text-lg leading-7 font-medium text-gray-900">
                    Password
                  </label>
                </div>
                <div class="mt-3">
                    <input
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
  
              <!-- Submit Button -->
              <div>
                <button
                  type="submit"
                  class="cursor-pointer flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm leading-7 font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Sign in
                </button>
              </div>
  
            </form>
          </div>
        </div>
      </div>
    </main>
  </template>
  