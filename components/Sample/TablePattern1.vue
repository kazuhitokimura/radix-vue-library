<template>
  <Table>
    <template #tableHeader>
      <Th text="タイトル" />
      <Th text="項目" />
      <Th text="項目" />
      <Th text="項目" />
    </template>
    <template #tableData>
      <tr>
        <TdText
          text="タイトルタイトルタイトルタイトル"
          :isNuxtLink="true"
          nuxtLink="/detail"
          minWidth="15rem"
          caption="これはキャプションです。この列はminWidth指定しています。"
        />
        <TdText text="テキスト" />
        <TdText text="テキスト" />
        <TdText text="テキスト" />
      </tr>
      <tr>
        <TdText
          text="タイトルタイトルタイトルタイトル"
          :isNuxtLink="true"
          nuxtLink="/detailFullWidth"
          minWidth="15rem"
          :isTruncate="false"
          caption="これはキャプションです。この列はminWidth指定しています。"
        />
        <TdText text="テキスト" />
        <TdText text="テキスト" />
        <TdText text="テキスト" />
      </tr>
    </template>
  </Table>
</template>

<script setup></script>
