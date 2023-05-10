<script setup>

</script>

<template>
    <nav class="navbar flex justify-around bg-red-800 text-black text-5xl">
        <RouterLink active-class="active" class="nav-link" to="/">
            <div class="home">Home</div>
        </RouterLink>
        <RouterLink active-class="active" class="nav-link" to="/fight">
            <div class="fight">Fight</div>
        </RouterLink>
        <RouterLink active-class="active" class="nav-link" to="/shop">
            <div class="shop">Shop</div>
        </RouterLink>
        <RouterLink active-class="active" class="nav-link" to="/options">
            <div class="options">Options</div>
        </RouterLink>
        <RouterLink active-class="active" class="nav-link" to="/exit">
            <div class="exit">Exit</div>
        </RouterLink>
    </nav>
</template>

<style scoped>
.navbar {
    min-height: 50px;
    font-family: 'Bebas Neue', sans-serif;
    display: flex;
    align-items: center;
}

.nav-link {
    text-decoration: none;
    color: gray;

}

.active {
    color: rgb(0, 153, 255);
    text-decoration: overline;
}
</style>