<template>
    <table :class="$style.table">
        <thead :class="$style.thead">
        <th :class="$style.th">タイトル</th>
        <th :class="$style.th">タイトル</th>
        <th :class="$style.th">タイトル</th>
        </thead>
        <tbody :class="$style.tbody">
        <td :class="$style.td">テキスト</td>
        <td :class="$style.td">テキスト</td>
        <td :class="$style.td">テキスト</td>
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
        padding: 0.5rem;
        text-align: left;
        border-bottom: 1px solid $border-main;
        color: $text-sub;
    }

    .td{
        padding: 0.5rem;
        text-align: left;
        border-bottom: 1px solid $border-main;
        color: $text-main;
    }
  </style>