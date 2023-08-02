<template>
  <NuxtLink
    v-if="isNuxtLink"
    :to="nuxtLink"
    :class="[$style.btn, $style[color], $style[size], { [$style.loading]: isLoading }]"
    :disabled="isDisabled"
    >{{ label }}</NuxtLink
  >
  <button
    v-else
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
  isNuxtLink: {
    type: Boolean,
    default: false,
  },
  nuxtLink: {
    type: String,
    default: null,
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

.destructive {
  @include destructive-btn-base();
}

.high-destructive {
  @include high-destructive-btn-base();
}

/* size別のスタイル */
.M {
  @include btn-size-M();
}

.L {
  @include btn-size-L();
}

/* isLoadingのスタイル */
.loading {
  cursor: not-allowed;
}
</style>
