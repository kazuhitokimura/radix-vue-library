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
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: $radius-S;
  font-size: $text-XL;
  line-height: 0;

  &:focus-visible {
    outline: 2px solid $focus-main;
    outline-offset: 2px;
  }

  &:disabled {
    opacity: $opacity-disabled;
    cursor: not-allowed;
  }
}

/* color別のスタイル */
.primary {
  background-color: $primary-main;
  color: $text-white;

  &:hover {
    background-color: $gray-900;
  }
  &:active {
    background-color: darken($gray-900, 20%);
  }
  &:disabled {
    background-color: $primary-main;
  }
}

.neutral {
  background-color: $surface-main;
  color: $text-main;
  border: 1px solid $border-main;

  &:hover {
    background-color: $gray-50;
  }

  &:active {
    background-color: $gray-100;
  }

  &:disabled {
    background-color: $surface-main;
  }
}

.text {
  color: $text-main;

  &:hover {
    background-color: $overlay-hover;
  }

  &:active {
    background-color: $overlay-active;
  }
  &:disabled {
    background-color: transparent;
  }
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
