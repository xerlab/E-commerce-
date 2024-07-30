<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import ProductsList from "../components/ProductsList.vue";
</script>

<template>
  <Header></Header>

  <!-- Hero section -->

  <div class="Hero bg-neutral-W100">
    <div class="container flex justify-between px-10">
      <div class="Left md:py-20 py-10">
        <div class="Title flex flex-col gap-3">
          <h2 class="font-semibold text-2xl">Fresh Arrivals Online</h2>
          <p class="text-sm font-light">
            Discover Our Newest Collection Today.
          </p>
        </div>
        <button class="flex items-center gap-2 mt-10">
          <p>View Collection</p>
          <img src="../assets/icons/Arrow Right.svg" alt="" />
        </button>
      </div>
      <div class="Right relative overflow-hidden sm:w-1/2">
        <div
          class="Ellipse absolute right-0 bottom-6 h-48 w-48 md:h-64 md:w-64 bg-neutral-W200 opacity-70 rounded-full"
        ></div>
        <div class="Image absolute right-0 bottom-0 w-40 md:w-52">
          <img src="../assets/Images/Hero Image.png" alt="" />
        </div>
      </div>
    </div>
  </div>

  <!-- Features -->
  <div
    class="Features container flex flex-wrap my-20 justify-center md:justify-around"
  >
    <div
      v-for="x in 3"
      class="feature-item flex md:flex-col items-center md:items-start gap-6 p-6 m-4"
    >
      <div
        class="feature-Image bg-neutral-B100 w-12 h-12 rounded-full flex items-center justify-center"
      >
        <img src="../assets/icons/HomePage Icons/Delivery.svg" alt="" />
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

  <!-- Best Seller -->
  <div class="Best-seller container flex flex-col gap-10 items-center my-48">
    <div class="Best-sellet-title mb-14">
      <p class="uppercase text-xs text-neutral-B300">Shop Now</p>
      <h2 class="text-lg font-bold mt-2">Best Selling</h2>
    </div>
    <div class="Best-selling-products flex flex-wrap justify-center gap-6">
      <div v-for="x in 5" class="Best-selling-item p-1">
        <!-- The item card  -->
        <div
          class="Best-selling-pic bg-neutral-W100 w-64 h-80 rounded-lg overflow-hidden relative group"
        >
          <div
            class="absolute bg-neutral-W900 opacity-0 group-hover:opacity-30 group-hover:cursor-pointer w-64 h-80 transition-opacity"
          ></div>
          <button
            class="absolute bottom-0 w-full opacity-0 group-hover:opacity-100 rounded-none flex items-center gap-2 justify-center transition-opacity"
          >
            Add to cart
            <img src="../assets/icons/Add to cart.svg" alt="" />
          </button>
          <img src="../assets/Images/Products/cover.png" alt="" width="250px" />
        </div>

        <div class="Best-selling-item-details p-3">
          <h2 class="text-sm font-medium py-1">Classic Monochrome Tees</h2>
          <div class="flex pt-2 text-xs items-center gap-6">
            <span
              class="border border-neutral-B100 font-normal rounded-full px-3 py-1"
              >IN STOCK</span
            >
            <p class="text-neutral-B300">$35.00</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Categories CTA -->
  <div class="Hero bg-gradient-to-r from-neutral-W200 to-neutral-W900">
    <div class="container flex justify-between px-10">
      <div class="Left md:py-20 py-10">
        <div class="Title flex flex-col gap-3">
          <h2 class="font-semibold text-xl">Browse Our Fashion Paradise!</h2>
          <p class="text-sm font-light w-4/5">
            Step into a world of style and explore our diverse collection of
            clothing categories.
          </p>
        </div>
        <button class="flex items-center gap-2 mt-10">
          <p>Start Browsing</p>
          <img src="../assets/icons/Arrow Right.svg" alt="" />
        </button>
      </div>
      <div class="Right relative overflow-hidden sm:w-1/2">
        <div class="Image absolute right-0 bottom-0 w-40 md:w-52 top-0">
          <img src="../assets/Images/Category Image.png" alt="" />
        </div>
      </div>
    </div>
  </div>

  <ProductsList />

  <Footer />
</template>
