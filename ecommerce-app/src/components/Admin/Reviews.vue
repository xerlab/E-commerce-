<template>
  <div class="Reviews bg-neutral-W900 m-4 rounded-md">
    <div class="Header BoxPadding flex justify-between items-center gap-3">
      <div class="text-lg font-medium">Reviews</div>
      <div class="Add-Search flex py-2 gap-3">
        <div class="Search InputBox flex items-center gap-2">
          <img src="@icons/Search.svg" alt="" />
          <input type="text" placeholder="Search reviews" />
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
        <p data-Title="Name" class="GridTable-cell col-span-2">Name</p>
        <p data-Title="Review" class="GridTable-cell col-span-5">Review</p>
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
        class="lg:col-span-2 content-center items-center capitalize flex justify-between"
      >
        <p class="font-semibold lg:hidden text-neutral-B900">Name:</p>
        <p>Esther Howard</p>
      </div>
      <div
        data-Title="Review"
        class="lg:col-span-5 content-center justify-center truncate flex items-start flex-col gap-1.5"
      >
        <p class="font-semibold lg:hidden text-neutral-B900">Review:</p>
        <p
          class="truncate text-wrap italic text-neutral-B800 p-1.5 px-4 rounded font-light"
        >
          "Completed the task and added the required documentation, can someone
          please ...."
        </p>
      </div>
      <div
        data-Title="Action"
        class="content-center col-span-1 justify-self-end justify-between hidden lg:block icon"
      >
        <img src="@icons/More.svg" alt="More actions" />
      </div>
    </div>
    <div class="ShowMore my-10 flex justify-center">
      <button class="btn-outline w-fit mb-10">Show more</button>
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
