<template>
    <div  class="cardform">
        <button class="styledButton" @click="cardClicked" v-if="!clicked"> add some card</button>

        <span class="cardform--add" v-if="clicked">

            <textarea v-model="cardText" type="text"></textarea>
           <span class="cardform--add__buttons">
             <button @click="addCard"> add card </button>
             <button @click="cardClicked"> X </button>
            </span>
        </span>
    </div>
</template>

<script lang="ts">
import { useCardsStore } from '@/stores/cards';

export default{
    name:'CardForm',
    data(){
        return {
            clicked: false,
            cardText: "",
        }
    },
    props:{
        col_id:{
            type: Number,
            required: true,
        }
    },
    setup() {
        const cardStore = useCardsStore();
        return { cardStore };
    },
    methods:{
        cardClicked()
        {
            this.clicked = !this.clicked;
        },
        addCard()
        {
            if(this.cardText!="")
            {
                this.cardStore.addCard(this.cardText, this.col_id);
                this.cardClicked();
                this.cardText="";
            }
            
           
        }
    }
}
</script>

<style scoped lang="scss">
 .cardform{
    display:flex;
    flex-direction:column;
    
    &--add{
        display:inherit;
        flex-direction:inherit;
    }
 }
 button {
    min-height: 20px;
    border:none;
    background-color: #fff;
    border-radius: 5px;
    color: #172b4d;
    font-size: 16px;
    &:hover{
        background-color: #e4e5e8;
    }
 }
</style>