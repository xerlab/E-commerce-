<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import CurrentDir from "../components/CurrentDir.vue";
</script>

<template>
  <Header />
  <CurrentDir />
  <div
    class="After-Payment bg-semantic-G100 flex items-center justify-center p-10 gap-5"
  >
    <p class="text-2xl font-semibold">Successful Order</p>
    <img src="../assets/icons/Star Badge.svg" alt="" width="32" />
  </div>
  <div
    class="Successful-Payment flex justify-center items-center my-20 flex-col gap-20"
  >
    <img src="../assets/Images/Payments/Illustration.svg" alt="" />
    <div class="Success-Message flex items-center flex-col gap-8">
      <h2 class="font-semibold text-lg">Thank you for shopping</h2>
      <p class="font-light text-sm text-neutral-B500 w-4/5 text-center">
        Your order has been successfully placed and is now being processed.
      </p>
      <button class="flex gap-2 items-center pl-6">
        <p>Go to my account</p>
        <img src="../assets/icons/Arrow Right.svg" alt="" />
      </button>
    </div>
  </div>

  <Footer />
</template>
