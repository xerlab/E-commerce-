<script setup>
import Category from "@components/Filters/Category.vue";
import Color from "@components/Filters/Color.vue";
import Price from "@components/Filters/Price.vue";
import Size from "@components/Filters/Size.vue";
import ProductCard from "@components/Product/ProductCard.vue";
</script>

<template>
  <!-- Middle area -->
  <div class="Listing container flex">
    <div
      class="Filters-SideBar hidden lg:block border border-neutral-B100 rounded-xl p-6 h-fit"
    >
      <div class="Categories-Filter mb-10"><Category /></div>
      <p class="Title py-3">Color, Size & Price Filters</p>
      <div class="Colors-Filter"><Color /></div>
      <div class="Size-Filter"><Size /></div>
      <div class="Price-Filter"><Price /></div>
    </div>
    <div class="Listing w-full lg:px-10">
      <div class="Filters_smenu lg:hidden mb-10">
        <div class="Menu icon btn-outline w-fit py-1">
          <img src="@icons/Menu.svg" alt="" />
          <p class="Title py-2">Filters Menu</p>
        </div>
      </div>
      <div class="Applied-Filters">
        <h2 class="AppliedFilters-Title text-neutral-B800 font-medium">
          Applied Filters:
        </h2>
        <div class="Applied-Filters-List py-2 flex flex-col gap-3 my-2">
          <div class="Filters-Applied flex flex-wrap gap-3">
            <div
              v-for="x in 3"
              class="Remove w-fit group rounded-full py-1.5 px-4"
            >
              <P class="font-medium text-xs lg:text-sm pl-1">Perfume</P>
              <img
                src="@icons/X.svg"
                alt=""
                width="20"
                class="hidden group-hover:block"
              />
            </div>
          </div>
        </div>
        <div
          class="Results-Title flex items-center justify-between text-xs gap-3 text-neutral-B400 mb-2 mt-2"
        >
          <div class="Results-Count">Showing 1-9 of 36 results.</div>
          <div class="SortBy flex items-center icon">
            SORT BY
            <img src="@icons/Chevron Down.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="Products-Listing flex flex-col items-center gap-8 mb-20">
        <div
          class="ProductsList flex flex-wrap gap-6 md:justify-start justify-center"
        >
          <div v-for="x in 20" class="Best-selling-item p-1">
            <!-- The item card  -->
            <ProductCard />
          </div>
        </div>
        <div class="btn-outline w-fit">Show more results</div>
      </div>
    </div>
  </div>
</template>
