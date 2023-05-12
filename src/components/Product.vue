
<script setup>
// ShopView Component
const product = defineProps(['product'])
</script>

<template>
    <div class="product bg-red-800 w-3/12 h-48 p-5 text-center flex flex-col rounded-md">
        <!-- <img :src="product.product.image" :alt="product.product.name" /> -->
        <h1 class="title text-black text-2xl font-semibold">{{ product.product.name }}</h1>
        <div class="body flex-grow flex flex-col">
            <p class="desc text-gray-400 flex-grow">{{ product.product.desc }}</p>
            <p class="price text-yellow-300 font-semibold text-end">{{ product.product.price }} Lions</p>
        </div>
    </div>
</template>


<style scoped></style>