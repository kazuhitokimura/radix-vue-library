<template>
  <textarea
    :id="id"
    :value="value"
    :placeholder="placeholder"
    :rows="rows"
    :class="[$style.textarea, { [$style.error]: isError }]"
    :disabled="isDisabled"
  />
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
  rows: {
    type: Number,
    default: 5,
  },
  placeholder: {
    type: String,
    default: "プレースホルダー",
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  isError: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" module>
.textarea {
  @include input-base();

  /* selectがデフォルトでreadonly属性付与されているので、共通化せずこちらで指定 */
  &:read-only {
    opacity: $opacity-disabled;
    background-color: $surface-sub;
    cursor: not-allowed;
  }
}

.error {
  border-color: $error-main;
  outline: 2px solid $red-100;
}
</style>
