<script setup>
import Size from "@components/Filters/Size.vue";
</script>

<template>
  <div class="AdminSettings bg-neutral-W900 m-4 rounded-md">
    <div class="Header BoxPadding flex justify-between items-center gap-3">
      <div class="text-lg font-medium">Settings</div>
    </div>

    <div
      class="ProductForm flex flex-wrap gap-3 p-10 justify-center lg:justify-start xl:w-4/5"
    >
      <div class="ProductTitle InputBox group">
        <label class="InputBox-Label" for="">Title</label>
        <input
          class="InputBox-Input"
          type="text"
          placeholder="Enter your product title"
        />
      </div>
      <div class="Price InputBox group">
        <label class="InputBox-Label" for="">Price</label>
        <input
          class="InputBox-Input"
          type="password"
          placeholder="Enter your product price"
        />
      </div>
      <div class="Category InputBox group">
        <label class="InputBox-Label" for="">Category</label>
        <input
          class="InputBox-Input"
          type="text"
          placeholder="Enter your product Category"
        />
      </div>
      <div class="SKU InputBox group">
        <label class="InputBox-Label" for="">SKU</label>
        <input
          class="InputBox-Input"
          type="text"
          placeholder="Enter your product SKU"
        />
      </div>
      <div class="Slug InputBox group">
        <label class="InputBox-Label" for="">Slug</label>
        <input
          class="InputBox-Input"
          type="text"
          placeholder="Enter your product Slug"
        />
      </div>
      <div class="Slug InputBox group">
        <label class="InputBox-Label" for="">Slug</label>
        <input
          class="InputBox-Input"
          type="text"
          placeholder="Enter your product Slug"
        />
      </div>
      <div class="StockStatus InputBox group">
        <label class="InputBox-Label" for="">Stock Status</label>
        <input
          class="InputBox-Input"
          type="text"
          placeholder="Enter your stock status"
        />
      </div>
      <div class="AvailableQuantity InputBox group">
        <label class="InputBox-Label" for="">Available quantity</label>
        <input
          class="InputBox-Input"
          type="text"
          placeholder="Enter your available quantity"
        />
      </div>
      <div class="ProductImages InputBox group border-semantic-B600">
        <label class="InputBox-Label" for="">Image</label>
        <input id="UploadImage" type="file" />
        <label for="UploadImage"
          ><div class="Upload w-fit mt-3.5 flex gap-2 items-center icon">
            <img src="@icons/Upload.svg" alt="" />
            <p class="text-xs font-light text-neutral-B400 pr-40">Choose</p>
          </div>
        </label>
      </div>
      <div class="ProductColors InputBox group border-semantic-B600">
        <label class="InputBox-Label" for="">Color</label>
        <input id="ChooseColor" type="color" />
        <label for="ChooseColor"
          ><div class="Upload w-fit mt-3.5 flex gap-2 items-center icon">
            <img
              src="@icons/color.svg"
              alt=""
              width="22px"
              class="opacity-80"
            />
            <p class="text-xs font-light text-neutral-B400 pr-40">Choose</p>
          </div>
        </label>
      </div>

      <div class="Description InputBox group w-4/5">
        <label class="InputBox-Label" for="">Description</label>
        <textarea
          class="InputBox-Input input focus:outline-none border-none h-20 w-full"
          type="text"
        ></textarea>
      </div>
      <div class="px-3 py-1.5"><Size /></div>
    </div>
    <div class="BoxPadding flex justify-center lg:justify-start">
      <button class="px-8 py-4">Add Product</button>
    </div>
  </div>
</template>

<style scoped>
.BoxPadding {
  @apply p-10;
}

input[type="file"],
[type="color"] {
  display: none;
}
</style>
