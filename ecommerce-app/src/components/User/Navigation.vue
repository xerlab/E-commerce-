<template>
  <div
    class="Profile-Navbar flex lg:flex-col lg:pr-8 gap-2 lg:border-r border-neutral-B100"
  >
    <div class="Orders btn-outline justify-start">
      <img src="@icons/Cart.svg" alt="" />
      <p class="Btn-Label">Orders</p>
    </div>
    <div class="Wishlist btn-outline justify-start">
      <img src="@icons/Heart.svg" alt="" />
      <p class="Btn-Label">Wishlist</p>
    </div>
    <div class="Address btn-outline justify-start">
      <img src="@icons/Delivery.svg" alt="" />
      <p class="Btn-Label">Address</p>
    </div>
    <div class="Password btn-outline justify-start">
      <img src="@icons/Key.svg" alt="" />
      <p class="Btn-Label">Password</p>
    </div>
    <div class="Account-Details btn-outline justify-start">
      <img src="@icons/User.svg" alt="" />
      <p class="Btn-Label">Account Detail</p>
    </div>
    <div class="Logout btn-outline justify-start">
      <img src="@icons/Logout.svg" alt="" />
      <p class="Btn-Label">Logout</p>
    </div>
  </div>
</template>

<style scoped>
.Btn-Label {
  @apply hidden lg:block ml-4 text-neutral-B600 pr-6;
}
</style>
