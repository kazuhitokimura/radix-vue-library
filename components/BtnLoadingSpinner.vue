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

/* ボタンのcolor別のスタイル */
.primary {
  border-top-color: $text-white;
  border-right-color: $text-white;
  border-bottom-color: $text-white;
  border-left-color: transparent;
}

.neutral {
  border-top-color: $text-main;
  border-right-color: $text-main;
  border-bottom-color: $text-main;
  border-left-color: transparent;
}

.text {
  border-top-color: $text-main;
  border-right-color: $text-main;
  border-bottom-color: $text-main;
  border-left-color: transparent;
}

.destructive {
  border-top-color: $error-main;
  border-right-color: $error-main;
  border-bottom-color: $error-main;
  border-left-color: transparent;
}

.high-destructive {
  border-top-color: $text-white;
  border-right-color: $text-white;
  border-bottom-color: $text-white;
  border-left-color: transparent;
}
</style>
