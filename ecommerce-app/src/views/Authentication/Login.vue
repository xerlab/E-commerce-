<script setup></script>

<template>
  <div class="Login-Form container">
    <div class="Email-Password flex flex-col gap-3 md:w-fit">
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
        <label class="InputBox-Label" for="">Confirm Password</label>
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
      <p class="text-sm text-neutral-B600 text-center">
        Don't have an account?
        <span class="icon text-neutral-B400 font-semibold">Sign up</span>
      </p>
    </div>
  </div>
</template>
