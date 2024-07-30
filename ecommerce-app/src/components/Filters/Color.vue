<template>
  <div class="Available-Colors">
    <p
      class="Available-Colors-Title uppercase text-sm font-semibold text-neutral-B200"
    >
      Available Colors
    </p>
    <div class="Available-Colors-Pallete flex gap-3 py-4">
      <div
        v-for="x in 3"
        class="Selected-Color border border-neutral-B300 rounded-full flex p-1"
      >
        <div class="Color w-7 h-7 rounded-full bg-primary-B800"></div>
      </div>
    </div>
  </div>
</template>
