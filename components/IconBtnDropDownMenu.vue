<!-- Radix Vueを使用 -->

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger :class="[$style.dropDownTrigger, $style[size]]">
      <span class="material-symbols-outlined">{{ icon }}</span>
    </DropdownMenuTrigger>
    <DropdownMenuContent :class="$style.dropDownContent">
      <slot />
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

const props = defineProps({
  icon: {
    type: String,
    default: "more_horiz",
  },
  size: {
    type: String,
    default: "M",
  },
});
</script>

<style lang="scss" module>
/* 共通のスタイル */
.dropDownTrigger {
  @include icon-btn-base();
  @include neutral-btn-base();
}

/* size別のスタイル */
.M {
  padding: 0.625rem;
  height: 2.5rem;
  width: 2.5rem;
}

.L {
  padding: 0.625rem;
  height: 2.75rem;
  width: 2.75rem;
}

.dropDownContent {
  margin-top: 0.25rem;
  padding: 0.25rem 0;
  background-color: $bg-main;
  border-radius: $radius-S;
  box-shadow: $shadow-10;
}
</style>
