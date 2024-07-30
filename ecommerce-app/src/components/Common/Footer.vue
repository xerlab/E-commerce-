<template>
  <!-- Footer -->
  <!-- -----Newsletter -->

  <div class="Hero bg-neutral-W100">
    <div class="container flex flex-wrap justify-between px-10">
      <div class="Left md:py-20 pt-10">
        <div class="Title flex flex-col gap-3">
          <h2 class="font-bold text-xl">Join Our Newsletter</h2>
          <p class="text-xs font-light">
            We love to surprise our subscribers with occasional gifts.
          </p>
        </div>
      </div>
      <div
        class="Right overflow-hidden flex items-center justify-end sm:w-1/2 py-10"
      >
        <div class="flex items-center">
          <div class="Searchbox flex items-center w-fit gap-3 mr-4">
            <input
              type="text"
              class="bg-neutral-W100 p-1 text-sm"
              placeholder="Enter your email"
            />
          </div>
          <button class="flex items-center gap-2">
            <p>Subscribe</p>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer links -->
  <div
    class="Footer-links container flex flex-wrap i justify-center lg:justify-between items-start my-32 px-10 gap-20"
  >
    <div class="Left flex flex-col gap-5 justify-center lg:justify-between">
      <img src="../assets/Logo/Footer.svg" alt="" width="200px" />
      <p class="text-sm text-neutral-B300 w-3/5">
        DevCut is a YouTube channel for practical project-based learning.
      </p>
      <div class="flex gap-3">
        <img src="../assets/icons/Social Icons/Github.svg" alt="" />
        <img src="../assets/icons/Social Icons/Telegram.svg" alt="" />
        <img src="../assets/icons/Social Icons/Youtube.svg" alt="" />
        <img src="../assets/icons/Social Icons/Whatsapp.svg" alt="" />
      </div>
    </div>
    <div class="Middle flex flex-wrap gap-20">
      <div
        v-for="x in 3"
        class="Support text-neutral-B500 leading-9 font-medium"
      >
        <p class="mb-6">SUPPORT</p>
        <ul class="text-sm font-light text-neutral-B300 leading-7">
          <li>FAQ</li>
          <li>Terms of use</li>
          <li>Privacy policy</li>
        </ul>
      </div>
    </div>
    <div class="Right text-neutral-B500 leading-9 font-medium">
      <h2 class="mb-6">ACCEPTED PAYMENTS</h2>
      <div class="Payments flex gap-4 filter grayscale opacity-70">
        <img src="../assets/Images/Payments/Mastercard.png" alt="" />
        <img src="../assets/Images/Payments/Amex.png" alt="" />
        <img src="../assets/Images/Payments/Visa.png" alt="" />
      </div>
    </div>
  </div>
  <hr class="text-neutral-B100 container" />
  <div class="font-normal text-sm text-neutral-B300 flex justify-center p-6">
    © 2023 DevCut. All rights reserved.
  </div>
</template>
