<template>
  <div class="Price-Range">
    <p class="Price Title text-xs">Price Range</p>
    <div class="Price-Range flex justify-between">
      <div class="From">
        <label class="text-xs text-neutral-B200 p-2">From</label>
        <div
          class="border border-neutral-B100 p-2 px-4 rounded-lg focus-within:border-neutral-B500 flex gap-1"
        >
          <p class="text-neutral-B300 font-light">$</p>
          <input type="number" class="text-neutral-B800 font-semibold w-16" />
        </div>
      </div>
      <div class="To">
        <label class="text-xs text-neutral-B200 p-2">To</label>
        <div
          class="border border-neutral-B100 p-2 px-4 rounded-lg focus-within:border-neutral-B500 flex gap-1"
        >
          <p class="text-neutral-B300 font-light">$</p>
          <input type="number" class="text-neutral-B800 font-semibold w-16" />
        </div>
      </div>
    </div>
  </div>
</template>
