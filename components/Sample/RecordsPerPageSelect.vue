<!-- Radix Vueを使用 -->
<!-- selectのoptionをslotで切り替えるテスト -->

<template>
  <Select triggerText="10" triggerWidth="5rem" contentWidth="5rem">
    <SelectItem :class="$style.selectItem" value="1">10</SelectItem>
    <SelectItem :class="$style.selectItem" value="2">20</SelectItem>
  </Select>
</template>

<script setup lang="ts">
import { SelectItem } from "radix-vue";
</script>

<style lang="scss" module>
.selectItem {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 1rem;
  color: $text-main;
  @include text-body1();
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: $overlay-hover;
  }

  &:active {
    background-color: $overlay-active;
  }

  &:focus-visible {
    outline: 2px solid $focus-main;
  }
}
</style>
