<!-- Radix Vueを使用 -->

<template>
  <SelectRoot >
    <SelectTrigger :class="$style.selectTrigger" :style="{ width: triggerWidth }">
      <span :class="$style.selectTriggerText">{{ triggerText }}</span>
      <Icon icon="radix-icons:chevron-down" :class="$style.selectIcon"/>
    </SelectTrigger>
      <SelectContent :class="$style.selectContent" :style="{ width: contentWidth }">
        <SelectItem :class="$style.selectItem" value="1">オプション</SelectItem>
        <SelectItem :class="$style.selectItem" value="2">オプション</SelectItem>
       </SelectContent>
  </SelectRoot>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
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
        default: '選択してください'
    },
    triggerWidth: {
        type: String,
        default: '100%'
    },
    contentWidth: {
        type: String,
        default: '100%'
    },
})
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
.selectIcon{
    width: 1rem;
    height: 1rem;
    fill: $text-main;
}
.selectContent{
    margin-top: 4px;
    padding: 4px 0;
    background-color: $bg-main;
    border-radius: $radius-S;
    box-shadow: $shadow-10;
}
.selectItem{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;
    color: $text-main;
    width: 100%;
    cursor: pointer;

    &:hover{
        background-color: $overlay-hover;
    }

    &:active{
        background-color: $overlay-active;
    }

    &:focus-visible{
        outline : 2px solid $focus-main;
    }
}
</style>