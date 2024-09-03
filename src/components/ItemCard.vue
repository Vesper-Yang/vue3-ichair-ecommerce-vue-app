<template>
  <div class="card">
    <div class="card-bg" :style="{background: item.bgColor}"></div>
    <div class="imgBox">
      <img :src="item.imgUrl" alt="">
    </div>
    <div class="contentBox">
      <h2>{{ item.name }}</h2>
      <div class="color">
        <h3>Color:</h3>
        <span
          v-for="color in item.colors"
          :key="color.id"
          :style='{background: color.color}'
        ></span>
      </div>
      <div class="pricing">
        <span
          class="price"
          :style="[
            item.discount !== 0 && {
              textDecoration: 'line-through',
              textDecorationColor: 'red',
              fontSize: '1rem',
            }
          ]"
        >
          ${{ item.price.toLocaleString() }}
        </span>
        <span class="price" v-if="item.discount !== 0">
          ${{ (item.price * (1-item.discount)).toFixed(0) }}
        </span>
      </div>
      <RouterLink :to="`/products/${item.id}`">
        Learn More <i class="bi bi-arrow-right"></i>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>


<style scoped>
.card {
  position: relative;
  min-height: 420px;
  background: #232323;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 0 15px rgba(255, 255, 255, 0.2);
}

.card-bg {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary);
  clip-path: circle(150px at 80% 20%);
  transition: ease-in-out 0.5s;
}

.card:hover .card-bg {
  clip-path: circle(300px at 80% -20%);
}

.card::after {
  content:'GAME';
  position: absolute;
  top: 40%;
  left: -20%;
  font-size: 12rem;
  font-weight: 800;
  font-style: italic;
  color: rgba(255, 255, 255, 0.04);
}

.card .imgBox {
  position: absolute;
  top: 10%;
  width: 100%;
  height: 220px;
  transition: 0.5s;
}

.card:hover .imgBox {
  top: -15%;
}

.card .imgBox img {
  position: absolute;
  width: 270px;
  top: 10%;
  left: 10%;
  transform: rotateY(180deg);
}

.card .contentBox {
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 100px;
  text-align: center;
  transition: 1s;
  z-index: 10;
}

.card:hover .contentBox {
  height: 210px;
}

.card .contentBox h2 {
  position: relative;
  font-weight: 600;
  letter-spacing: 1px;
  color: white;
  font-size: 1.3rem;
}

.card .contentBox .color {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  transition-duration: 0.5s;
  opacity: 0;
  visibility: hidden;
}

.card:hover .contentBox .color {
  opacity: 1;
  visibility: visible;
  transition-delay: 0.5s;
}

.card .contentBox .color h3 {
  color: white;
  font-weight: 300;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
}

.card .contentBox .color span {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}

.card .contentBox .pricing {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.card .contentBox .price {
  color: var(--primary);
  font-weight: 500;
  font-size: 1.2rem;
  transition: 0.5s;
  opacity: 0;
  visibility: hidden;
}

.card:hover .contentBox .price {
  opacity: 1;
  visibility: visible;
  transition-delay: 0.7s;
}


.card .contentBox a {
  display: inline-block;
  text-decoration: none;
  padding: 10px 20px;
  background: white;
  border-radius: 4px;
  margin-top: 10px;
  font-weight: 600;
  color: black;
  opacity: 0;
  transform: translateY(50px);
  transition: 0.5s;
  margin-right: 10px;
}

.card:hover .contentBox a {
  opacity: 1;
  transform: translateY(0px);
  transition-delay: 0.7s;
}

</style>