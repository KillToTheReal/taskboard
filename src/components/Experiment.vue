<template>

    <div 
    class="dropzone"
    @drop="onDrop($event, 1)"
    @dragover.prevent
    @dragenter.prevent>
        <div
            v-for="item in listOne"
            :key="item.id"
            class="drag-el"
            draggable="true"
            @dragstart="startDrag($event,item)"
            >
            {{ item.title }}
        </div>
    </div>
    <div 
    class="dropzone"
    @drop="onDrop($event, 2)"
    @dragover.prevent
    @dragenter.prevent>
        <div
            v-for="item in listTwo"
            :key="item.id"
            class="drag-el"
            draggable="true"
            @dragstart="startDrag($event,item)"
            >
            {{ item.title }}
        </div>
    </div>

</template>
<script lang="ts">

export default{
    name:"EXP",
    data() {
    return {
      items: [
        {
          id: 0,
          title: 'Item A',
          list: 1,
        },
        {
          id: 1,
          title: 'Item B',
          list: 1,
        },
        {
          id: 2,
          title: 'Item C',
          list: 2,
        },
      ],
    }
  },
    computed: {
    listOne() {
      return this.items.filter((item) => item.list === 1)
    },
    listTwo() {
      return this.items.filter((item) => item.list === 2)
    },
  },

    methods: {
    startDrag(evt, item) {
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('itemID', item.id)
    },
    onDrop(evt, list) {
      const itemID = evt.dataTransfer.getData('itemID')
      const item = this.items.find((item) => item.id == itemID)
      item.list = list
    },
  },
}
</script>

<style scoped>
.dropzone {
  background-color: #2769b5;
  margin-bottom: 10px;
  padding: 10px;
}

.drag-el {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 5px;
}
</style>