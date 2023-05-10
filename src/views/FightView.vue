
<script setup>
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
        <div class="fight-screen">
            <div class="monster absolute bottom-32 left-32">
                <div class="hp-bar">
                    <div class="hp-num">100/100
                    </div>
                    <div class="hp"></div>
                </div>
                <div class="monster-img bg-red-600 h-20 w-20"></div>
            </div>
            <div class="monster absolute top-32 right-32">
                <div class="hp-bar">
                    <div class="hp-num">100/100
                    </div>
                    <div class="hp"></div>
                </div>
                <div class="monster-img bg-blue-600 h-20 w-20"></div>
            </div>
        </div>
        <div
            class="fight-controls flex flex-col absolute bottom-0 left-0 right-0 h-48 bg-cyan-700 text-orange-400 text-4xl justify-around">
            <div class="fight-controls-top flex justify-around">
                <div class="fight-controls-fight ctrl-btn">Fight</div>
                <div class="fight-controls-wait ctrl-btn">Wait</div>
            </div>
            <div class="fight-controls-bottom flex justify-around">
                <div class="fight-controls-items ctrl-btn">Items</div>
                <div class="fight-controls-run ctrl-btn">Run</div>
            </div>
        </div>
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


/* fight controls */
.fight-controls {
    margin: 10px;
    box-shadow: 0 0 10px 10px rgb(15, 70, 83);
    border: 5px solid rgb(39, 117, 134);
    border-radius: 4px;
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

}

.ctrl-btn:hover {
    background-image: linear-gradient(to right, #6cfe4f 0%, #000000 100%);
}
</style>