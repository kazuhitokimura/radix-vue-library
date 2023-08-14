<!-- Radix Vueを使用 -->
<!-- Triggerはボタンが2重になるのでslotにしないが、DropdowmContentの中身は入る内容が予測できないのでslotにするのがいいかも -->

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger :class="[$style.dropDownTrigger, $style[size]]">
      <span class="material-symbols-outlined">{{ icon }}</span>
    </DropdownMenuTrigger>
    <DropdownMenuContent :class="$style.dropDownContent">
      <DropdownMenuItem
        v-for="item in items"
        :key="item.id"
        :class="$style.dropDownItem"
        @click="() => handleItemClick(item)"
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
    required: true,
    default: () => [],
  },
});

const handleItemClick = (item: DropdownMenuItem) => {
  emit("item-click", item);
};

const emit = defineEmits(["item-click"]);
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

.dropDownContent {
  margin-top: 0.25rem;
  padding: 0.25rem 0;
  background-color: $bg-main;
  border-radius: $radius-S;
  box-shadow: $shadow-10;
}

.dropDownItem {
  @include dropdown-menu-item-base();
}
</style>
