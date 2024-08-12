<template>
  <div class="Products bg-neutral-W900 m-4 rounded-md">
    <div class="Header BoxPadding flex justify-between items-center gap-3">
      <div class="text-lg font-medium">Products</div>
      <div class="Add-Search flex py-2 gap-3">
        <button>Add product</button>
        <div class="Search InputBox flex items-center gap-2">
          <img src="@icons/Search.svg" alt="" />
          <input type="text" placeholder="Search products" />
        </div>
      </div>
    </div>
    <div class="Headers hidden lg:block">
      <hr class="text-neutral-B100" />
      <!-- TableHeader -->
      <div class="TitlesBar BoxPadding grid grid-cols-9 gap-4">
        <div data-name="SortBy" class="GridTable-cell col-span-1 icon pl-4">
          <img src="@icons/Sort.svg" alt="" />
        </div>
        <p data-Title="Name" class="GridTable-cell col-span-3">Name</p>
        <p data-Title="Email" class="GridTable-cell col-span-1">SKU</p>
        <p data-Title="Price" class="Title col-span-1 text-xs content-center">
          Price
        </p>
        <p data-Title="Stock" class="Title col-span-1 text-xs content-center">
          Stock
        </p>
        <p
          data-Title="Categories"
          class="Title col-span-1 text-xs content-center"
        >
          Categories
        </p>
        <p
          data-Title="Action"
          class="Title text-xs content-center col-span-1 justify-self-end"
        >
          Action
        </p>
      </div>
      <hr class="text-neutral-B100" />
    </div>
    <!-- DataTable  -->
    <div
      v-for="x in 5"
      class="DataTable grid grid-cols-1 lg:grid-cols-9 gap-4 BoxPadding text-neutral-B500 m-4 rounded-md lg:m-0"
      :class="`${x % 2 ? 'bg-neutral-W100' : ''}`"
    >
      <div data-name="Customer" class="col-span-1 flex justify-between">
        <div
          class="Product-Image w-14 h-14 flex items-center justify-center rounded-xl icon"
          :class="`${x % 2 ? 'bg-neutral-W200' : 'bg-neutral-W100'}`"
        >
          <img src="@images/Products/Product image.png" alt="" class="w-8" />
        </div>
        <div
          data-Title="Action"
          class="content-center col-span-1 justify-self-end flex justify-between lg:hidden icon"
        >
          <img src="@icons/More.svg" alt="More actions" />
        </div>
      </div>
      <div
        data-Title="Name"
        class="lg:col-span-3 content-center items-center capitalize flex justify-between"
      >
        <p class="font-semibold lg:hidden text-neutral-B900">Name:</p>
        <p>Raw Black T-Shirt Lineup</p>
      </div>
      <div
        data-Title="SKU"
        class="lg:col-span-1 content-center items-center truncate flex justify-between"
      >
        <p class="font-semibold lg:hidden text-neutral-B900">SKU:</p>
        <p>47514501</p>
      </div>
      <div
        data-Title="Price"
        class="lg:col-span-1 content-center items-center truncate text-end flex justify-between"
      >
        <p class="font-semibold lg:hidden text-neutral-B900">Price:</p>
        <p>$75.00</p>
      </div>
      <div
        data-Title="Stock"
        class="lg:col-span-1 content-center items-center truncate text-end flex justify-between"
      >
        <p class="font-semibold lg:hidden text-neutral-B900">Stock:</p>
        <p>In Stock</p>
      </div>
      <div
        data-Title="Categories"
        class="lg:col-span-1 content-center items-center truncate text-end flex justify-between"
      >
        <p class="font-semibold lg:hidden text-neutral-B900">Categories:</p>
        <p>T-shirt, Men</p>
      </div>
      <div
        data-Title="Action"
        class="content-center col-span-1 justify-self-end justify-between hidden lg:block icon"
      >
        <img src="@icons/More.svg" alt="More actions" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.BoxPadding {
  @apply px-8 py-5 lg:py-2;
}

.GridTable-cell {
  @apply Title text-xs content-center;
}
</style>
