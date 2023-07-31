<!-- メモ：td、内容の種類によって別のコンポーネントに　-->

<template>
    <td :class="[$style.td]" :style="{ minWidth: minWidth }">
        <Btn color="neutral"/><Btn v-if="secondBtn" color="neutral"/><Btn v-if="thirdBtn" color="neutral"/><Btn v-if="fourthBtn" color="neutral"/>
        <IconBtn v-if="iconBtn" /><IconBtn v-if="secondIconBtn" /><IconBtn v-if="thirdIconBtn" /><IconBtn v-if="fourthIconBtn" />
    </td>
  </template>
  
  <script setup>
  const props = defineProps({
        minWidth: {
            type: String,
            default: '5rem',
        },
        secondBtn: {
            type: Boolean,
            default: false,
        },
        thirdBtn: {
            type: Boolean,
            default: false,
        },
        fourthBtn: {
            type: Boolean,
            default: false,
        },
        iconBtn: {
            type: Boolean,
            default: false,
        },
        secondIconBtn: {
            type: Boolean,
            default: false,
        },
        thirdIconBtn: {
            type: Boolean,
            default: false,
        },
        fourthIconBtn: {
            type: Boolean,
            default: false,
        },
  })
  </script>
  
  <style lang="scss" module>

    .td{
        padding: 16px 12px;
        text-align: left;
        border-bottom: 1px solid $border-main;
        color: $text-main;
        @include text-body1();
    }
  </style>