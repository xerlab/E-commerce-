<script setup></script>

<template>
  <div class="Checkout container flex flex-wrap justify-between gap-10 mb-20">
    <div class="Shipping-Address-Form max-w-screen-md">
      <div class="Shipping-Address-Title mb-8 text-sm font-semibold">
        Shipping Address
      </div>
      <div class="Shipping-Form flex flex-wrap justify-between gap-2">
        <div class="Address group w-full">
          <div class="InputBox group">
            <label class="InputBox-Label" for="">Street Address</label>
            <input
              class="InputBox-Input"
              type="text"
              placeholder="Enter your street address"
            />
          </div>
        </div>
        <div class="City group">
          <div class="InputBox group">
            <label class="InputBox-Label" for="">City</label>
            <input
              class="InputBox-Input"
              type="text"
              placeholder="Enter your city name"
            />
          </div>
        </div>
        <div class="State group">
          <div class="InputBox group">
            <label class="InputBox-Label" for="">State</label>
            <input
              class="InputBox-Input"
              type="text"
              placeholder="Enter your State name"
            />
          </div>
        </div>
        <div class="Country group">
          <div class="InputBox group">
            <label class="InputBox-Label" for="">Country</label>
            <input
              class="InputBox-Input"
              type="text"
              placeholder="Enter your Country"
            />
          </div>
        </div>
        <div class="ZipCode group">
          <div class="InputBox group">
            <label class="InputBox-Label" for="">ZipCode</label>
            <input
              class="InputBox-Input"
              type="text"
              placeholder="Enter your Country"
            />
          </div>
        </div>

        <div
          class="Email-Name flex flex-col lg:flex-row gap-2 justify-between w-full mt-6"
        >
          <div class="Email group">
            <div class="InputBox group">
              <label class="InputBox-Label" for="">Email</label>
              <input
                class="InputBox-Input"
                type="email"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div class="FullName group">
            <div class="InputBox group">
              <label class="InputBox-Label" for="">Full Name</label>
              <input
                class="InputBox-Input"
                type="text"
                placeholder="Enter your FullName"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Order Summary -->
    <div
      class="Cart-Order-Summary min-w-80 justify-center h-fit flex flex-col gap-10 w-full lg:w-1/4"
    >
      <div class="Order-Summary-Title text-sm font-semibold">Your Order</div>
      <div
        class="Edit-Products flex flex-wrap justify-between items-center gap-3"
      >
        <div class="Products-Images flex gap-3">
          <div v-for="x in 3" class="Product-Image btn-outline">
            <img src="@images/Products/Product image.png" alt="" class="w-7" />
          </div>
        </div>
        <div class="btn-outline w-32 py-3">Edit Cart</div>
      </div>
      <div class="Pricing-Details flex flex-col gap-3">
        <div class="SubTota flex items-center justify-between">
          <label class="text-neutral-B400 text-sm" for="Subtotal :"
            >SubTotal</label
          >
          <p class="text-neutral-B800 font-medium text-sm">$ 90.00</p>
        </div>
        <div class="Shipping flex items-center justify-between">
          <label class="text-neutral-B400 text-sm" for="Shipping :"
            >Shipping</label
          >
          <p class="text-neutral-B800 font-medium text-sm">Free</p>
        </div>
        <div class="Tax flex items-center justify-between">
          <label class="text-neutral-B400 text-sm" for="Tax :">Tax</label>
          <p class="text-neutral-B800 font-medium text-sm">$ 3.00</p>
        </div>
      </div>
      <hr class="text-neutral-B100" />
      <div class="Total flex items-center justify-between">
        <label class="text-neutral-B400 text-sm" for="Total :">Total</label>
        <p class="text-neutral-B800 font-medium text-sm">$ 100.00</p>
      </div>
      <button class="w-full">Checkout</button>
      <div class="Continue-Shopping flex justify-center">
        <a class="text-sm text-neutral-B800 font-medium underline icon" href="/"
          >Continue shopping</a
        >
      </div>
    </div>
  </div>
</template>
