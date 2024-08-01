<script setup></script>

<template>
  <div class="SignUp-Form container">
    <div class="Email-Name-Password flex flex-col gap-3 md:w-fit">
      <p class="text-base leading-7 text-neutral-B600 pb-10 md:w-80">
        Please enter the email address associated with your account.
        <span class="font-medium text-neutral-B900"
          >We'll promptly send you a link</span
        >
        to reset your password.
      </p>
      <div class="Email InputBox group">
        <label class="InputBox-Label" for="">Email</label>
        <input
          class="InputBox-Input"
          type="email"
          placeholder="Enter your Email address"
        />
      </div>

      <button class="gap-4 p-4">
        <p>Send reset link</p>
      </button>
    </div>
  </div>
</template>
