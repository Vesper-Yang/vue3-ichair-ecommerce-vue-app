<template>
  <tr class="shopCartItem">
    <th scope="row">{{ index + 1 }}</th>
    <td>
      <img :src="item.imgUrl" alt="" class="img-fluid">
    </td>
    <td>
      <RouterLink :to="`/product/${item.id}`">{{ item.name }}</RouterLink>
    </td>
    <td :style="{ color: item.color}">
      <i class="bi bi-record-fill"></i>
    </td>
    <td>${{ item.price.toFixed(2) }}</td>
    <td>{{ item.qty }}</td>
    <td> {{ item.discount * 100 }}%</td>
    <td>${{ (item.price * (1 - item.discount)).toFixed(2) }}</td>
    <td>
      <a href="#" @click.stop.prevent="handleRemoveFromCart(item)">
        <i class="bi bi-trash"></i>
      </a>
    </td>
  </tr>
</template>

<script setup>
import { ref, inject } from 'vue';

const cart = ref(inject('cart'))

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

const handleRemoveFromCart = (item) => {
  let index = cart.value.indexOf(item)
  cart.value.splice(index, 1)
}


</script>


<style scoped>
.shopCartItem {
  margin-bottom: 20px;
}

.shopCartItem tr {
  margin-bottom: 20px !important;
}

.shopCartItem td,
.shopCartItem th {
  background: transparent;
  color: white;
  font-size: 1.2rem;
}

.shopCartItem a {
  color: white;
  font-size: 1.6rem;
}

.shopCartItem img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
}

.shopCartItem i {
  font-size: 2rem;
}
</style>