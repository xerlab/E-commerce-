<script setup>
import Quantity from "@components/Filters/Quantity.vue";
</script>

<template>
  <div class="Cart lg:flex justify-center lg:justify-between container">
    <!--Card Products
    <div class="Cart-Products w-full p-6">
      <div class="Cart-Title text-sm font-semibold mb-4">Order Summary</div>
      <hr class="text-neutral-B100 mb-2" />
      <div class="Cart-Products-List my-8">
        <div
          v-for="x in 3"
          class="Cart-product-item lg:flex items-center justify-between my-4"
        >
          <div class="Product-Heading flex gap-10 items-center">
            <div
              class="Product-Image bg-neutral-W100 w-24 h-24 flex items-center justify-center rounded-xl"
            >
              <img
                src="../assets/Images/Products/Product image.png"
                alt=""
                class="w-14"
              />
            </div>
            <div class="Product-Details flex flex-col gap-3">
              <div class="Product-Title font-medium">
                Raw Black T-Shirt Lineup
              </div>
              <div
                class="Product-Details-Color-Size flex items-center justify-between text-xs w-36 text-neutral-B400 uppercase"
              >
                <p>Color:</p>
                <div
                  class="Color w-3.5 h-3.5 rounded-full bg-primary-B800"
                ></div>
                <p>—</p>
                <p>Size: <span>M</span></p>
              </div>
            </div>
          </div>
          <div
            class="Product-Features flex justify-between items-center px-4 md:gap-8"
          >
            <div class="Product-Price text-neutral-B900 font-semibold">
              $75.00
            </div>
            <AvailableQuantity />
            <div class="Delete-Order bg-neutral-B100 p-3 rounded-md icon">
              <img src="../assets/icons/X.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="WishList lg:w-3/5 w-full mb-20">
      <div class="Cart-Title text-sm font-semibold mb-4">Order Summary</div>
      <hr class="text-neutral-B100 mb-2" />
      <div class="CartList flex flex-col gap-4 mt-6">
        <div
          v-for="x in 6"
          class="Cart-item sm:flex items-center justify-between rounded-lg"
        >
          <div class="Product-Heading flex gap-10 items-center pr-2 xl:pr-10">
            <div
              class="Product-Image bg-neutral-W100 w-24 h-24 flex items-center justify-center rounded-xl"
            >
              <img
                src="@images/Products/Product image.png"
                alt=""
                class="w-14"
              />
            </div>
            <div class="Product-Details flex flex-col gap-2">
              <div class="Product-Title font-medium">
                Raw Black T-Shirt Lineup
              </div>
              <div
                class="Order-Details flex items-center justify-between text-xs w-36 text-neutral-B400 uppercase"
              >
                <p>Color:</p>
                <div
                  class="Color w-3.5 h-3.5 rounded-full bg-primary-B800"
                ></div>
                <p>—</p>
                <p>Size: <span>M</span></p>
              </div>

              <button class="Remove lg:hidden">Remove Item</button>
            </div>
          </div>
          <div
            class="Product-Features flex flex-wrap items-center justify-end gap-2"
          >
            <div class="Wishlist-Status">
              <p
                class="text-neutral-B700 font-semibold p-2 rounded bg-neutral-W100"
              >
                $75.00
              </p>
            </div>
            <Quantity />
            <div class="Address hidden btn-outline lg:Remove lg:w-fit lg:p-2">
              <p class="Btn-Label lg:hidden">Remove Item</p>
              <img src="@icons/X.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Order Summary -->
    <div
      class="Cart-Order-Summary border border-neutral-B100 rounded-lg p-6 lg:w-1/3 h-fit"
    >
      <div class="Order-Summary-Title text-sm font-semibold mb-8">
        Order Summary
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
</template>
