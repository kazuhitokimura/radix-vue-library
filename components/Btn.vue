<template>
  <button
    :class="[$style.btn, $style[color], $style[size], { [$style.loading]: isLoading }]"
    :disabled="isDisabled"
  >
    <BtnLoadingSpinner v-if="isLoading" btnColor="color" />
    <span v-else>
      <slot>{{ label }}</slot>
    </span>
  </button>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "ボタン",
  },
  color: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "M",
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" module>
/* 共通のスタイル */
.btn {
  @include btn-base();
}

/* color別のスタイル */
.primary {
  @include primary-btn-base();
}

.neutral {
  @include neutral-btn-base();
}

.text {
  @include text-btn-base();
}

/* size別のスタイル */
.M {
  padding: 0.5rem 0.75rem;
  height: 2.5rem;
}

.L {
  padding: 0.625rem 2rem;
  height: 2.75rem;
}

/* isLoadingのスタイル */
.loading {
  cursor: not-allowed;
}
</style>
