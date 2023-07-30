<template>
    <div :class="$style.tableFooter">
    表示件数:
    <Select triggerText="10" triggerWidth="5rem" contentWidth="5rem"/>
    <IconBtn icon="chevron_left" color="neutral" size="L"/>
    <IconBtn icon="chevron_right" color="neutral" size="L"/>
    {{ allPage }} 件中 {{ currentPage }} - {{ lastPage }} 件
    </div>
</template>

<script setup>
const props = defineProps({
    allPage: {
        type: Number,
        default: 100
    },
    currentPage: {
        type: Number,
        default: 1
    },
    lastPage: {
        type: Number,
        default: 10
    },
})
</script>

<style lang="scss" module>
.tableFooter{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    @include text-body2();
    color: $text-main;
}
</style>