
<script setup>
import Product from '../components/Product.vue'


const products = [
    {
        id: 1,
        name: 'Small Red Potion',
        desc: 'A glip of red',
        price: 100,
    },
    {
        id: 2,
        name: 'Small Green Potion',
        desc: 'item desc',
        price: 200,
    },
    {
        id: 3,
        name: 'Rope',
        desc: 'item desc',
        price: 100,
    },
    {
        id: 4,
        name: 'Product 1',
        desc: 'item desc',
        price: 200,
    },
    {
        id: 5,
        name: 'Product 2',
        desc: 'item desc',
        price: 100,
    },
    {
        id: 6,
        name: 'Product 3',
        desc: 'item desc',
        price: 200,
    },
    {
        id: 7,
        name: 'Product 4',
        desc: 'item desc',
        price: 100,
    },
    {
        id: 8,
        name: 'Product 5',
        desc: 'item desc',
        price: 200,
    },
]
</script>

<template>
    <div class="shop flex flex-col">
        <div class="shop-header flex-grow-0">
            <h1 class="shop-title text-5xl">Shop</h1>
            <p class="shop-text">Welcome</p>
        </div>
        <div class="shop-body flex-grow flex flex-wrap p-16">
            <div class="shop-list bg-slate-800 flex-grow p-6 flex flex-wrap gap-20">
                <Product v-for="product in products" :key="product.id" :product="product" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>