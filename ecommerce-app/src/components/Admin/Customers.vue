<template>
  <div class="Customers bg-neutral-W900 m-4 rounded-md">
    <div class="Header BoxPadding flex justify-between items-center">
      <div class="text-lg font-medium">Customers</div>
      <div class="Add-Search flex py-2">
        <div class="Search InputBox flex items-center gap-2">
          <img src="@icons/Search.svg" alt="" />
          <input type="text" placeholder="Search customers" />
        </div>
      </div>
    </div>
    <div class="Headers hidden lg:block">
      <hr class="text-neutral-B100" />
      <!-- TableHeader -->
      <div class="TitlesBar BoxPadding grid grid-cols-12 gap-4">
        <div data-name="SortBy" class="Title text-xs col-span-1 icon pl-4">
          <img src="@icons/Sort.svg" alt="" />
        </div>
        <p data-Title="Name" class="Title text-xs col-span-2 content-center">
          Name
        </p>
        <p data-Title="Email" class="Title text-xs col-span-4 content-center">
          Email
        </p>
        <p
          data-Title="Shipping Address"
          class="Title col-span-4 text-xs content-center"
        >
          Shipping Address
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
      class="DataTable grid grid-cols-1 lg:grid-cols-12 gap-4 BoxPadding text-neutral-B500 m-4 rounded-md lg:m-0"
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
        class="lg:col-span-2 content-center items-center capitalize flex justify-between"
      >
        <p class="font-semibold lg:hidden text-neutral-B900">Name:</p>
        <p>Esther Howard</p>
      </div>
      <div
        data-Title="Email"
        class="lg:col-span-4 content-center items-center truncate flex justify-between"
      >
        <p class="font-semibold lg:hidden text-neutral-B900">Email:</p>
        <p>esther.howard@gmail.com</p>
      </div>
      <div
        data-Title="Shipping Address"
        class="lg:col-span-4 content-center items-center truncate text-end flex justify-between"
      >
        <p class="font-semibold lg:hidden text-neutral-B900">
          Shipping Address:
        </p>
        <p>8642 Yule Street, Arvada CO 80007</p>
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
</style>
