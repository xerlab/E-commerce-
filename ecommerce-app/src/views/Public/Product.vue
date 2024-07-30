<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import AvailableColors from "../components/AvailableColors.vue";
import AvailableSizes from "../components/AvailableSizes.vue";
import AvailableQuantity from "../components/AvailableQuantity.vue";
import ProductsList from "../components/ProductsList.vue";
import CurrentDir from "../components/CurrentDir.vue";
</script>

<template>
  <Header />
  <hr class="text-neutral-B100 container" />
  <CurrentDir />
  <div
    class="Product container grid lg:grid-cols-2 grid-flow-dense grid-cols-1"
  >
    <div
      class="Product-Image bg-neutral-W100 w-full flex items-center justify-center rounded-xl"
    >
      <img
        src="../assets/Images/Products/Product image.png"
        alt=""
        class="p-10"
      />
    </div>
    <div class="Product-Details flex flex-col gap-5 px-20 py-8">
      <div class="Product-Title flex justify-between">
        <p class="text-2xl font-semibold">Raw Black T-Shirt Lineup</p>
        <div class="Product-Share icon">
          <img src="../assets/icons/Share.svg" alt="" width="28" />
        </div>
      </div>
      <div class="Product-Review flex gap-4">
        <span
          class="bg-neutral-W200 font-light text-xs rounded-full px-3 py-1 hover:cursor-pointer flex items-center"
        >
          <img src="./assets/icons/Star.svg" alt="" class="" />
          <p class="text-neutral-B600 h-full flex items-center px-2">
            4.2 — 54 Reviews
          </p>
        </span>
        <span
          class="border border-neutral-B100 font-light text-xs rounded-full px-3 py-1 hover:cursor-pointer flex items-center"
          >Featured</span
        >
      </div>
      <div class="Product-Price text-4xl font-bold text-neutral-B500 my-10">
        $75.00
      </div>
      <div class="flex flex-wrap gap-8 w-2/3">
        <AvailableSizes />
        <AvailableColors />
        <AvailableQuantity />
      </div>
      <div class="Add-to-Cart flex gap-3 mt-16">
        <button class="w-80"><p class="p-1">Add to cart</p></button>
        <div
          class="btn-outline flex items-center justify-center w-12 rounded-lg"
        >
          <img src="./assets/icons/Heart.svg" alt="" />
        </div>
      </div>
      <p class="text-sm font-medium uppercase text-neutral-B300">
        — Free shipping on orders $100+
      </p>
    </div>
  </div>

  <div class="Review container flex flex-col xl:flex-row gap-32 my-28 p-20">
    <!-- Navigation of the reviews/Details -->
    <div class="Tabs flex flex-col items-center gap-4 justify-center w-64">
      <div
        class="Details flex items-center gap-3 px-6 py-2 w-full bg-neutral-W100 hover:cursor-pointer rounded-md"
      >
        <img src="./assets/icons/More.svg" alt="" />
        <p class="">Details</p>
      </div>
      <div
        class="Review flex items-center gap-3 px-6 py-2 w-full hover:cursor-pointer rounded-md"
      >
        <img src="./assets/icons/Empty Star.svg" alt="" />
        <p>Review</p>
      </div>
    </div>

    <!-- The RouterView of the reviews/Details -->
    <div class="The-Routerview xl:w-5/6">
      <div v-if="false" class="Tab-Nav-[Details]">
        <div class="Tab-Nav-Title-[Details] text-lg mb-4 font-semibold">
          Detail
        </div>
        <div class="Tab-Nav-Details mb-8">
          <p class="text-neutral-B500 font-light leading-7">
            Elevate your everyday style with our Men's Black T-Shirts, the
            ultimate wardrobe essential for modern men. Crafted with meticulous
            attention to detail and designed for comfort, these versatile black
            tees are a must-have addition to your collection.
          </p>
          <br />
          <p class="text-neutral-B500 w-4/5 font-light leading-7">
            The classic black color never goes out of style. Whether you're
            dressing up for a special occasion or keeping it casual, these black
            t-shirts are the perfect choice, effortlessly complementing any
            outfit.
          </p>
        </div>
        <ul
          class="text-neutral-B900 leading-7 font-normal text-sm list-disc list-inside"
        >
          <li>Premium Quality</li>
          <li>Versatile Wardrobe Staple</li>
          <li>Available in Various Sizes</li>
          <li>Tailored Fit</li>
        </ul>
      </div>
      <div class="Tab-Nav-[Details]">
        <div class="Tab-Nav-Title-[Details] text-lg mb-4 font-semibold">
          Reviews
        </div>
        <div class="Rate flex items-center gap-5">
          <p class="text-4xl font-bold">4.2</p>
          <p class="text-xs font-light">— 54 Reviews</p>
        </div>
        <button
          class="my-6 px-6 bg-neutral-W900 text-neutral-B900 hover:text-neutral-W900 transition-colors border border-neutral-B900"
        >
          Write a review
        </button>
        <div
          class="SortBy flex items-center justify-end text-xs gap-3 text-neutral-B400 mb-2 icon"
        >
          SORT BY
          <img src="./assets/icons/Chevron Down.svg" alt="" />
        </div>
        <hr class="text-neutral-B100" />
        <div
          v-for="x in 3"
          class="ReviewsList flex flex-wrap-reverse gap-10 justify-between px-4 py-10 my-6"
        >
          <div class="User-Part flex lg:gap-8">
            <div
              class="USER-Profile w-0 lg:w-12 lg:h-12 rounded-full invisible lg:visible text-semantic-B800 bg-primary-B100 flex items-center justify-center"
            >
              ED
            </div>
            <div class="USER-Review">
              <div class="USER-name mb-2 font-bold text-lg">Emily Davis</div>
              <div
                class="USER-Review-Date uppercase text-neutral-B500 text-xs font-light mb-2"
              >
                1 Week ago
              </div>
              <div
                class="USER-review-Details mt-4 text-base font-light text-neutral-B700"
              >
                This company always goes above and beyond to satisfy their
                customers.
              </div>
            </div>
          </div>
          <div class="USER-Rate flex items-start w-40">
            <img src="../assets/icons/Star.svg" alt="" width="32" />
            <img src="../assets/icons/Star.svg" alt="" width="32" />
            <img src="../assets/icons/Star.svg" alt="" width="32" />
            <img src="../assets/icons/Star.svg" alt="" width="32" />
            <img src="../assets/icons/Empty Star.svg" alt="" width="32" />
          </div>
        </div>
        <div class="my-20 flex justify-center">
          <div
            class="btn-outline hover:border-neutral-B300 flex px-6 py-4 rounded-md justify-center w-fit transition"
          >
            Load more reviews
          </div>
        </div>
      </div>
    </div>
  </div>
  <ProductsList />
  <Footer />
</template>
