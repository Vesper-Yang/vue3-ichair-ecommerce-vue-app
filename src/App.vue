<template>
  <SideBar/>
  <Header />
  <main id="id">
    <RouterView />
  </main>
  <CartBtnLoader />
</template>

<script setup>
import CartBtnLoader from './components/CartBtnLoader.vue';
import Header from './components/Header.vue';
import SideBar from './components/SideBar.vue';
</script>

<style scoped>
</style>
