<!-- メモ：td、内容の種類によって別のコンポーネントに　-->

<template>
  <td
    :class="[$style.td, { [$style.truncate]: isTruncate }]"
    :style="{ minWidth: minWidth }"
  >
    <div :class="$style.statusWrapper">
      <div :class="[$style.status, $style[statusColor]]"></div>
      <span :class="{ [$style.truncate]: isTruncate }">{{ text }}</span>
    </div>
  </td>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "成功",
  },
  isTruncate: {
    type: Boolean,
    default: true,
  },
  statusColor: {
    type: String,
    default: "success",
  },
  minWidth: {
    type: String,
    default: "5rem",
  },
});
</script>

<style lang="scss" module>
.td {
  padding: 1rem 0.75rem;
  text-align: left;
  border-bottom: 1px solid $border-main;
  color: $text-main;
  max-width: 0;
  @include text-body1();
}
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.statusWrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.25rem;
}

.status {
  min-width: 12px;
  height: 12px;
  border-radius: $radius-full;
}

/*　ステータスカラー別のスタイル  */
.success {
  background-color: $success-main;
}

.info {
  background-color: $info-main;
}

.warning {
  background-color: $warning-main;
}

.error {
  background-color: $error-main;
}
</style>
