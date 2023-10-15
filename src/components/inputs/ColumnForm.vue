<template>
    <div  class="columnform">
        <button @click="columnClicked" v-if="!clicked"> add some column nigga </button>

        <span class="columnform--add" v-if="clicked">

            <textarea v-model="columnText" type="text"></textarea>
           <span class="columnform--add__buttons">
             <button @click="addColumn"> add column </button>
             <button @click="columnClicked"> X </button>
            </span>
        </span>
    </div>
</template>

<script lang="ts">
import { useColumnsStore } from '@/stores/columns';

export default{
    name:'ColumnForm',
    data(){
        return {
            clicked: false,
            columnText: "",
        }
    },
    setup() {
        const columnStore = useColumnsStore();
        return { columnStore };
    },
    methods:{
        columnClicked()
        {
            this.clicked = !this.clicked;
        },
        addColumn()
        {
            if(this.columnText!="")
            {
                this.columnStore.addColumn(this.columnText);
                this.columnClicked();
                this.columnText="";
            }
        }
    }
}
</script>

<style lang="scss">
.columnform{
    padding: 5px;
    min-width: 220px;
    display: flex;
    flex-direction: column;
    height: fit-content;
 

    &>button{
        min-height: 30px;
        border-radius: 5px;
        border: none;
        &:hover{
            background-color: #e4e5e8;
        }
    }
}
</style>