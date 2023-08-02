<template>
  <div :class="$style.pageTitleWrapper">
    <div :class="$style.pageTitle">
      <h1>ページのタイトルが入ります</h1>
      <p :class="$style.pageCaption">
        このページに関する説明が入ります。これは必須ではありません。
      </p>
    </div>
    <Btn label="登録" color="primary" size="L" />
  </div>
  <TablePattern2 />
  <div :class="$style.tableFooter">
    <PageNation />
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
