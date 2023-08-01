<!-- メモ：td、内容の種類によって別のコンポーネントに　-->

<template>
  <td :class="[$style.td]" :style="{ width: width }">
    <slot></slot>
  </td>
</template>

<script setup>
const props = defineProps({
  width: {
    type: String,
    default: "10rem",
  },
});
</script>

<style lang="scss" module>
.td {
  width: auto;
  padding: 16px 12px;
  text-align: left;
  border-bottom: 1px solid $border-main;
  color: $text-main;
  @include text-body1();
}
</style>
