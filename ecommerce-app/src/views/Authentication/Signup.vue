<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../src/supabaseClient.js";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import CurrentDir from "./components/CurrentDir.vue";
</script>

<template>
  <Header />
  <CurrentDir />
  <div class="SignUp-Form container w-96">
    <div class="Email-Name-Password flex flex-col gap-8 my-20 m-4">
      <div
        class="btn-outline w-full flex items-center justify-center rounded p-4 hover:border-neutral-B300 gap-4"
      >
        <img src="./assets/Logo/Google.svg" alt="" width="28" />
        <p class="font-medium text-neutral-B500">Continue with Google</p>
      </div>
      <div class="OR flex items-center justify-center">
        <hr class="text-neutral-B100 w-full" />
        <p class="text-neutral-B800 font-medium text-sm mx-4">OR</p>
        <hr class="text-neutral-B100 w-full" />
      </div>
      <div class="Name group">
        <div
          class="Searchbox group-focus-within:border-neutral-B500 relative p-4 rounded-md font-light"
        >
          <label
            class="absolute text-neutral-B500 font-medium group-focus-within:text-neutral-B200 top-1.5 text-xs transition duration-300 ease-in-out"
            for=""
            >Name</label
          >
          <input
            class="mt-2 text-neutral-B900 font-medium placeholder:font-light placeholder:text-sm"
            type="email"
            placeholder="Enter your full name"
          />
        </div>
      </div>
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
      <div class="Password group">
        <div
          class="Searchbox group-focus-within:border-neutral-B500 relative p-4 rounded-md font-light"
        >
          <label
            class="absolute text-neutral-B700 font-medium group-focus-within:text-neutral-B200 top-1.5 text-xs transition duration-300 ease-in-out"
            for=""
            >Password</label
          >
          <input
            class="mt-2 text-neutral-B900 font-medium placeholder:font-light placeholder:text-sm"
            type="password"
            placeholder="Enter your password"
          />
        </div>
      </div>
      <p class="text-sm text-neutral-B600">
        By creating an account you agree with our Terms of Service, Privacy
        Policy,
      </p>
      <button class="flex gap-4 p-4 justify-center">
        <p>Login</p>
      </button>
      <p class="text-sm text-neutral-B600 text-center">
        Already have an account ?
        <span class="icon text-neutral-B400 font-semibold">Login</span>
      </p>
    </div>
  </div>
  <Footer />
</template>
