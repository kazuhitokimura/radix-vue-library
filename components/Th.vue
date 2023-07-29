<template>
    <td :class="[$style.th, {[$style.fixedHeight]: isFixedHeight}]">{{ text }}</td>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  text: {
      type: String,
      default: 'テキスト'
  },
    isFixedHeight: {
        type: Boolean,
        default: false,
    },
})

</script>

<style lang="scss" module>

.th{
        padding: 1rem 0.75rem;
        text-align: left;
        border-bottom: 1px solid $border-main;
        color: $text-sub;
        @include h4();
    }

.fixedHeight{
        height: 3.5rem;
        display: flex;
        align-items: center;
    }
</style>