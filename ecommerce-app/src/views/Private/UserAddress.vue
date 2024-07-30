<template>
  <div class="Checkout container md:flex justify-between">
    <div class="Shipping-Address-Form md:w-2/3 p-8">
      <div class="Shipping-Address-Title mb-8 text-sm font-semibold">
        Shipping Address
      </div>
      <div class="Shipping-Form flex flex-wrap justify-between gap-2">
        <div class="Street-Address w-full">
          <div class="Address group">
            <div
              class="Searchbox group-focus-within:border-neutral-B500 relative p-4 rounded-md font-light"
            >
              <label
                class="absolute text-neutral-B500 font-medium group-focus-within:text-neutral-B200 top-1.5 text-xs transition duration-300 ease-in-out"
                for=""
                >Address</label
              >
              <input
                class="mt-2 text-neutral-B900 font-medium placeholder:font-light placeholder:text-sm"
                type="Address"
                placeholder="Enter your street address name"
              />
            </div>
          </div>
        </div>

        <div class="City group">
          <div
            class="Searchbox group-focus-within:border-neutral-B500 relative p-4 rounded-md font-light"
          >
            <label
              class="absolute text-neutral-B500 font-medium group-focus-within:text-neutral-B200 top-1.5 text-xs transition duration-300 ease-in-out"
              for=""
              >City</label
            >
            <input
              class="mt-2 text-neutral-B900 font-medium placeholder:font-light placeholder:text-sm"
              type="City"
              placeholder="Enter your City name"
            />
          </div>
        </div>
        <div class="State group">
          <div
            class="Searchbox group-focus-within:border-neutral-B500 relative p-4 rounded-md font-light"
          >
            <label
              class="absolute text-neutral-B500 font-medium group-focus-within:text-neutral-B200 top-1.5 text-xs transition duration-300 ease-in-out"
              for=""
              >State</label
            >
            <input
              class="mt-2 text-neutral-B900 font-medium placeholder:font-light placeholder:text-sm"
              type="State"
              placeholder="Enter your state name"
            />
          </div>
        </div>

        <div class="Country group">
          <div
            class="Searchbox group-focus-within:border-neutral-B500 relative p-4 rounded-md font-light"
          >
            <label
              class="absolute text-neutral-B500 font-medium group-focus-within:text-neutral-B200 top-1.5 text-xs transition duration-300 ease-in-out"
              for=""
              >Country</label
            >
            <input
              class="mt-2 text-neutral-B900 font-medium placeholder:font-light placeholder:text-sm"
              type="Country"
              placeholder="Enter your Country name"
            />
          </div>
        </div>
        <div class="Zip-Code group">
          <div
            class="Searchbox group-focus-within:border-neutral-B500 relative p-4 rounded-md font-light"
          >
            <label
              class="absolute text-neutral-B500 font-medium group-focus-within:text-neutral-B200 top-1.5 text-xs transition duration-300 ease-in-out"
              for=""
              >Zip-Code</label
            >
            <input
              class="mt-2 text-neutral-B900 font-medium placeholder:font-light placeholder:text-sm"
              type="Zip-Code"
              placeholder="Enter your Zip-Code"
            />
          </div>
        </div>
      </div>
      <button class="my-10">Save Changes</button>
    </div>
  </div>
</template>
