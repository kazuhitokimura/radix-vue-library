<template>
  <Table>
    <template v-slot:tableHeader>
      <Th text="タイトル" />
      <Th text="タイトル" />
      <Th text="タイトル" />
      <Th text="タイトル" />
    </template>
    <template v-slot:tableData>
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
    </template>
  </Table>
</template>
