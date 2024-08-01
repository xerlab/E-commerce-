<script setup>
import ProfileSidePanel from "@components/User/Navigation.vue";
</script>

<template>
  <div
    class="Profile container flex flex-col lg:flex-row items-center lg:items-start gap-10 mt-10 mb-20"
  >
    <ProfileSidePanel />
    <UserAddress />
  </div>
</template>
