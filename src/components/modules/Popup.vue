<template>
    <div class="popup">
        <div class="popup-inner">
            <slot></slot>

            <button @click="cardStore.togglePopup" class="popup-close">
                 close popup
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { useCardsStore } from '@/stores/cards';
export default {
    setup()
    {
        const cardStore = useCardsStore();
        return { cardStore }
    }
}
</script>

<style lang="scss" scoped>

.popup{
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: 99;
    background-color: rgba(0,0,0,0.3);

    display: flex;
    align-items: center;
    justify-content: center;

    &-inner{
        display: inherit;
        flex-direction: column;
        background: #fff;
        padding: 32px;
    }
}
</style>