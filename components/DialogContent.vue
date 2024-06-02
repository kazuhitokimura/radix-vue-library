<template>
  <div :class="$style.dialogContent">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  size: {
    type: String,
    default: "M",
  },
});
</script>

<style lang="scss" module>
.dialogContent {
  display: flex;
  flex-direction: column;
  background-color: $surface-main;
  z-index: $z-index-40;
  box-shadow: $shadow-40;
}
</style>
