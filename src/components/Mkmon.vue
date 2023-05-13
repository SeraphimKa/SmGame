
<script setup>
import fs from 'fs'
import {computed, ref } from 'vue'

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
 
const camelCase = (str) =>
    (str === '' ? '' : (str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()))

//Check for 2-type mons, check for 2-type mons, lower type index prior
const setType = (type1, type2) => {
    if (typeInfo.types.includes(type1) && typeInfo.types.includes(type2) && type1 !== type2) {
        if (typeInfo.types.indexOf(type1) > typeInfo.types.indexOf(type2)) {
            return `${camelCase(type2)} ${camelCase(type1)}`
        }
        return `${camelCase(type1)} ${camelCase(type2)}`
    }
    if (typeInfo.types.includes(type1))
        return `${camelCase(type1)}`
    if (typeInfo.types.includes(type2))
        return `${camelCase(type2)}`
    return ''
}

const getTypeColor = computed(() => {
    let type = newMon.value.type ? newMon.value.type.toLowerCase() : ''
    if (typeInfo.types.includes(newMon.value.type)) {
        type = typeInfo.types.indexOf(newMon.value.type)
        return typeInfo.typeColors[type]
    }
    else
        return ''
})

const getType2Color = computed(() => {
    let type = newMon.value.type2 ? newMon.value.type2.toLowerCase() : ''
    if (typeInfo.types.includes(newMon.value.type2)) {
        type = typeInfo.types.indexOf(newMon.value.type2)
        return typeInfo.typeColors[type]
    }
    else
        return ''
})

// Set bg color, check for 2-type mons, lower color index prior
const setColor = computed(() => {
    if (getTypeColor.value && getType2Color.value && getTypeColor.value !== getType2Color.value) {
        if (typeInfo.typeColors.indexOf(getTypeColor.value) > typeInfo.typeColors.indexOf(getType2Color.value)) {
            return `background-image: linear-gradient(to right, ${getType2Color.value}, ${getTypeColor.value});`
        }
        return `background-image: linear-gradient(to right, ${getTypeColor.value}, ${getType2Color.value});`
    }
    else
        return `background-color: ${getTypeColor.value ? getTypeColor.value : getType2Color.value};`

})

</script>

<template>
<div class="container flex w-full gap-10">
    <div class="input-container grid grid-flow-row grid-cols-1 gap-10 p-10">
        <div class="name">
        <label class="basic" for="name">Name*</label>
        <input id="name" type="text" v-model.trim="newMon.name" maxlength="10" placeholder="Insert Name" @keydown.space.prevent>
        </div>
        <div class="type">
        <label class="basic" for="type">Type*</label>
        <input id="type" type="text" v-model.trim="newMon.type" maxlength="10" placeholder="Insert Type" @keydown.space.prevent>
        </div>
        <div class="type">
        <label class="basic" for="type2">Type 2</label>
        <input id="type2" type="text" v-model.trim="newMon.type2" maxlength="10" placeholder="Insert Type 2" @keydown.space.prevent>
        </div>
    </div>
    <div class="sheet bg-white bg-opacity-60 rounded-md h-full w-full p-20">
        <div class="sheet-title text-center font-bold text-5xl text-gray-600">
            Mon Sample Sheet
        </div>
        <hr class="my-10 border-black"/>
        <div class="sheet-content border border-black border-solid bg-black bg-opacity-25">
            <div class="sheet-content-left  p-10 flex flex-col gap-10">
            <div class="sheet-name text-3xl">Name: <span v-if="newMon.name" class="name-typed font-bold text-yellow-600 bg-red-600 px-5 rounded-sm">{{ camelCase(newMon.name) }}</span></div>
            <div class="sheet-type text-3xl">Type: <span class="type-typed font-bold px-5 rounded-sm text-white" :style="setColor">{{ setType(newMon.type, newMon.type2) }}</span></div>
            <div class="sheet-strain text-3xl">Strain: <span class="strain-typed font-bold text-black bg-blue-500 px-5 rounded-sm">Normal</span></div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-48">
  <path fill="#FFC107" d="M50 10 Q60 30 60 40 T50 70 Q40 80 40 70 T50 40 Q50 30 40 10z"/>
  <path fill="#673AB7" d="M50 70 Q40 80 40 70 T50 40 Q50 30 60 10 Q70 30 60 40 T50 70z"/>
  <path fill="#000" d="M50 70 Q40 80 40 70 T50 40 Q50 30 60 10 Q70 30 60 35 T45 70 M60 75 Q70 93 72 80 T60 70 Q60 60 70 50 Q80 60 80 70 T70 80z"/>
</svg>
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
    background: rgb(7, 182, 36);
    font-weight: 700;
    padding: 10px;
    border-radius: 4px;
    border: 3px black solid;
}
.submit:hover {
    background: rgba(7, 182, 36, 0.8);
}
.submit:active {
    background: rgba(7, 182, 36, 0.5);
}
</style>