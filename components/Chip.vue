<template>
  <div :class="$style.chip">
    {{ text }}
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "テキスト",
  },
});
</script>

<style lang="scss" module>
.chip {
  @include text-h5();
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  color: $text-sub;
  border: 1px solid $border-divider;
  width: fit-content;
  height: fit-content;
}
</style>
