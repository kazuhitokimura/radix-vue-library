<template>
  <button
    :class="[$style.btn, $style[color], $style[size], { [$style.loading]: isLoading }]"
    :disabled="isDisabled"
    aria-label="{{ ariaLabel }}"
  >
    <BtnLoadingSpinner v-if="isLoading" btnColor="color" />
    <span v-else>
      <slot
        ><span class="material-symbols-outlined">
          {{ icon }}
        </span></slot
      >
    </span>
  </button>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: "sentiment_satisfied_alt",
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
  ariaLabel: {
    type: String,
    default: "ボタン",
  },
});
</script>

<style lang="scss" module>
/* 共通のスタイル */
.btn {
  @include icon-btn-base();
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
  padding: 0.625rem;
  height: 2.5rem;
  width: 2.5rem;
}

.L {
  padding: 10px;
  height: 2.75rem;
  width: 2.75rem;
}

/* isLoadingのスタイル */
.loading {
  cursor: not-allowed;
}
</style>
