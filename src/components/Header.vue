<!-- 网页顶部的导航栏 -->

<template>
  <header id="home">
    <RouterLink to="/" class="logo">iChair</RouterLink>
    <Nav />
    <div class="features">
      <CartBtn />
    </div>
  </header>
</template>

<script setup>
import CartBtn from './CartBtn.vue';
import Nav from './Nav.vue';
</script>

<style scoped>
    header {
    position: relative;
    width: 95%; /* 左侧侧边栏占了5%，所以要给侧边栏留足够的空间 */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 100px 30px 200px;
    z-index: 1100;
  }
  
  .logo {
    font-size: 35px;
    color: #ffffff;
    letter-spacing: 2px; /* 字体间距 */
    font-weight: 800;
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