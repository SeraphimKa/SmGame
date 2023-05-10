
<template>
    <div class="options flex flex-col mx-24">
        <h1 class="options-title text-7xl flex justify-center items-center">Options</h1>
        <div class="options-content my-20 flex flex-col justify-around items-center">
            <div class="options-content-item">Option A
            </div>
            <div class="options-content-item">Option B
            </div>
            <div class="options-content-item">Option C
            </div>
            <div class="options-content-item">Option D
            </div>
        </div>
    </div>
</template>

<style scoped>
.options-title {
    flex-grow: 1;
    background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
}

.options-content {
    flex-grow: 7;
}

.options-content-item {
    font-size: 30px;
    cursor: pointer;
    background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
    padding: 20px 80px;
    border-radius: 25px;
}
</style>