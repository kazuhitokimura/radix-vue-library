<!-- メモ：td、内容の種類によって別のコンポーネントに　-->

<template>
  <td
    :class="[$style.td, { [$style.truncate]: isTruncate }]"
    :style="{ minWidth: minWidth }"
  >
    <div :class="$style.captionWrapper">
      <NuxtLink
        v-if="isNuxtLink"
        :to="nuxtLink"
        :class="[$style.link, { [$style.truncate]: isTruncate }]"
        >{{ text }}</NuxtLink
      >
      <span
        v-else
        :class="[{ [$style.truncate]: isTruncate }, { [$style.rowTitle]: isRowTitle }]"
        >{{ text }}</span
      >
      <span :class="$style.caption">{{ caption }}</span>
    </div>
  </td>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "テキスト",
  },
  isTruncate: {
    type: Boolean,
    default: true,
  },
  minWidth: {
    type: String,
    default: "5rem",
  },
  isNuxtLink: {
    type: Boolean,
    default: false,
  },
  nuxtLink: {
    type: String,
    default: "/",
  },
  caption: {
    type: String,
    default: "",
  },
  isRowTitle: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" module>
.td {
  padding: 1rem 0.75rem;
  text-align: left;
  border-bottom: 1px solid $border-divider;
  color: $text-main;
  max-width: 0;
  @include text-body1();
}

.captionWrapper {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.link {
  @include link-base();
}

.caption {
  color: $text-sub;
  @include text-body2();
}

.rowTitle {
  @include text-h5();
  color: $text-sub;
}
</style>
