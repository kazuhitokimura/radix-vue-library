<!-- Radix Vueを使用 -->
<!-- selectのoptionをslotで切り替えるテスト -->

<template>
  <!--
  <SelectTest
    triggerText="10"
    triggerWidth="5rem"
    contentWidth="5rem"
    :options="selectOption"
  />
    -->
  <Select triggerText="10" triggerWidth="5rem" contentWidth="5rem">
    <SelectItem :class="$style.selectItem" value="1">10</SelectItem>
    <SelectItem :class="$style.selectItem" value="2">20</SelectItem>
  </Select>
</template>

<script setup>
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectSeparator,
  SelectTrigger,
} from "radix-vue";
import { ref } from "vue";

const selectOption = ref(["1", "2"]);
</script>

<style lang="scss" module>
.selectItem {
  @include select-item-base();
}
</style>
