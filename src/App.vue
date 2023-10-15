<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'

import Table from './components/Table.vue';

</script>

<template>

    <Table/>

  
</template>

<style lang="scss">

#app {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
}

body{
    width: 100vw;
    height: 100vh;
    background-image: url(./assets/background2.jfif);
    background-size: cover;

}

</style>