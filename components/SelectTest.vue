<!-- Radix Vueを使用しoptionをfor文にするテスト -->

<template>
  <div :class="$style.selectTrigger" :style="{ width: triggerWidth }">
    <SelectRoot v-model="selectOption">
      <SelectTrigger aria-label="select" :class="$style.selectBox">
        <SelectValue :placeholder="placeholder"></SelectValue>
        <Icon icon="radix-icons:chevron-down" :class="$style.selectIcon" />
      </SelectTrigger>
      <SelectContent
        :class="$style.selectContent"
        :style="{ width: contentWidth }"
        :position="'popper'"
      >
        <SelectGroup v-if="clearable">
          <button @click="clearSelection" :class="$style.selectItem">
            {{ placeholder }}
          </button>
        </SelectGroup>
        <SelectGroup>
          <SelectItem
            v-for="(option, index) in options"
            :key="index"
            :value="option"
            :class="$style.selectItem"
          >
            <SelectItemIndicator :class="$style.selectItemIndicator"
              ><Icon icon="radix-icons:check" :class="$style.selectIcon"
            /></SelectItemIndicator>
            {{ option }}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </SelectRoot>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref } from "vue";

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
  SelectValue,
} from "radix-vue";

const selectOption = ref();

const props = defineProps({
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
  placeholder: {
    type: String,
    default: "選択してください",
  },
  clearable: {
    type: Boolean,
    default: true,
  },
});

const clearSelection = () => {
  selectOption.value = "";
};
</script>

<style lang="scss" module>
.selectBox {
  @include input-base();
  flex: 1;
}

.selectTrigger {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  height: fit-content;
}

.SelectValue[data-placeholder] {
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

.selectItemIndicator {
  width: 1rem;
  height: 1rem;
  line-height: 0px;
  fill: $text-white;
  position: absolute;
  left: 0.5rem;
}
</style>
