<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

import CurrentDir from "../components/CurrentDir.vue";
</script>

<template>
  <Header />
  <CurrentDir />
  <div class="Checkout container md:flex justify-between mb-20">
    <div class="Shipping-Address-Form md:w-2/3 p-8">
      <div class="Shipping-Address-Title mb-8 text-sm font-semibold">
        Shipping Address
      </div>
      <div class="Shipping-Form md:flex flex-wrap justify-between gap-2">
        <div class="Street-Address w-full">
          <label class="text-xs text-neutral-B300 font-medium" for=""
            >Street Address</label
          >
          <div class="Searchbox p-4 rounded-md font-light">
            <input
              class=""
              type="text"
              placeholder="Enter your street address"
            />
          </div>
        </div>
        <div class="City">
          <label class="text-xs text-neutral-B300 font-medium" for=""
            >City</label
          >
          <div class="Searchbox p-4 rounded-md font-light">
            <input class="" type="text" placeholder="Enter your City name" />
          </div>
        </div>
        <div class="State">
          <label class="text-xs text-neutral-B300 font-medium" for=""
            >State</label
          >
          <div class="Searchbox p-4 rounded-md font-light">
            <input class="" type="text" placeholder="Enter your state" />
          </div>
        </div>
        <div class="Country">
          <label class="text-xs text-neutral-B300 font-medium" for=""
            >Country</label
          >
          <div class="Searchbox p-4 rounded-md font-light">
            <input class="" type="text" placeholder="Enter your Country" />
          </div>
        </div>
        <div class="Zip-Code">
          <label class="text-xs text-neutral-B300 font-medium" for=""
            >Zip-Code</label
          >
          <div class="Searchbox p-4 rounded-md font-light">
            <input class="" type="text" placeholder="Enter your Zip-Code" />
          </div>
        </div>

        <div class="Email-Name lg:flex justify-between w-full mt-10">
          <div class="Email">
            <label class="text-xs text-neutral-B300 font-medium" for=""
              >Email</label
            >
            <div class="Searchbox p-4 rounded-md font-light">
              <input class="" type="text" placeholder="Enter your City name" />
            </div>
          </div>
          <div class="Full name">
            <label class="text-xs text-neutral-B300 font-medium" for=""
              >Full name</label
            >
            <div class="Searchbox p-4 rounded-md font-light">
              <input class="" type="text" placeholder="Enter your state" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Order Summary -->
    <div
      class="Cart-Order-Summary p-6 mx-4 lg:w-1/3 h-fit lg:border-l border-neutral-B100"
    >
      <div class="Order-Summary-Title text-sm font-semibold mb-8">
        Your Order
      </div>
      <div
        class="Edit-Products my-6 xl:flex justify-between items-center w-full"
      >
        <div class="Products-Images flex gap-3">
          <div
            v-for="x in 3"
            class="Product-Image bg-neutral-W100 w-14 h-14 flex items-center justify-center rounded-2xl"
          >
            <img
              src="../assets/Images/Products/Product image.png"
              alt=""
              class="w-7"
            />
          </div>
        </div>
        <div
          class="btn-outline p-4 rounded-md xl:w-fit hover:border-neutral-B800 my-6 flex justify-center"
        >
          Edit Cart
        </div>
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
      <hr class="text-neutral-B100 my-6" />
      <div class="Total flex items-center justify-between">
        <label class="text-neutral-B400 text-sm" for="Total :">Total</label>
        <p class="text-neutral-B800 font-medium text-sm">$ 100.00</p>
      </div>
      <button class="w-full my-6">Checkout</button>
      <div class="Continue-Shopping flex justify-center">
        <a class="text-sm text-neutral-B800 font-medium underline icon" href="/"
          >Continue shopping</a
        >
      </div>
    </div>
  </div>
  <Footer />
</template>
