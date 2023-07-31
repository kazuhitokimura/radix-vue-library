<!-- メモ：Th、Tdの状態管理をして繰り返し表示にする予定 -->

<template>
  <table :class="$style.table">
    <thead>
      <tr>
        <Th text="タイトル" />
        <Th text="タイトル" />
        <Th text="タイトル" />
        <Th text="タイトル" />
      </tr>
    </thead>
    <tbody>
      <tr>
        <TdText
          text="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
          :isNuxtLink="true"
          nuxtLink="/detail"
          minWidth="15rem"
          caption="説明が入りますこれはtruncate不可です"
        />
        <TdText text="テキストテキストテキストテキスト" />
        <TdBtn />
        <TdBtn />
      </tr>
      <tr>
        <TdText
          text="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
          :isNuxtLink="true"
          nuxtLink="/detail"
          minWidth="15rem"
          :isTruncate="false"
          caption="説明が入りますこれはtruncate不可です"
        />
        <TdText text="テキスト" />
        <TdBtn />
        <TdBtn />
      </tr>
    </tbody>
  </table>
</template>

<script setup></script>

<style lang="scss" module>
.table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
