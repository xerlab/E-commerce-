<template>
  <header>
    <div
      class="Header container flex lg:flex-wrap justify-between items-center h-20 gap-6"
    >
      <div class="Left flex items-center lg:gap-16">
        <!-- Small Menu -->
        <div class="Mobile-Menu icon lg:hidden mr-4">
          <img src="@icons/Menu.svg" alt="" />
        </div>
        <div class="Logomark icon w-40 lg:w-auto">
          <img src="@logo/Header.svg" alt="" />
        </div>
      </div>
      <div class="Middle flex items-center">
        <!-- Menu -->
        <div class="Default-Menu hidden lg:flex gap-5">
          <div class="Home icon font-medium">Home</div>
          <div class="Category icon flex">
            <div class="categories font-medium">Categories</div>
            <div class="icon">
              <img src="@icons/Chevron Down.svg" alt="" />
            </div>
          </div>
          <div class="About icon font-medium">About</div>
          <div class="Contact icon font-medium">Contact</div>
        </div>
      </div>
      <div class="Right flex items-center justify-end gap-4">
        <div class="Search InputBox flex items-center gap-3 mr-4">
          <img src="@icons/Search.svg" alt="" />
          <input type="text" />
        </div>
        <div class="Right-menu hidden lg:flex gap-3">
          <div class="Cart icon w-6">
            <img src="@icons/Cart.svg" alt="" />
          </div>
          <div class="User icon w-6">
            <img src="@icons/User.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
