<script setup>
import Color from "@components/Filters/Color.vue";
import Size from "@components/Filters/Size.vue";
import Quantity from "@components/Filters/Quantity.vue";
</script>

<template>
  <div
    class="Product container grid lg:grid-cols-2 grid-flow-dense grid-cols-1"
  >
    <!-- Product Image -->
    <div
      class="Product-Image bg-neutral-W100 w-full flex items-center justify-center rounded-xl"
    >
      <img src="@images/Products/Product image.png" alt="" class="p-10" />
    </div>
    <!-- Product Details -->
    <div class="Product flex flex-col lg:flex-row">
      <div class="Product-Details p-6 flex flex-col gap-3 justify-between">
        <div class="Product-Title flex justify-between">
          <p class="text-2xl font-semibold">Raw Black T-Shirt Lineup</p>
          <div class="Product-Share icon">
            <img src="@icons/Share.svg" alt="" width="28" />
          </div>
        </div>
        <div class="Padges gap-3 flex">
          <span
            class="bg-neutral-W200 font-light text-xs rounded-full px-3 py-1 icon flex items-center"
          >
            <img src="@icons/Star.svg" alt="" class="" />
            <p class="text-neutral-B600 h-full flex items-center px-2">
              4.2 — 54 Reviews
            </p>
          </span>
          <span
            class="border border-neutral-B100 font-light text-xs rounded-full px-3 py-1 flex items-center"
            >Featured</span
          >
        </div>
        <div class="Product-Price text-2xl font-medium text-neutral-B900 py-3">
          $75.00
        </div>
        <div
          class="Filters flex flex-col gap-3 border border-neutral-B100 rounded-md p-4"
        >
          <p class="Title">Filters for Color Size & Quantity</p>
          <div class="flex flex-col items-start">
            <Color />
            <Size />
            <Quantity />
          </div>
        </div>
        <div class="AddToCard flex gap-3">
          <button class="w-80">Add to cart</button>
          <button class="btn-outline">
            <img src="@icons/Heart.svg" alt="" />
          </button>
        </div>
        <p class="Title">— Free shipping on orders $100+</p>
      </div>
    </div>
  </div>

  <div
    class="Review container flex flex-col xl:flex-row gap-32 p-16 items-start"
  >
    <!-- Navigation of the reviews/Details -->
    <div
      class="Tabs flex lg:flex-col items-center gap-4 justify-center lg:w-64 w-full"
    >
      <button class="Details gap-2 lg:justify-start w-full">
        <img src="@icons/More.svg" alt="" />
        <p>Details</p>
      </button>

      <button class="Review btn-outline gap-2 lg:justify-start w-full">
        <img src="@icons/Empty Star.svg" alt="" />
        <p>Review</p>
      </button>
    </div>
    <!-- The RouterView of the reviews/Details -->
    <div class="The-Routerview xl:w-5/6 mb-20">
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
      <div v-if="true" class="Tab-Nav-[Details]">
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
          <img src="@icons/Chevron Down.svg" alt="" />
        </div>
        <hr class="text-neutral-B100" />
        <div
          v-for="x in 3"
          class="ReviewsList flex flex-wrap-reverse gap-10 justify-between my-6"
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
            <img src="@icons/Star.svg" alt="" width="32" />
            <img src="@icons/Star.svg" alt="" width="32" />
            <img src="@icons/Star.svg" alt="" width="32" />
            <img src="@icons/Star.svg" alt="" width="32" />
            <img src="@icons/Empty Star.svg" alt="" width="32" />
          </div>
        </div>
        <div class="my-20 flex justify-center">
          <div class="btn-outline">Load more reviews</div>
        </div>
      </div>
    </div>
  </div>
  <ProductsList />
  <Footer />
</template>
