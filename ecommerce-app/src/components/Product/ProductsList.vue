<script setup>
import ProductCard from "./ProductCard.vue";
</script>

<template>
  <!-- Products list -->
  <div class="Best-seller container flex flex-col gap-10 items-center my-48">
    <div class="Best-sellet-title mb-14">
      <span
        class="border border-neutral-B100 font-medium rounded-full px-4 py-2 hover:cursor-pointer"
        >Featured</span
      >
      <span class="font-light rounded-full px-4 py-2 hover:cursor-pointer"
        >Latest</span
      >
    </div>
    <div class="Best-selling-products flex flex-wrap justify-center gap-6">
      <div v-for="x in 4" class="Best-selling-item p-1">
        <!-- The item card  -->
        <ProductCard />
      </div>
    </div>
  </div>
</template>
