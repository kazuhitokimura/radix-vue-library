<!-- Radix Vueを使用 -->

<template>
  <SelectRoot>
    <SelectTrigger :class="$style.selectTrigger" :style="{ width: triggerWidth }">
      <SelectValue v-if="showPlaceholder" :placeholder="placeholder">{{
        placeholder
      }}</SelectValue>
      <SelectValue v-else :class="$style.selectTriggerText">{{
        triggerText
      }}</SelectValue>
      <Icon icon="radix-icons:chevron-down" :class="$style.selectIcon" />
    </SelectTrigger>
    <SelectContent
      :class="$style.selectContent"
      :style="{ width: contentWidth }"
      :position="'popper'"
    >
      <slot />
    </SelectContent>
  </SelectRoot>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

/* 一応すべてインポートしておく */
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

const props = defineProps({
  triggerText: {
    type: String,
    default: "選択してください",
  },
  triggerWidth: {
    type: String,
    default: "100%",
  },
  contentWidth: {
    type: String,
    default: "100%",
  },
  showPlaceholder: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "プレースホルダー",
  },
});
</script>

<style lang="scss" module>
.selectTrigger {
  @include input-base();
}
.selectTriggerText {
  flex: 1;
  @include text-body1();
  color: $text-main;
}
.selectIcon {
  width: 1rem;
  height: 1rem;
  fill: $text-main;
}
.selectContent {
  margin-top: 0.25rem;
  padding: 0.25rem 0;
  background-color: $bg-main;
  border-radius: $radius-S;
  box-shadow: $shadow-10;
}
</style>
