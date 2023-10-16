import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCardsStore = defineStore('cards',{
    state: () => {
      return {
         /** @type {{ id: int, col_id: int -> columns.id, header: string, text: string */
        cards: [{id: 0, col_id: 1, header: 'Header', text:'lorem lorem'},
        {id: 1, col_id: 1, header: 'Header', text:'lorem lorem'},
        {id: 2, col_id: 1, header: 'Header', text:'lorem lorem'},
        {id: 3, col_id: 1, header: 'Header', text:'lorem lorem'},
        {id: 4, col_id: 1, header: 'Header', text:'lorem lorem'},
        {id: 13, col_id: 3, header: 'Header', text:'lorem lorem'},
        {id: 9, col_id: 3, header: 'Header', text:'lorem lorem'},
        {id: 10, col_id: 3, header: 'Header', text:'lorem lorem'},
        {id: 11, col_id: 3, header: 'Header', text:'lorem lorem'},
        {id: 12, col_id: 1, header: 'Header', text:'lorem lorem'},
        {id: 14, col_id: 3, header: 'Header', text:'lorem lorem'},
        {id: 5, col_id: 2, header: 'Header', text:'lorem lorem'},
        {id: 6, col_id: 3, header: 'Header', text:'lorem lorem'},
        {id: 7, col_id: 2, header: 'Header', text:'lorem lorem'},
        {id: 8, col_id: 2, header: 'Header', text:'lorem lorem'}],
        popup: false,
      }
    },
    getters: {
        getCardsByColId: (state) =>{
            return (colId: Number) => { return state.cards.filter((card) => card.col_id === colId) };
        }
    },
    actions: {
        togglePopup()
        {
            this.popup = !this.popup;
        },
        changeCardColumn(cardId, colId)
        {
            const cardToUpdate = this.cards.find(card => card.id == cardId);
            if (cardToUpdate) {
                cardToUpdate.col_id = colId;
            }
        },
        addCard(cardHeader, colId, cardText='lorem ipsum')
        {
            const ids = this.cards.map( card => {return card.id});
            const maxID = Math.max(...ids);
            this.cards.push({id:maxID+1, col_id:colId, header: cardHeader, text: cardText });
        },
        updateCardName(cardId, newText)
        {
            const cardToUpdate = this.cards.find(card => card.id == cardId);
            if (cardToUpdate) {
                cardToUpdate.col_id = colId;
            }
        },
        deleteCard(cardId)
        {
            const cardToDelete = this.cards.findIndex(card => card.id == cardId)
            if(cardToDelete > -1)
                this.cards.splice(cardToDelete, 1);
        }
    }
  });