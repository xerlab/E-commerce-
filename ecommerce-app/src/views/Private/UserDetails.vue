<template>
  <div class="UserData flex flex-col gap-3 w-full lg:w-fit">
    <div class="FullName InputBox group">
      <label class="InputBox-Label" for="">Full Name</label>
      <input
        class="InputBox-Input"
        type="text"
        placeholder="Enter your Full Name"
      />
    </div>
    <div class="Email InputBox group">
      <label class="InputBox-Label" for="">Update Email</label>
      <input
        class="InputBox-Input"
        type="email"
        placeholder="Enter your New Email Address"
      />
    </div>

    <button class="gap-4 p-4">
      <p>Save changes</p>
    </button>
  </div>
</template>
