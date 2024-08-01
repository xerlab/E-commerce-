<script setup></script>

<template>
  <div class="Email-Name-Password flex flex-col gap-3 w-full lg:w-fit">
    <div class="NewPassword InputBox group">
      <label class="InputBox-Label" for="">New Password</label>
      <input
        class="InputBox-Input"
        type="password"
        placeholder="Enter your Password"
      />
    </div>
    <div class="ConfirmPassword InputBox group">
      <label class="InputBox-Label" for="">Confirm Password</label>
      <input
        class="InputBox-Input"
        type="password"
        placeholder="Enter your Password again"
      />
    </div>

    <button class="gap-4 p-4">
      <p>Reset password</p>
    </button>
  </div>
</template>
