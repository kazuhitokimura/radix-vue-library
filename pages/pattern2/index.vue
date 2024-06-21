<template>
  <div :class="$style.collectionWrapper">
    <div :class="$style.collectionPageTitleWrapper">
      <div :class="$style.collectionPageTitle">
        <h1>ページのタイトルが入ります</h1>
        <p :class="$style.collectionPageCaption">
          これはテーブルからドロワーを表示するパターンです。
        </p>
      </div>
      <ActionDrawer contentTitle="登録" contentWidth="30rem">
        <template #drawerTrigger>
          <btn label="登録" size="L" />
        </template>
        <template #drawerBody>
          <div :class="$style.inputColumn">
            <InputElement label="タイトル" :mandatory="true"
              ><Input placeholder="タイトル"
            /></InputElement>
            <InputElement label="項目"><Input placeholder="項目" /></InputElement>
            <InputElement label="項目"><Input placeholder="項目" /></InputElement>
            <InputElement label="項目"><Input placeholder="項目" /></InputElement>
            <InputElement label="項目"><Input placeholder="項目" /></InputElement>
          </div>
        </template>
        <template #drawerFooter>
          <Btn label="キャンセル" color="neutral" size="L" />
          <Btn label="この内容で登録" color="primary" size="L" />
        </template>
      </ActionDrawer>
    </div>
    <TablePattern2 />
    <div :class="$style.tableFooter">
      <PageNation />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});

import TablePattern2Test from "~/components/Sample/TablePattern2Test.vue";
import TablePattern2 from "~/components/Sample/TablePattern2.vue";
</script>

<style scoped>
body {
  overflow-x: hidden;
}
</style>

<style lang="scss" module>
// ページ内のwrapper、containerにあたるようなスタイルは共通化しないでおく
.collectionWrapper {
  @include collection-wrapper();
}

.collectionPageTitleWrapper {
  @include collection-page-title-wrapper();
}

.collectionPageTitle {
  @include collection-page-title();
}

.collectionPageCaption {
  @include collection-page-caption();
}

.inputColumn {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.tableFooter {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 0.75rem 0;
}
</style>
