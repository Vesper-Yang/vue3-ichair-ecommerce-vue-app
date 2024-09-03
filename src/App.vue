<template>
  <SideBar/>
  <Header />
  <main id="id">
    <RouterView />
  </main>
</template>

<script setup>
  import Header from './components/Header.vue';
  import SideBar from './components/SideBar.vue';
</script>

<style scoped>
</style>
