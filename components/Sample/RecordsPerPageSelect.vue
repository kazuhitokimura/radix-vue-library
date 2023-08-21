<!-- Radix Vueを使用 -->
<!--実際はplaceholderではなくoption-->

<template>
  <Select
    triggerText="10"
    triggerWidth="5rem"
    contentWidth="5rem"
    placeholder="10"
    :options="selectOption"
    :clearable="false"
  />
</template>

<script setup>
import { ref } from "vue";

const selectOption = ref(["10", "20", "30"]);
</script>

<style lang="scss" module>
.selectItem {
  @include select-item-base();
}
</style>
