<template>
  <div class="UserAddress-Form w-full lg:w-fit">
    <div class="text-lg font-semibold text-center lg:text-start mb-4">
      User Address
    </div>
    <div class="Shipping-Form flex flex-col justify-between gap-2">
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
</template>
