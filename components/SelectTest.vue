<!-- Radix Vueを使用しoptionをfor文にするテスト -->

<template>
  <SelectRoot>
    <SelectTrigger :class="$style.selectTrigger" :style="{ width: triggerWidth }">
      <span :class="$style.selectTriggerText">{{ triggerText }}</span>
      <Icon icon="radix-icons:chevron-down" :class="$style.selectIcon" />
    </SelectTrigger>
    <SelectContent :class="$style.selectContent" :style="{ width: contentWidth }">
      <SelectItem
        v-for="(option, index) in options"
        :key="index"
        :value="option"
        :class="$style.selectItem"
      >
        {{ option }}
      </SelectItem>
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
  options: {
    type: Array as () => string[],
    default: () => ["選択肢1", "選択肢2", "選択肢3"],
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

.selectItem {
  @include select-item-base();
}
</style>
