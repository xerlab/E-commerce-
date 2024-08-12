<template>
  <div class="AdminSettings bg-neutral-W900 m-4 rounded-md h-auto">
    <div class="Header BoxPadding flex justify-between items-center gap-3">
      <div class="text-lg font-medium">Settings</div>
    </div>
    <div class="Fields">
      <div class="Admin-Settings bg-neutral-W900 w-96 p-8 rounded-md">
        <div class="Email-Password flex flex-col gap-3 my-20">
          <div class="Email InputBox group">
            <label class="InputBox-Label" for="">Admin Email</label>
            <input
              class="InputBox-Input"
              type="email"
              placeholder="Enter your Email address"
            />
          </div>
          <div class="Password InputBox group">
            <label class="InputBox-Label" for="">Admin Password</label>
            <input
              class="InputBox-Input"
              type="password"
              placeholder="Enter your Password again"
            />
          </div>
          <br />
          <div class="SiteName InputBox group">
            <label class="InputBox-Label" for="">Site name</label>
            <input
              class="InputBox-Input"
              type="text"
              placeholder="Enter your New Site name"
            />
          </div>
          <button class="gap-4 p-4">
            <p>Save changes</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.BoxPadding {
  @apply p-10;
}
</style>
