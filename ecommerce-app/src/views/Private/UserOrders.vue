<template>
  <div class="Orders lg:w-3/5 w-full">
    <p class="text-lg font-semibold text-center lg:text-start">Orders</p>
    <div
      v-for="x in 7"
      class="Order-item flex flex-col md:flex-row md:items-center justify-between my-6 rounded-lg"
    >
      <div class="Product-Heading flex items-center gap-6 pr-10">
        <div
          class="Product-Image bg-neutral-W100 w-24 h-24 flex items-center justify-center rounded-xl icon"
        >
          <img src="@images/Products/Product image.png" alt="" class="w-14" />
        </div>
        <div class="Product-Details flex flex-col gap-2">
          <div class="Product-Title font-medium icon">
            Raw Black T-Shirt Lineup
          </div>
          <div
            class="Order-Details flex items-center justify-between text-xs w-44 text-neutral-B400 uppercase"
          >
            <p class="text-neutral-B300">Ordered on:</p>
            <p class="OrderDate font-semibold">27 July 2023</p>
          </div>
          <div class="flex items-center justify-between">
            <div class="Product-Price text-xs text-neutral-B900 font-semibold">
              $75.00
            </div>
            <button
              class="Remove text-xs btn-outline p-0.5 px-4 hover:bg-semantic-R100 hover:text-semantic-R800 hover:border-semantic-R300 w-fit"
            >
              Remove Item
            </button>
          </div>
        </div>
      </div>
      <div
        class="Product-Features flex flex-wrap items-center justify-end gap-2.5"
      >
        <div class="Order-Status">
          <p
            v-if="x % 2"
            class="Title btn-outline p-0.5 px-3 text-xs bg-semantic-Y100 text-semantic-Y900 border-semantic-Y400"
          >
            Processing
          </p>
          <p
            v-else
            class="Title btn-outline p-0.5 px-3 text-xs bg-semantic-G100 text-semantic-G500 border-semantic-G400"
          >
            Completed
          </p>
        </div>
        <button class="View-Order-Product btn-outline md:w-36">
          <p class="text-sm font-medium">view item</p>
        </button>
      </div>
    </div>
  </div>
</template>
