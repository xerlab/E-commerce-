<template>
  <div class="WishList lg:w-3/5 w-full">
    <p class="text-lg font-semibold text-center lg:text-start">Wishlist</p>
    <div
      v-for="x in 7"
      class="Wishlist-item sm:flex items-center justify-between my-6 rounded-lg"
    >
      <div class="Product-Heading flex gap-10 items-center pr-10">
        <div
          class="Product-Image bg-neutral-W100 w-24 h-24 flex items-center justify-center rounded-xl"
        >
          <img src="@images/Products/Product image.png" alt="" class="w-14" />
        </div>
        <div class="Product-Details flex flex-col gap-2">
          <div class="Product-Title font-medium">Raw Black T-Shirt Lineup</div>
          <div
            class="Order-Details flex items-center justify-between text-xs w-44 text-neutral-B400 uppercase"
          >
            <p class="text-neutral-B300">Added on:</p>
            <p class="OrderDate font-semibold">27 July 2023</p>
          </div>
          <button
            class="Remove text-xs btn-outline p-0.5 hover:bg-semantic-R100 hover:text-semantic-R800 hover:border-semantic-R300"
          >
            Remove Item
          </button>
        </div>
      </div>
      <div
        class="Product-Features flex flex-wrap items-center justify-end gap-2 xl:gap-8"
      >
        <div class="Wishlist-Status">
          <p
            class="text-neutral-B700 font-semibold p-2 rounded bg-neutral-W100"
          >
            $75.00
          </p>
        </div>
        <button class="View-Order-Product btn-outline w-fit">
          <p class="text-sm font-medium">Add to Cart</p>
        </button>
      </div>
    </div>
  </div>
</template>
