<template>
  <SelectRoot >
    <SelectTrigger :class="$style.selectTrigger">
      <span :class="$style.selectTriggerText">選択してください</span>
      <Icon icon="radix-icons:chevron-down" :class="$style.selectIcon"/>
    </SelectTrigger>
    <SelectPortal>
      <SelectContent :class="$style.selectContent">
        <SelectItem :class="$style.selectItem" value="1">オプション</SelectItem>
        <SelectItem :class="$style.selectItem" value="2">オプション</SelectItem>
       </SelectContent>
    </SelectPortal>
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
</script>


<style lang="scss" module>
.selectTrigger {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 10px 8px;
    border: 1px solid $border-main;
    border-radius: $radius-S;
    min-height: 2.75rem;
    width: 100%;

    &:focus-visible {
        border-color: $focus-main;
        outline: 2px solid $blue-100;
    }
}
.selectTriggerText {
    flex: 1;
    @include text-p();
    color: $text-main;
}
.selectIcon{
    width: 1rem;
    height: 1rem;
    fill: $text-sub;
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