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
            <TdText text="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト" :isNuxtLink="true" nuxtLink="/detail" minWidth="15rem" caption="説明が入りますこれはtruncate不可です"/>
            <TdText text="テキストテキストテキストテキスト"/>
            <TdBtn :secondBtn="true"/>
            <TdBtn/>
        </tr>
        <tr>
            <TdText text="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト" :isNuxtLink="true" nuxtLink="/detail" minWidth="15rem" :isTruncate="false" caption="説明が入りますこれはtruncate不可です"/>
            <TdText text="テキスト"/>
            <TdBtn :secondBtn="true"/>
            <TdBtn/>
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

    .nuxtLink{
        @include link-base();
    }

    .captionWrapper{
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 100%;
    }
    .caption{
        color: $text-sub;
        @include text-caption();
    }

  </style>