<template>
  <div
    class="Default-Sidebar block h-fit min-w-64 lg:h-auto lg:w-fit m-4 p-6 bg-neutral-W900 rounded"
  >
    <div class="LogoMark p-4 hidden lg:block pb-20">
      <img src="@logo/Admin.svg" alt="" />
    </div>
    <div
      class="Admin-Navbar flex lg:flex-col gap-2 lg:w-full w-fit h-fit m-auto"
    >
      <div class="Dashboard btn-outline justify-start">
        <img src="@icons/Dashboard.svg" alt="" />
        <p class="Btn-Label">Dashboard</p>
      </div>
      <div class="Products btn-outline justify-start">
        <img src="@icons/Product.svg" alt="" />
        <p class="Btn-Label">Products</p>
      </div>
      <div class="Orders btn-outline justify-start">
        <img src="@icons/Cart.svg" alt="" />
        <p class="Btn-Label">Orders</p>
      </div>
      <div class="Customers btn-outline justify-start">
        <img src="@icons/Users.svg" alt="" />
        <p class="Btn-Label">Customers</p>
      </div>
      <div class="Reviews btn-outline justify-start">
        <img src="@icons/Empty Star.svg" alt="" />
        <p class="Btn-Label">Reviews</p>
      </div>
      <div class="Settings btn-outline justify-start">
        <img src="@icons/Settings.svg" alt="" />
        <p class="Btn-Label">Settings</p>
      </div>
    </div>

    <hr class="my-10 w-full text-neutral-B100 hidden lg:block" />
  </div>
</template>

<style scoped>
.Btn-Label {
  @apply hidden lg:block;
}
</style>
