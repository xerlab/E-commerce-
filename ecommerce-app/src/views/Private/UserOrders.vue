<template>
  <div class="Cart-Products-List md:mx-16 md:w-3/5">
    <p class="text-lg font-semibold my-10 lg:m-4 text-center lg:text-start">
      Orders
    </p>
    <div
      v-for="x in 7"
      class="Cart-product-item lg:flex items-center justify-between my-4 p-2 border border-neutral-W200 rounded-lg"
    >
      <div class="Product-Heading flex gap-10 items-center">
        <div
          class="Product-Image bg-neutral-W100 w-24 h-24 flex items-center justify-center rounded-xl"
        >
          <img
            src="../../assets/Images/Products/Product image.png"
            alt=""
            class="w-14"
          />
        </div>
        <div class="Product-Details flex flex-col gap-2">
          <div class="Product-Title font-medium">Raw Black T-Shirt Lineup</div>
          <div
            class="Order-Details flex items-center justify-between text-xs w-44 text-neutral-B400 uppercase"
          >
            <p class="text-neutral-B300">Ordered on:</p>
            <p class="OrderDate font-semibold">27 July 2023</p>
          </div>
          <div class="Product-Price text-xs text-neutral-B900 font-semibold">
            $75.00
          </div>
        </div>
      </div>
      <div
        class="Product-Features flex justify-between items-center px-4 md:gap-8"
      >
        <div class="Order-Status icon">
          <p class="text-neutral-B700 font-semibold underline">Processing</p>
        </div>
        <div
          class="View-Order-Product btn-outline p-3 rounded-md hover:border-neutral-B600"
        >
          <p class="text-sm font-medium">view item</p>
        </div>
      </div>
    </div>
  </div>
</template>
