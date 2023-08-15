<template>
  <Table>
    <template #tableHeader>
      <Th text="ページレイアウトのパターン" />
      <Th text="項目" />
      <Th text="項目" />
      <Th text="項目" />
    </template>
    <template #tableData>
      <tr>
        <TdText
          text="パターン1"
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
          text="パターン2"
          :isNuxtLink="true"
          nuxtLink="/detailTableViewFullWidth"
          minWidth="15rem"
          :isTruncate="false"
          caption="これはキャプションです。この列はminWidth指定しています。"
        />
        <TdText text="テキスト" />
        <TdText text="テキスト" />
        <TdText text="テキスト" />
      </tr>
      <tr>
        <TdText
          text="パターン3"
          :isNuxtLink="true"
          nuxtLink="/detailTableView"
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
