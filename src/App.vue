<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'
import { useCardsStore } from './stores/cards';

// access the `store` variable anywhere in the component ✨
const cardsStore = useCardsStore()
import Table from './components/Table.vue';
import Popup from './components/modules/Popup.vue';
</script>

<template>

    <Table/> 
    <Popup v-if="cardsStore.popup">
        <h2> My first popup window </h2>
        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia aut magni cum nostrum, delectus dicta iusto eaque magnam ipsam quidem quo reprehenderit maiores consectetur voluptatibus voluptatem, minus doloremque dolorem perspiciatis!
        </p>
    </Popup>
</template>

<style lang="scss">


#app {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
}

body{
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    background-image: url(./assets/background2.jfif);
    background-size: cover;

}

</style>