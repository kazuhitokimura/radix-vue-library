<template>
  <div v-if="isSubheader" :class="$style.nabMenuSubheader">{{ label }}</div>
  <NuxtLink v-else-if="isTransition" :to="nuxtLink" :class="$style.navMenuTransition">
    <span class="material-symbols-outlined" :class="$style.icon">chevron_left</span>
    {{ label }}
  </NuxtLink>
  <NuxtLink
    v-else
    :to="nuxtLink"
    :class="[$style.navMenuItem, { [$style.current]: current }]"
  >
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
  isSubheader: {
    type: Boolean,
    default: false,
  },
  isTransition: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" module>
.navMenuItem {
  display: block;
  gap: 0.25rem;
  width: 100%;
  padding: 0.5rem;
  color: $text-main;
  background-color: $gray-50;
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

.navMenuTransition {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.25rem;
  width: 100%;
  padding: 0.5rem;
  color: $text-main;
  background-color: $gray-50;

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

.nabMenuSubheader {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 1.25rem 0.5rem 0.5rem 0.5rem;
  @include text-h5();
  color: $text-sub;
  background-color: $gray-50;
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

.icon {
  @include text-body1();
  line-height: 0;
}
</style>
