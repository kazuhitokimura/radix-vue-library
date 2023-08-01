<!-- Radix Vueを使用 -->

<template>
  <IconBtnDropDownMenu size="L">
    <DropdownMenuItem :class="$style.dropDownItem">編集</DropdownMenuItem>
    <DropdownMenuItem :class="[$style.dropDownItem, $style.destructive]">
      削除
    </DropdownMenuItem>
  </IconBtnDropDownMenu>
</template>

<script setup lang="ts">
import { DropdownMenuItem } from "radix-vue";
</script>

<style lang="scss" module>
.dropDownItem {
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

.destructive {
  color: $error-main;
}
</style>
