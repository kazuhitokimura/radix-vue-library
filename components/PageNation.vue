<template>
  <div :class="$style.tableFooter">
    表示件数:
    <RecordsPerPageSelect />
    <IconBtn icon="chevron_left" color="neutral" size="L" ariaLabel="戻る" />
    <IconBtn icon="chevron_right" color="neutral" size="L" ariaLabel="次へ" />
    {{ allPage }} 件中 {{ currentPage }} - {{ lastPage }} 件
  </div>
</template>

<script setup>
const props = defineProps({
  allPage: {
    type: Number,
    default: 100,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
  lastPage: {
    type: Number,
    default: 10,
  },
});
</script>

<style lang="scss" module>
.tableFooter {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  @include text-body2();
  color: $text-main;
}
</style>
