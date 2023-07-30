<template>
    <table :class="$style.table">
        <thead>
        <tr>
            <Th text="タイトル"/>
            <Th text="タイトル" />
            <Th text="タイトル" />
            <Th text="タイトル" />
        </tr>
        </thead>
        <tbody>
        <tr>
            <Td text="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト" :isNuxtLink="true" nuxtLink="/detail" minWidth="15rem" />
            <Td text="テキスト" />
            <Td text="テキスト" />
            <Td text="テキスト" />
        </tr>
        <tr>
            <Td text="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト" :isNuxtLink="true" nuxtLink="/detail" />
            <Td text="テキスト" />
            <Td text="テキスト" />
            <Td text="テキスト" />
        </tr>
        </tbody>
    </table>
  </template>
  
  <script setup>
  </script>
  
  <style lang="scss" module>
  .table{
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
    }

    .th{
        padding: 1rem 0.75rem;
        text-align: left;
        border-bottom: 1px solid $border-main;
        color: $text-sub;
        @include text-h4();
    }

  </style>