<script setup>
import Header from "@components/Common/Header.vue";
import Footer from "@components/Common/Footer.vue";
import ProductsList from "@components/Product/ProductsList.vue";
</script>

<template>
  <!-- Hero section -->

  <div class="Hero bg-neutral-W100">
    <div class="container flex justify-between">
      <div class="HeroTitle md:py-20 py-10">
        <div class="HeroTitle flex flex-col gap-3">
          <h2 class="font-semibold text-2xl">Fresh Arrivals Online</h2>
          <p class="text-sm font-light">
            Discover Our Newest Collection Today.
          </p>
        </div>
        <button class="gap-2 mt-10">
          <p>View Collection</p>
          <img src="@icons/Arrow Right.svg" alt="" />
        </button>
      </div>
      <div class="HeroImage relative overflow-hidden sm:w-1/2">
        <div
          class="Ellipse absolute right-0 bottom-6 h-48 w-48 md:h-64 md:w-64 bg-neutral-W200 opacity-70 rounded-full"
        ></div>
        <div class="Image absolute right-0 bottom-0 w-40 md:w-52">
          <img src="@images/Hero Image.png" alt="" />
        </div>
      </div>
    </div>
  </div>

  <!-- Features section -->
  <div
    class="Features container flex flex-wrap my-20 gap-10 lg:justify-between"
  >
    <div
      v-for="x in 3"
      class="feature-item flex md:flex-col items-center md:items-start gap-6"
    >
      <div
        class="feature-Image bg-neutral-B100 w-12 h-12 rounded-full flex items-center justify-center"
      >
        <img src="@icons/HomePage Icons/Delivery.svg" alt="" />
      </div>
      <div class="Feature-content flex flex-col gap-3">
        <h2 class="feature-title font-semibold text-base">Free Shipping</h2>
        <p class="feature-details text-sm leading-6 font-light w-72">
          Upgrade your style today and get FREE shipping on all orders! Don't
          miss out.
        </p>
      </div>
    </div>
  </div>

  <ProductsList />

  <!-- Categories CTA -->
  <div
    class="Categories-CTA bg-gradient-to-r from-neutral-W200 to-neutral-W900"
  >
    <div class="Categories-CTA-Content container flex justify-between">
      <div class="Categories-Title md:py-20 py-10">
        <div class="BrowseTitle flex flex-col gap-3">
          <h2 class="font-semibold text-xl">Browse Our Fashion Paradise!</h2>
          <p class="text-sm font-light w-4/5">
            Step into a world of style and explore our diverse collection of
            clothing categories.
          </p>
        </div>
        <button class="gap-2 mt-10">
          <p>Start Browsing</p>
          <img src="@icons/Arrow Right.svg" alt="" />
        </button>
      </div>
      <div class="Categories-Image relative overflow-hidden sm:w-1/2">
        <div class="Image absolute right-0 bottom-0 w-40 md:w-52 top-0">
          <img src="@images/Category Image.png" alt="" />
        </div>
      </div>
    </div>
  </div>

  <ProductsList />
</template>
