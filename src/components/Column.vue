<template>
    <div @drop="onDrop($event, id)" class="column droppable" @dragover.prevent @dragenter.prevent>

           <span class="column--header" draggable="true"> <h2> {{col_name}} </h2> </span>
            <span class="column--cards">
            
                <Card v-for="card in cards" @dragstart="onDragStart($event, card.id)" draggable="true" 
                :key="card.id" :header="card.header" :text="card.text" :id="card.id"/>
            </span> 
            <CardForm :col_id="id"></CardForm>
    </div>
</template>

<script lang="ts">
import Card from './Card.vue';
import CardForm from './inputs/CardForm.vue';
export default{
    
    name: 'Column',
    components:{Card, CardForm},

    props:{
        id:{
            type: Number,
            default: 0,
            required: true
        },
        cards:{
            type: Object,
            default: [],
            required: false
        },
        col_name:{
            type: String,
            default: "Some Column",
            required: false,
        }
    },
    methods:{
        onDragStart(e: DragEvent, id: Number){
            e.dataTransfer.dropEffect ='move';
            e.dataTransfer.effectAllowed='move';
            e.dataTransfer.setData('cardId', id.toString());
        },
        onDrop(e: DragEvent, columnId: Number){ 

            const cardId = parseInt(e.dataTransfer.getData('cardId'));
            console.log('card_id:'+cardId);
            console.log('col_id:'+columnId);
            this.$emit('drop-card', {cardId, columnId});
         
        },
    }
}

</script>

<style scoped lang="scss">

.column {

    display:flex;
    min-width: 220px;
    flex-direction: column;
    margin: 5px;
    gap: 5px;
    color: #172b4d;
    border-radius: 8px;
    padding-inline: 10px;
    padding-bottom: 5px;
    height: fit-content;
    background-color: #f1f2f4;
}

.draggable {
   &:hover{
        background-color: #ddd;
   }
}

</style>