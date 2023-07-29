<template>
    <th :class="[$style.th, {[$style.truncate]: isTruncate}]">{{ text }}</th>
</template>

<script setup>
const props = defineProps({
  text: {
      type: String,
      default: 'テキスト'
  },
    isTruncate: {
        type: Boolean,
        default: true,
    },
})

</script>

<style lang="scss" module>

.th{
        padding: 1rem 0.75rem;
        text-align: left;
        border-bottom: 1px solid $border-main;
        color: $text-sub;
        @include text-h5();
        max-width: 0;
    }

    .truncate{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>