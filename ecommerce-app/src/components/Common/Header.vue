<template>
  <div
    class="Header container flex lg:flex-wrap justify-between h-20 p-6 gap-6"
  >
    <div class="Left flex items-center lg:gap-16">
      <div class="smenu icon lg:hidden mr-4">
        <img src="@assets/icons/Menu.svg" alt="" />
      </div>
      <div class="Logomark icon w-40 lg:w-auto">
        <img src="@assets/Logo/Header.svg" alt="" />
      </div>
      <div class="Navigation hidden lg:flex lg:visible gap-5">
        <div class="Home menu">Home</div>
        <div class="Category menu flex">
          <div class="categories">Categories</div>
          <div class="icon">
            <img src="@assets/icons/Chevron Down.svg" alt="" />
          </div>
        </div>
        <div class="About menu">About</div>
        <div class="Contact menu">Contact</div>
      </div>
    </div>
    <div class="Right flex items-center lg:justify-between w-full lg:w-80">
      <div class="Searchbox flex items-center w-full gap-3 mr-4">
        <img src="@assets/icons/Search.svg" alt="" />
        <input type="text" />
      </div>
      <div class="Right-menu hidden lg:flex gap-3">
        <div class="Cart icon w-6">
          <img src="@assets/icons/Cart.svg" alt="" />
        </div>
        <div class="User icon w-6">
          <img src="@assets/icons/User.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
