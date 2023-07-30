<template>
        <td :class="[$style.td, $style.tdMinWidth, {[$style.truncate]: isTruncate}]" :style="{ minWidth: minWidth }">
        <NuxtLink :to=nuxtLink v-if="isNuxtLink" :class="$style.link">{{ text }}</NuxtLink>
        <a :href="href" v-if="isLink" :class="$style.link">{{ text }}</a>
        <span v-else>{{ text }}</span>
        </td>
  </template>
  
  <script setup>
  const props = defineProps({
      text: {
          type: String,
          default: 'テキスト'
      },
        isTruncate: {
            type: Boolean,
            default: true,
        },
        minWidth: {
            type: String,
            default: '5rem',
        },
        isLink: {
            type: Boolean,
            default: false,
        },
        isNuxtLink: {
            type: Boolean,
            default: false,
        },
        nuxtLink: {
            type: String,
            default: '/',
        },
        href: {
            type: String,
            default: '#',
        },
  })
  </script>
  
  <style lang="scss" module>

    .td{
        padding: 16px 12px;
        text-align: left;
        border-bottom: 1px solid $border-main;
        color: $text-main;
        max-width: 0;
        @include text-body1();
    }
    .truncate{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .link{
        @include link-base();
    }
  </style>