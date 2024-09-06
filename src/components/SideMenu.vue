<!-- 界面左侧的菜单栏，展开为导航栏 -->


<template>
  <div class="side-menu" :class="{active: active}">
    <Nav />
  </div>
</template>

<script setup>
import Nav from './Nav.vue';

const props = defineProps({
  active: {
    type: Boolean,
    required: true
  }
})
</script>

<style>
.side-menu {
  position: fixed;
  left: -300px;
  width: 300px; /* 这两行代码是为了把活动状态藏起来 */
  height: 100%;
  padding: 30px;
  background: var(--primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: 1s;
  z-index: 1999;
}

.side-menu.active {
  left: 0; /* 活动的时候显示 */
}

.side-menu .nav {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
}

.side-menu .nav li {
  list-style: none;
  margin: 0 10px;
}

.side-menu .nav li a {
  color: #000000;
  text-decoration: none;
  letter-spacing: 2px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.side-menu .nav li:hover a,
.side-menu .nav li a.active {
  color: var(--third);
}

</style>