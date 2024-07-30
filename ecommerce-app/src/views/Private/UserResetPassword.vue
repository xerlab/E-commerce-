<template>
  <div class="Email-Name-Password flex flex-col gap-8 m-10">
    <div class="password group">
      <div
        class="Searchbox group-focus-within:border-neutral-B500 relative p-4 rounded-md font-light"
      >
        <label
          class="absolute text-neutral-B500 font-medium group-focus-within:text-neutral-B200 top-1.5 text-xs transition duration-300 ease-in-out"
          for=""
          >New password</label
        >
        <input
          class="mt-2 text-neutral-B900 font-medium placeholder:font-light placeholder:text-sm"
          type="password"
          placeholder="Enter your email address"
        />
      </div>
    </div>
    <div class="password group">
      <div
        class="Searchbox group-focus-within:border-neutral-B500 relative p-4 rounded-md font-light"
      >
        <label
          class="absolute text-neutral-B500 font-medium group-focus-within:text-neutral-B200 top-1.5 text-xs transition duration-300 ease-in-out"
          for=""
          >Confirm password</label
        >
        <input
          class="mt-2 text-neutral-B900 font-medium placeholder:font-light placeholder:text-sm"
          type="password"
          placeholder="Enter your email address"
        />
      </div>
    </div>

    <button class="flex gap-4 p-4 justify-center">
      <p>Reset password</p>
    </button>
  </div>
</template>
