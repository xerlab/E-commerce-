<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

import CurrentDir from "../components/CurrentDir.vue";
import AvailableColors from "../components/AvailableColors.vue";
import AvailableSizes from "../components/AvailableSizes.vue";
import PriceRange from "../components/PriceRange.vue";
import CategoriesFilter from "../components/CategoriesFilter.vue";
import ProductCard from "../components/ProductCard.vue";
</script>

<template>
  <Header />
  <CurrentDir />
  <!-- Middle area -->
  <div class="Listing container flex">
    <div
      class="Filter hidden lg:block border border-neutral-B100 rounded-xl p-5 h-fit"
    >
      <div class="Categories-Filter"><CategoriesFilter /></div>
      <div class="Colors-Filter"><AvailableColors /></div>
      <div class="Size-Filter"><AvailableSizes /></div>
      <div class="Price-Filter"><PriceRange /></div>
    </div>
    <div class="Listing px-10 w-full">
      <div class="Applied-Filters mb-6">
        <h2 class="Applied-Filters-Title text-neutral-B800 font-medium px-8">
          Applied Filters:
        </h2>
        <div class="Applied-Filters-List px-7 py-5 flex flex-wrap gap-3">
          <div
            v-for="x in 3"
            class="Filter-X border border-neutral-B100 rounded-full px-2 py-1 lg:px-5 lg:py-2 w-fit flex items-center gap-2"
          >
            <P class="font-medium text-xs lg:text-sm pl-1">Perfume</P>
            <img src="./assets/icons/X.svg" alt="" class="icon" />
          </div>
        </div>
        <div
          class="Results-Title flex items-center justify-between text-xs gap-3 text-neutral-B400 mb-2 px-8 mt-2"
        >
          <div class="Results-Count">Showing 1-9 of 36 results.</div>
          <div class="SortBy flex items-center icon">
            SORT BY
            <img src="./assets/icons/Chevron Down.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="Products-Listing flex flex-wrap justify-center gap-6 mb-20">
        <div v-for="x in 20" class="Best-selling-item p-1">
          <!-- The item card  -->
          <ProductCard />
        </div>
        <div
          class="btn-outline p-4 rounded-md hover:border-neutral-B800 hover:text-neutral-B800"
        >
          Show more results
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
