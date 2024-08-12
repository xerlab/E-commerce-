<script setup></script>

<template>
  <div
    class="bg-neutral-B100 h-screen w-auto grid content-center justify-center"
  >
    <div class="Login-Form bg-neutral-W900 w-96 p-8 rounded-md">
      <div class="AdminImage flex justify-center pb-10">
        <img src="@logo/Admin.svg" alt="" />
      </div>
      <div class="Email-Password flex flex-col gap-3">
        <div class="btn-outline">
          <img src="@logo/Google.svg" alt="" width="28" />
          <p class="font-medium text-neutral-B500">Continue with Google</p>
        </div>
        <div class="OR flex items-center justify-center">
          <hr class="text-neutral-B100 w-full" />
          <p class="text-neutral-B800 font-medium text-sm mx-4">OR</p>
          <hr class="text-neutral-B100 w-full" />
        </div>
        <div class="Email InputBox group">
          <label class="InputBox-Label" for="">Email</label>
          <input
            class="InputBox-Input"
            type="email"
            placeholder="Enter your Email address"
          />
        </div>
        <div class="Password InputBox group">
          <label class="InputBox-Label" for="">Password</label>
          <input
            class="InputBox-Input"
            type="password"
            placeholder="Enter your Password again"
          />
        </div>
        <p class="text-xs text-neutral-B800 icon text-right pb-4">
          Forgot your password ?
        </p>
        <button class="gap-4 p-4">
          <p>Login</p>
        </button>
      </div>
    </div>
  </div>
</template>
