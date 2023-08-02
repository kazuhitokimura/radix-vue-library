<template>
  <input
    :id="id"
    :type="type"
    :value="value"
    :placeholder="placeholder"
    :class="[$style.input, { [$style.error]: isError }]"
    :readonly="isReadonly"
    :disabled="isDisabled"
  />
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  value: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "プレースホルダー",
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  isReadonly: {
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
.input {
  @include input-base();

  /* selectがデフォルトでreadonly属性付与されているので、共通化せずこちらで指定 */
  &:read-only {
    background-color: $gray-50;
    color: $text-sub;
    cursor: not-allowed;
  }
}

.error {
  border-color: $error-main;
  outline: 2px solid $red-100;
}
</style>
