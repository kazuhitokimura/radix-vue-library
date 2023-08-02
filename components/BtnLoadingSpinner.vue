<template>
  <div :class="[$style.spinner, $style[btnColor]]"></div>
</template>

<script setup>
const props = defineProps({
  btnColor: {
    type: String,
    default: "primary",
  },
});
</script>

<style lang="scss" module>
.spinner {
  @include spinner-base();
}

/* color別のスタイル */
.primary {
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: $text-white;
}

.neutral {
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: $text-main;
}

.text {
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: $text-main;
}
</style>
