<template>
  <NuxtLink :to="nuxtLink" :class="[$style.navMenuItem, { [$style.current]: current }]">
    {{ label }}
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "メニュー",
  },
  current: {
    type: Boolean,
    default: false,
  },
  nuxtLink: {
    type: String,
    default: "/",
  },
});
</script>

<style lang="scss" module>
.navMenuItem {
  display: block;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  width: 100%;
  padding: 0.5rem;
  color: $text-main;
  background-color: $surface-main;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  &:hover {
    background-color: $gray-50;
  }

  &:active {
    background-color: $gray-100;
  }

  &:focus-visible {
    outline: 2px solid $focus-main;
  }
}

.current {
  background-color: $surface-sub;
  border-left: 2px solid $primary-main;
  padding-left: 0.375rem;

  &:hover {
    background-color: $gray-100;
  }

  &:active {
    background-color: $gray-200;
  }
}
</style>
