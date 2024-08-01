<template>
  <div class="Product-Card w-fit">
    <div
      class="Product-View bg-neutral-W100 w-64 h-80 rounded-lg overflow-hidden relative group"
    >
      <div
        class="absolute bg-neutral-W900 opacity-0 group-hover:opacity-30 group-hover:cursor-pointer w-64 h-80 transition-opacity"
      ></div>
      <button
        class="absolute bottom-0 w-full opacity-0 group-hover:opacity-100 rounded-none gap-2 transition-opacity"
      >
        Add to cart
        <img src="@icons/Add to cart.svg" alt="" />
      </button>
      <img src="@images/Products/cover.png" alt="" width="250px" />
    </div>

    <div class="Product-Details p-3">
      <h2 class="text-sm font-medium py-1">Classic Monochrome Tees</h2>
      <div class="flex pt-2 text-xs items-center gap-6">
        <span
          class="border border-neutral-B100 font-normal rounded-full px-3 py-1"
          >IN STOCK</span
        >
        <p class="text-neutral-B800 font-medium">$35.00</p>
      </div>
    </div>
  </div>
</template>
