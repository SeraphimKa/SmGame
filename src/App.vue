<script setup>
import { RouterView } from 'vue-router';

import Navbar from './components/Navbar.vue';
import Infobar from './components/Infobar.vue';

</script>

<template>
  <div class="wrapper flex flex-col min-h-screen">
    <Infobar class="infobar h-20" />
    <RouterView class="router" />
    <Navbar class="navbar h-32" />
  </div>
</template>

<style scoped>
.wrapper {
  border: 10px solid black;
}

.router {
  flex-grow: 1;
  border: 5px solid silver;
}
</style>