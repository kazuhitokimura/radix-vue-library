<template>
  <Table>
    <template #tableHeader>
      <Th text="タイトル" />
      <Th text="タイトル" />
      <Th text="タイトル" />
      <Th text="タイトル" />
    </template>
    <template #tableData>
      <tr>
        <TdText
          text="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
          :isNuxtLink="true"
          nuxtLink="/detail"
          minWidth="15rem"
          caption="説明が入りますこれはtruncate不可です"
        />
        <TdText text="テキスト" />
        <TdText text="テキスト" />
        <TdText text="テキスト" />
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
        <TdText text="テキスト" />
        <TdText text="テキスト" />
      </tr>
    </template>
  </Table>
</template>

<script setup></script>
