<template>
  <Table>
    <template #tableHeader>
      <Th text="名称/説明" />
      <Th text="" />
      <Th text="登録日" />
    </template>
    <template #tableData>
      <tr>
        <TdImg
          src="/public/sea-clayon.png"
          alt="サムネイル画像"
          width="6.5rem"
          imgWidth="80px"
          imgHeight="45px"
        />
        <TdText
          text="クレヨン[海のクレヨン]"
          minWidth="15rem"
          caption="宇宙から見た地球の色のクレヨン。"
        />
        <TdText text="2023/07/31" />
      </tr>
      <tr>
        <TdImg
          src="/public/workspace-kitchen.png"
          alt="サムネイル画像"
          width="6.5rem"
          imgWidth="80px"
          imgHeight="45px"
        />
        <TdText
          text="住宅・ワーキングスペース・シェアキッチン[母の家]"
          minWidth="15rem"
          caption="設計者の「母の家」の一部をまちに開き、ニュータウンの課題解決を目指したプロジェクト。"
        />
        <TdText text="2023/08/01" />
      </tr>
    </template>
  </Table>
</template>

<script setup></script>
