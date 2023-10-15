<template>
    <div class="card draggable">
        <div class="card--header"> <h2>{{header}}</h2> <button class="del_button" @click="cardsStore.deleteCard(id)"> del </button> </div>
        <div class="card--text">
            {{ text }} {{ id }}
        </div>
    </div>
</template>

<script lang="ts">
import { useCardsStore } from '@/stores/cards';

export default{
    name: 'Card',
    setup()
    {
        const cardsStore = useCardsStore();
        return { cardsStore }
    },
    props:{
        id:{
            type: Number,
            required:true
        },
        header:{
            type: String,
            default: "Default header",
            required: false
        },
        text:{
            type: String,
            default: "Lorem ipsum dolor sit amet",
            required: false
        }
    }
}

</script>

<style lang="scss">

.card{
    
    display:flex;
    flex-direction: column;
    box-shadow: 1px 1px 1px 1px #bbb;
    background-color: #fff;
    border-radius: 5px;
    margin: 5px;

    &--text {
        font-size: 18px;
    }

    &--header{
        width: auto;
        display: flex;
        flex-direction: row;
   
        justify-content: space-between;
    
        
        
        
    }
}

.del_button{
   
    justify-self: flex-end;
}


</style>