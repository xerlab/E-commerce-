<script setup>
import AddProduct from "./AddProduct.vue";
import Login from "./AdminLogin.vue";
import Navigation from "./Navigation.vue";
import Setting from "./Setting.vue";
</script>

<template>
  <div class="flex flex-col lg:flex-row bg-neutral-B100 min-h-screen">
    <Navigation />
    <AddProduct />
  </div>
</template>
