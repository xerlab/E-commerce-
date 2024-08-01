<template>
  <!-- Footer -->
  <!-- -----Newsletter -->

  <footer>
    <div class="Hero bg-neutral-W100">
      <div
        class="Footer-News container flex flex-wrap md:justify-between justify-center"
      >
        <div class="Left md:py-20 pt-10 text-center md:text-start">
          <div class="NewsTitle flex flex-col gap-3">
            <h2 class="font-bold text-xl">Join Our Newsletter</h2>
            <p class="text-xs font-light md:w-4/5">
              We love to surprise our subscribers with occasional gifts.
            </p>
          </div>
        </div>
        <div class="Right flex items-center justify-end py-10">
          <div class="Subscribe-Form flex items-center gap-2 flex-col">
            <div class="Email group">
              <div
                class="InputBox group-focus-within:border-neutral-B500 relative p-4 rounded-md font-light"
              >
                <label
                  class="absolute text-neutral-B500 font-medium group-focus-within:text-neutral-B200 top-1.5 text-xs transition duration-300 ease-in-out"
                  for=""
                  >Email</label
                >
                <input
                  class="mt-2 bg-neutral-W100 text-neutral-B900 font-medium placeholder:font-light placeholder:text-sm"
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <button class="Subscribe-Btn gap-2 w-full">
              <p>Subscribe</p>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer links -->
    <div
      class="Footer-links container flex flex-wrap justify-center gap-10 md:justify-between my-20"
    >
      <div class="SocialLinks flex flex-col gap-2 w-72">
        <img src="@logo/Footer.svg" alt="" width="200px" />
        <p class="text-sm text-neutral-B300">
          DevCut is a YouTube channel for practical project-based learning.
        </p>
        <div class="flex gap-3">
          <img src="@icons/Social Icons/Github.svg" alt="" />
          <img src="@icons/Social Icons/Telegram.svg" alt="" />
          <img src="@icons/Social Icons/Youtube.svg" alt="" />
          <img src="@icons/Social Icons/Whatsapp.svg" alt="" />
        </div>
      </div>
      <div
        class="PublicLinks flex gap-16 text-sm font-semibold text-neutral-B700"
      >
        <div class="Support leading-9 font-medium">
          <p class="mb-6 text-neutral-B300">SUPPORT</p>
          <ul class="leading-7">
            <li>FAQ</li>
            <li>Terms of use</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div class="Company leading-9 font-medium">
          <p class="mb-6 text-neutral-B300">COMPANY</p>
          <ul class="leading-7">
            <li>About us</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>
        <div class="Shop leading-9 font-medium">
          <p class="mb-6 text-neutral-B300">SHOP</p>
          <ul class="leading-7">
            <li>My Account</li>
            <li>Checkout</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
      <div class="Right text-neutral-B500 leading-9 font-medium">
        <h2 class="mb-6">ACCEPTED PAYMENTS</h2>
        <div class="Payments flex gap-4 filter grayscale opacity-70">
          <img src="@images/Payments/Mastercard.png" alt="" />
          <img src="@images/Payments/Amex.png" alt="" />
          <img src="@images/Payments/Visa.png" alt="" />
        </div>
      </div>
    </div>
    <hr class="text-neutral-B100 container" />
    <div class="font-normal text-sm text-neutral-B300 flex justify-center p-6">
      © 2023 DevCut. All rights reserved.
    </div>
  </footer>
</template>
