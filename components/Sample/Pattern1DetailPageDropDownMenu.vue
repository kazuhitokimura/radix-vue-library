<!-- Radix Vueを使用 -->

<template>
  <DropdownMenu>
    <template #dropDownTrigger>
      <IconBtn icon="more_horiz" color="neutral" size="L" />
    </template>
    <template #dropDownContent>
      <DropdownMenuItem :class="$style.dropDownItem"
        ><NuxtLink :class="$style.nuxtLink" to="/edit">編集</NuxtLink></DropdownMenuItem
      >
      <DropdownMenuItem :class="[$style.dropDownItem, $style.destructive]">
        削除
      </DropdownMenuItem>
    </template>
  </DropdownMenu>
</template>

<script setup lang="ts">
import { DropdownMenuItem } from "radix-vue";
import IconBtn from "../IconBtn.vue";
import DropdownMenu from "../DropdownMenu.vue";
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

.nuxtLink {
  width: 100%;
  height: 100%;
}

.destructive {
  color: $error-main;
}
</style>
