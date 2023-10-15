<template>
    <div class="table droppable">
  
            <Column v-for="column in columnsStore.columns" :key="'col_'+column.id" 
            @drop-card="changeCard" 
            :id="column.id" :col_name="column.col_name" 
            :cards="cardStore.getCardsByColId(column.id)"/> 
            <ColumnForm/>
  
    </div> 

</template>
<script lang="ts">

import Column from './Column.vue';
import { useColumnsStore } from '@/stores/columns';
import { useCardsStore } from '@/stores/cards';
import ColumnForm from './inputs/ColumnForm.vue';


export default{
    name:"Table", 
    components:{Column, ColumnForm},
    setup() {
        const cardStore = useCardsStore();
        const columnsStore = useColumnsStore();
    return { cardStore, columnsStore };
    },
    methods:{
        changeCard(n)
        {
            this.cardStore.changeCardColumn(n.cardId, n.columnId);
        }
    } 
}

</script>

<style scoped lang="scss">
.table{
    display: flex;
    flex-direction: row;
//    border: 3px solid red;
    width:90vw;
    height: 90vh;
    background-color: transparent;
    overflow: auto;

}
* {
    scrollbar-width: thin;
    scrollbar-color: #f1f2f4bb rgba(0,0,0);
    
  }
  
  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    
  }
  
  *::-webkit-scrollbar-track {
    background: rgba(0,0,0,0.2);
    border-radius: 10px;
  }
  
  *::-webkit-scrollbar-thumb {
    background-color: #f1f2f4;
    border-radius: 5px;
     border: 3px solid rgba(#f1f2f4,0.36);

  }

  ::-webkit-scrollbar-corner {
    background-color: transparent ; 
}
</style>