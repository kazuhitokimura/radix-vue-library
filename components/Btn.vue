<template>
    <button :class="$style.color">
        <slot>{{ label }}</slot>
    </button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    label: {
        type: String,
        default: 'ラベル'
    }
})
</script>

<style lang="scss" module>
.color{
    background-color: $red-700;
    color: $text-white;
}
</style>