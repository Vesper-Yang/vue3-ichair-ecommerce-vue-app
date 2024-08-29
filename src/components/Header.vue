<!-- 网页顶部的导航栏 -->
 
<template>
  <header id="home">
    <RouterLink to="/" class="logo">iChair</RouterLink>
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
    <div class="features"></div>
  </header>
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
    header {
    position: relative;
    width: 95%; /* 左侧侧边栏占了5%，所以要给侧边栏留足够的空间 */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 100px 30px 100px;
    z-index: 1100;
  }
  
  .logo {
    font-size: 35px;
    color: #ffffff;
    letter-spacing: 2px; /* 字体间距 */
    font-weight: 800;
  }

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

  .features {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  @media (max-width: 768px) {
    header {
      padding: 10px 50px;
    }
    .nav {
      display: none;
    }
  }
</style>