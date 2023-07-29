<template>
        <td :class="[$style.td, $style.tdMinWidth, {[$style.truncate]: isTruncate}]" :style="{ minWidth: minWidth }">
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
        href: {
            type: String,
            default: '#',
        },
  })
  </script>
  
  <style lang="scss" module>

    .td{
        padding: 1rem 0.75rem;
        text-align: left;
        border-bottom: 1px solid $border-main;
        color: $text-main;
        max-width: 0;
        @include text-p();
    }
    .truncate{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .link{
        color: $text-link;
        text-decoration: underline;

        &:hover{
            color: $blue-700;
        }

        &:active{
            color: $blue-800;
        }

        &:focus-visible{
            outline : 2px solid $focus-main;
        }
    }
  </style>