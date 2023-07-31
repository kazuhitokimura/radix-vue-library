<!-- メモ：td、内容の種類によって別のコンポーネントに　-->

<template>
    <td :class="[$style.td, $style.tdMinWidth, {[$style.truncate]: isTruncate}]" :style="{ minWidth: minWidth }">
    <div :class="$style.captionWrapper">
        <NuxtLink v-if="isNuxtLink" :to="nuxtLink" :class="[$style.link, {[$style.truncate]: isTruncate}]">{{ text }}</NuxtLink>
        <span v-else :class="{[$style.truncate]: isTruncate}">{{ text }}</span>
        <span :class="$style.caption">{{ caption }}</span>
    </div>
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
        isNuxtLink: {
            type: Boolean,
            default: false,
        },
        nuxtLink: {
            type: String,
            default: '/',
        },
        caption: {
            type: String,
            default: ''
        }
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

    .captionWrapper{
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 100%;
    }

    .truncate{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .link{
        @include link-base();
    }

    .caption{
        color: $text-sub;
        @include text-body2();
    }
  </style>