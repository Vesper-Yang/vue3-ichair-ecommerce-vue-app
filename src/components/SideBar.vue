<!-- 界面左侧的菜单栏，可以展开、收起 -->

<template>
  <div class="sideBar">
    <a class="menu">
      <i class="bi bi-menu-app-fill"></i>
    </a>
    <ul class="sci" >
      <li v-for="(sci) in scis" :key="sci.id">
        <a href="#">
          <i :class="sci.icon"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
  const scis = [
    {
      id: 1,
      icon: 'bi bi-meta'
    },
    {
      id: 2,
      icon: 'bi bi-twitter-x'
    },
    {
      id: 3,
      icon: 'bi bi-instagram'
    }
  ]
</script>

<style scoped>
  .sideBar {
    position: fixed;
    width: 5%;
    min-height: 100vh;
    padding: 30px;
    background: var(--primary);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transition: 1s;
    z-index: 2000;
  }

  .menu {
    font-size: 1.6rem;
    color: #000000;
    z-index: 2000;
    transition: ease 1s;
  }

  .menu.active {
    transform: rotateZ(100deg);
  }

  .sci {
    padding: 0;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 25px;
  }

  .sci li {
    list-style: none;
  }

  .sci li a {
    font-size: 1.6rem;
    color: #000000;
  }
</style>