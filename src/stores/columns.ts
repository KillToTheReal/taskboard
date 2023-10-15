import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useColumnsStore = defineStore('columns',{
    state: () =>{
      return {
       columns: [ 
          {   id:1, 
              col_name:' Column 1', 
          },
          {   id:2, 
              col_name:' Column 2', 
          },
          {   id:3, 
              col_name:' Column 3',           
          },
        ]
      }
    },
    actions:{
      addColumn(colName='Column')
        {
            const ids = this.columns.map( col => {return col.id});
            const maxID = Math.max(...ids);
            this.columns.push({id:maxID+1, col_name: colName });
        }
    }
  })