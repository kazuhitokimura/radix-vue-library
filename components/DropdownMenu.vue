<!-- Radix Vueを使用 -->
<!-- Triggerをslotにしてみる -->

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger :class="$style.dropDownTrigger">
      <slot name="dropDownTrigger" />
    </DropdownMenuTrigger>
    <DropdownMenuContent :class="$style.dropDownContent">
      <slot name="dropDownContent" />
    </DropdownMenuContent>
  </DropdownMenuRoot>
</template>

<script setup lang="ts">
/* 一応すべてインポートしておく */
import {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuCheckboxItem,
  DropdownMenuItemIndicator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuArrow,
  DropdownMenuSeparator,
} from "radix-vue";
</script>

<style lang="scss" module>
/* 共通のスタイル */
.dropDownTrigger {
  height: fit-content;
  width: fit-content;

  /*フォーカス時のスタイルがslotと2重で当たらないようにする*/
  &:focus {
    outline: none;
  }
}

.dropDownContent {
  margin-top: 0.25rem;
  padding: 0.25rem 0;
  background-color: $bg-main;
  border-radius: $radius-S;
  box-shadow: $shadow-10;
}
</style>
