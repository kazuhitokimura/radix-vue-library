<!-- Radix Vueを使用 -->

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger :class="[$style.dropDownTrigger, $style[size]]">
      <span class="material-symbols-outlined">{{ icon }}</span>
    </DropdownMenuTrigger>
    <DropdownMenuContent :class="$style.dropDownContent">
      <DropdownMenuItem
        v-for="item in items"
        :key="item.id"
        :class="$style[item.color]"
        @click="$emit('click', item)"
        >{{ item.label }}</DropdownMenuItem
      >
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

type DropdownMenuItem = {
  id: string;
  label: string;
  color: string;
};

const props = defineProps({
  icon: {
    type: String,
    default: "more_horiz",
  },
  size: {
    type: String,
    default: "M",
  },
  items: {
    type: Array as () => DropdownMenuItem[],
    default: () => [
      { id: "1", label: "メニュー1", color: "default" },
      { id: "2", label: "メニュー2", color: "default" },
      { id: "3", label: "メニュー3", color: "default" },
    ],
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
  @include icon-btn-size-M();
}

.L {
  @include icon-btn-size-L();
}

/* color別のスタイル */
.default {
  @include dropdown-menu-item-base("default");
}

.destructive {
  @include dropdown-menu-item-base("destructive");
}

.dropDownContent {
  margin-top: 0.25rem;
  padding: 0.25rem 0;
  background-color: $bg-main;
  border-radius: $radius-S;
  box-shadow: $shadow-10;
  &:hover {
    outline: none;
  }

  &:active {
    outline: none;
  }

  &:focus-visible {
    outline: none;
  }
}

.dropDownItem {
  @include dropdown-menu-item-base("default");
}

.dropDownItem[data-highlighted] {
  background-color: $focus-main;
  color: $text-white;
}
</style>
