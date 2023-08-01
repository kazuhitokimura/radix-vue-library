<template>
  <div :class="$style.nuxtLink">
    <span v-if="chevronLeft" class="material-symbols-outlined" :class="$style.icon"
      >chevron_left</span
    >
    <NuxtLink :to="nuxtLink" :class="$style.link">
      <slot>{{ text }}</slot>
    </NuxtLink>
    <span v-if="chevronRight" class="material-symbols-outlined" :class="$style.icon"
      >chevron_right</span
    >
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "リンク",
  },
  nuxtLink: {
    type: String,
    default: "/",
  },
  chevronLeft: {
    type: Boolean,
    default: false,
  },
  chevronRight: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" module>
.nuxtLink {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.25rem;
}

.link {
  @include link-base();
}

.icon {
  @include text-body1();
  color: $text-link;
  line-height: 0;
  text-decoration: none;
}
</style>
