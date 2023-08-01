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
        <TdText text="テキスト" caption="説明が入りますこれはtruncate不可です" />
        <TdBtn><Btn label="詳細表示" color="neutral" size="M" width="10rem" /></TdBtn>
        <TdText text="テキスト" />
        <TdText text="テキスト" />
      </tr>
      <tr>
        <TdText text="テキスト" caption="説明が入りますこれはtruncate不可です" />
        <TdBtn><Btn label="詳細表示" color="neutral" size="M" /></TdBtn>
        <TdText text="テキスト" />
        <TdText text="テキスト" />
      </tr>
    </template>
  </Table>
</template>
