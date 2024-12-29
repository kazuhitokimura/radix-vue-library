<template>
  <div :class="$style.collectionWrapper">
    <div :class="$style.collectionPageTitleWrapper">
      <div :class="$style.collectionPageTitle">
        <h1>ページのタイトルが入ります</h1>
        <p :class="$style.collectionPageCaption">
          これはテーブルからドロワーを表示するパターンです。
        </p>
      </div>
      <CreateDrawer />
    </div>
    <CollectionTable />
    <div :class="$style.tableFooter">
      <PageNation />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});

import CollectionTable from "../../components/Sample/DrawerView/CollectionTable.vue";
import CreateDrawer from "../../components/Sample/DrawerView/CreateDrawer.vue";
import PageNation from "../../components/PageNation.vue";
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

.requiredCaption {
  @include required-caption-base();
}
</style>
