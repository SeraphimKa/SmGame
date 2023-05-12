
<script setup>
import fs from 'fs'
import {ref } from 'vue'

import typeInfo from '@/data/typeInfo.json'
const newMon = ref({
    name: '',
    type: '',
    type2: '',
    strain: '',
    stats: {
        atk: 0,
        def: 0,
        spd: 0,
        hp: 100,
    },
    }
)


const getTypeColor = (type) => {
    if (type in typeColors) {
        
    }
}
</script>

<template>
<div class="container flex w-full gap-10">
    <div class="input-container grid grid-flow-row grid-cols-1 gap-10 p-10">
        <div class="name">
        <label class="basic" for="name">Name*</label>
        <input id="name" type="text" v-model="newMon.name" placeholder="Insert Name">
        </div>
        <div class="type">
        <label class="basic" for="type">Type*</label>
        <input id="type" type="text" v-model="newMon.type" placeholder="Insert Type">
        </div>
        <div class="type">
        <label class="basic" for="type2">Type 2</label>
        <input id="type2" type="text" v-model="newMon.type2" placeholder="Insert Type 2">
        </div>
    </div>
    <div class="sheet bg-white bg-opacity-60 rounded-md h-full w-full p-20">
        <div class="sheet-title text-center font-bold text-5xl text-gray-600">
            Mon Sample Sheet
        </div>
        <hr class="my-10 border-black"/>
        <div class="sheet-content p-10 flex flex-col gap-10 border border-black border-solid bg-black bg-opacity-25">
            <div class="sheet-name text-3xl">Name: <span class="name-typed font-bold text-yellow-600 bg-red-600 px-5">{{ newMon.name }}</span></div>
            <div class="sheet-type text-3xl">Type: <span class="type-typed font-bold px-5" :class="getTypeColor(newMon.type)">{{ newMon.type }}</span></div>
            <div class="sheet-strain text-3xl">Strain: <span class="strain-typed font-bold text-black bg-blue-500 px-5">Normal</span></div>
        </div>
        <button class="submit">Submit</button>
    </div>
</div>
</template>


<style scoped>
.basic {
    display: block;
    margin-bottom: 5px;
    background-image: linear-gradient(to right,blue, transparent);
    font-size: 20px;
    padding: 5px;
}
input {

    height: 35px;
}

.sheet-content {
    font-size: 20px;
}

.submit {
    font-size: 20px;
    float: right;
    margin-right: 40px;
    margin-top: clamp(10px, 5vw, 200px);
}
</style>