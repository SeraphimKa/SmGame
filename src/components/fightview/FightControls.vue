
<script setup>
import FightOptions from './FightOptions.vue';
import ItemOptions from './ItemOptions.vue';
import SwitchOptions from './SwitchOptions.vue';

import { ref } from 'vue';

const showControls = ref('main')


const onOptionClick = (option) => {
    showControls.value = option
}
</script>

<template>
    <div
        class="fight-container flex flex-col relative grow-0 bottom-0 left-0 right-0 h-48 bg-cyan-700 text-orange-400 text-4xl justify-around rounded border-6 border-solid border-cyan-600">
        <div v-if="showControls === 'main'" class="fight-controls grid grid-rows-2 grid-cols-2 justify-around h-full">
            <div class="flex justify-center items-center">
                <button class="fight-controls-fight ctrl-btn" @click="onOptionClick('fight')">Fight</button>
            </div>
            <div class="flex justify-center items-center">
                <button class="fight-controls-switch ctrl-btn" @click="onOptionClick('switch')">Switch</button>
            </div>
            <div class="flex justify-center items-center">
                <button class="fight-controls-items ctrl-btn" @click="onOptionClick('items')">Items</button>
            </div>
            <div class="flex justify-center items-center">
                <button class="fight-controls-run ctrl-btn" @click="onOptionClick('main')">Run</button>
                <!-- ^^^ Run button missing functionality -->
            </div>
        </div>
        <FightOptions v-if="showControls === 'fight'" @back="onOptionClick('main')" />
        <ItemOptions v-if="showControls === 'items'" @back="onOptionClick('main')" />
        <SwitchOptions v-if="showControls === 'switch'" @back="onOptionClick('main')" />
    </div>
</template>



<style scoped>
.fight-container {
    margin: 10px;
    box-shadow: 0 0 10px 10px rgb(15, 70, 83);
}

.ctrl-btn {
    cursor: pointer;
    background-image: linear-gradient(to right, #fe4f4f 0%, #000000 100%);
    width: 300px;
    --ht: 65px;
    height: var(--ht);
    line-height: var(--ht);
    border-radius: 50px;
    text-align: center;
    transition: all .2s;
}

.ctrl-btn:hover {
    background-image: linear-gradient(to right, #6cfe4f 0%, #000000 100%);
    transform: scale(0.96);
}
</style>