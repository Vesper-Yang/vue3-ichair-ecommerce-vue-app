<!-- 网页的菜单：因为在sideBar和Header里都要显示，所以单独提取出来 -->

<template>
  <ul class="nav">
    <li v-for="(nav) in navs" :key="nav.id">
      <RouterLink 
        to="/" 
        v-if="nav.name === 'Home'" 
        @click="handleNavActive(nav.id)"
        :class="{ active: nav.active }"
      >
        <i class="bi bi-house-door-fill"></i>
      </RouterLink>
      <RouterLink
        v-else
        to="/"
        @click="handleNavActive(nav.id)"
        :class="{ active: nav.active }"
      >
        {{ nav.name }}
      </RouterLink>
    </li>
  </ul>
</template>


<script setup>
import { navsData } from '@/data/data';
import { ref } from 'vue';


const navs = ref(navsData);

const handleNavActive = id => {
  navs.value.map(nav => {
    nav.active = false
    if(nav.id === id) {
      nav.active = true
    }
    return nav
})
}
</script>


<style scoped>
  .nav {
    display: flex;
  }

  .nav li {
    list-style: none;
    margin: 0 16px;
  }

  .nav li a {
    color: #ffffff;
    font-weight: 600;
    letter-spacing: 2px;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;
  }

  .nav li:hover a,
  .nav li a.active {
    color: var(--primary);
  }
</style>