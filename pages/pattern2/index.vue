<template>
  <div :class="$style.collectionWrapper">
    <div :class="$style.pageTitleWrapper">
      <div :class="$style.pageTitle">
        <h1>ページのタイトルが入ります</h1>
        <p :class="$style.pageCaption">
          このページに関する説明が入ります。これは必須ではありません。
        </p>
      </div>
      <Drawer contentTitle="登録" contentWidth="30rem">
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
          <Btn label="キャンセル" color="text" size="L" />
          <Btn label="この内容で登録" color="primary" size="L" />
        </template>
      </Drawer>
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

import TablePattern2 from "~/components/Sample/TablePattern2.vue";
</script>

<style lang="scss" module>
// ページ内のwrapper、containerにあたるようなスタイルは共通化しないでおく
.collectionWrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
}
.pageTitleWrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 0.5rem;
  margin-bottom: 1.75rem;
}

.pageTitle {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.25rem;
  flex: 1;
}

.inputColumn {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.pageCaption {
  color: $text-sub;
  width: 100%;
}
.tableFooter {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 0.75rem 0;
}
</style>
