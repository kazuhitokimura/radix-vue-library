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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: $radius-S;
  font-size: $text-M;

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
