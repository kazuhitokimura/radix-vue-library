<template>
  <div :class="[$style.spinner, $style[color]]"></div>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: "gray",
  },
});
</script>

<style lang="scss" module>
.spinner {
  @include spinner-base();
}

/* color別のスタイル */
.primary {
  border-top-color: $primary-main;
  border-right-color: $primary-main;
  border-bottom-color: $primary-main;
  border-left-color: $gray-50;
}
.gray {
  border-top-color: $gray-200;
  border-right-color: $gray-200;
  border-bottom-color: $gray-200;
  border-left-color: $gray-50;
}

.white {
  border-top-color: #ffffff;
  border-right-color: #ffffff;
  border-bottom-color: #ffffff;
  border-left-color: transparent;
}
</style>
