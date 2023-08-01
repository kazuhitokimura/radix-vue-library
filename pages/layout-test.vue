<template>
  <div :class="$style.pageTitleWrapper">
    <div :class="$style.pageTitle">
      <h1>ページのタイトルが入ります</h1>
      <p :class="$style.pageCaption">
        このページに関する説明が入ります。これは必須ではありません。
      </p>
    </div>
    <Btn label="ボタン" size="L" />
    <IconBtn icon="more_horiz" color="neutral" size="L" ariaLabel="その他の操作" />
  </div>
  <TablePattern1 />
  <div :class="$style.tableFooter">
    <PageNation />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});
</script>

<style lang="scss" module>
.pageTitleWrapper {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.75rem;
}

.pageTitle {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
}

.pageCaption {
  color: $text-sub;
}
.tableFooter {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.75rem 0;
}
</style>
