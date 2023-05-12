
<script setup>
import FightControls from '../components/fightview/FightControls.vue';

const monster = {
    name: 'mon',
    type: 'fire',
    stats: {
        hp: 100,
        atk: 15,
        def: 15,
        spd: 15,
    },
    strain: 'normal'
}
</script>


<template>
    <div class="fight flex flex-col">
        <div class="fight-screen flex-grow">
            <div class="monster absolute left-1/4 bottom-1/4">
                <div class="hp-bar">
                    <div class="hp-num">100/100
                    </div>
                    <div class="hp"></div>
                </div>
                <div class="monster-img bg-red-600 h-20 w-20 rounded-md"></div>
            </div>
            <div class="monster absolute top-1/4 right-1/4">
                <div class="hp-bar">
                    <div class="hp-num">100/100
                    </div>
                    <div class="hp"></div>
                </div>
                <div class="monster-img bg-blue-600 h-20 w-20 rounded-md"></div>
            </div>
        </div>
        <FightControls></FightControls>
    </div>
</template>


<style scoped>
.fight {
    background-color: var(--bg-fight);
}

.hp-bar {
    position: relative;
    height: 20px;
    outline: 1px solid white;
    margin-bottom: 1px;
    border-radius: 50px;
    margin-bottom: 10px;
}

.hp-num {
    position: relative;
    height: 100%;
    width: 75%;
    background-color: var(--bg-fight);
    top: -15px;
    z-index: 20;
    border-radius: 50px;
}

.hp {
    position: relative;
    top: -20px;
    height: 100%;
    width: 100%;
    background-color: red;
    border-radius: 50px;
    text-align: center;
}
</style>