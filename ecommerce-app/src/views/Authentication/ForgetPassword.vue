<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import CurrentDir from "./components/CurrentDir.vue";
</script>

<template>
  <Header />
  <CurrentDir />
  <div class="SignUp-Form container w-96">
    <div class="Email-Name-Password flex flex-col gap-8 my-20 m-4">
      <p class="text-base leading-7 text-neutral-B600">
        Please enter the email address associated with your account.
        <span class="font-medium text-neutral-B900"
          >We'll promptly send you a link</span
        >
        to reset your password.
      </p>
      <div class="Email group">
        <div
          class="Searchbox group-focus-within:border-neutral-B500 relative p-4 rounded-md font-light"
        >
          <label
            class="absolute text-neutral-B500 font-medium group-focus-within:text-neutral-B200 top-1.5 text-xs transition duration-300 ease-in-out"
            for=""
            >Email</label
          >
          <input
            class="mt-2 text-neutral-B900 font-medium placeholder:font-light placeholder:text-sm"
            type="email"
            placeholder="Enter your email address"
          />
        </div>
      </div>

      <button class="flex gap-4 p-4 justify-center">
        <p>Send reset link</p>
      </button>
    </div>
  </div>
  <Footer />
</template>
