<script setup>
import ProductCard from "./ProductCard.vue";
</script>

<template>
  <div class="Products-Listing container flex flex-col">
    <div class="Headings my-16">
      <div class="Featured flex justify-center">
        <div class="Tabs">
          <span class="selected icon">Featured</span>
          <span class="unselected icon">Latest</span>
        </div>
      </div>
      <div class="Best-Selling flex justify-start">
        <div class="BestSelling-Title">
          <p class="uppercase text-xs text-neutral-B300">Shop Now</p>
          <h2 class="text-lg font-bold mt-1.5">Best Selling</h2>
        </div>
      </div>
    </div>
    <div class="Products-Sample flex flex-wrap justify-center gap-6 p-4">
      <div v-for="x in 5">
        <ProductCard />
      </div>
    </div>
  </div>
</template>

<style scoped>
.selected {
  @apply font-medium rounded-full px-4 py-1.5 border border-neutral-B100;
}

.unselected {
  @apply font-light rounded-full px-4 py-1.5;
}
</style>
