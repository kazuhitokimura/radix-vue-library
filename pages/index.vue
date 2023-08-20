<template>
  <div :class="$style.collectionWrapper">
    <div :class="$style.pageTitleWrapper">
      <div :class="$style.pageTitle">
        <h1>ページのタイトルが入ります</h1>
        <p :class="$style.pageCaption">
          このページに関する説明が入ります。これは必須ではありません。これは詳細ページへ遷移するパターンです。
        </p>
      </div>
      <Btn label="登録" size="L" :isNuxtLink="true" nuxtLink="/create" />
      <SelectTest triggerWidth="15rem" contentWidth="15rem" :showPlaceholder="true" />
    </div>
    <TablePattern1 />
    <div :class="$style.tableFooter">
      <PageNation />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});

import TablePattern1 from "../components/Sample/TablePattern1.vue";
</script>

<style lang="scss" module>
// ページ内のwrapper、containerにあたるようなスタイルは共通化しないでおく
.collectionWrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3rem 2rem;
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
