<template>
  <div :class="$style.collectionWrapper">
    <div :class="$style.collectionPageTitleWrapper">
      <div :class="$style.collectionPageTitle">
        <h1>ページのタイトルが入ります</h1>
        <p :class="$style.collectionPageCaption">
          これはテーブルからページへ遷移するパターンです。
        </p>
      </div>
      <!-- フルスクリーンダイアログで登録 -->
      <ActionDialog contentTitle="登録" size="fullScreen">
        <template #dialogTrigger>
          <Btn label="登録" size="L" />
        </template>
        <template #dialogBody>
          <div :class="$style.fullScreenCreateFormElement">
            <div :class="$style.inputColumn">
              <InputElement label="タイトル" :mandatory="true"
                ><Input placeholder="タイトル"
              /></InputElement>
            </div>
          </div>
        </template>
        <template #dialogFooter>
          <Btn label="キャンセル" color="neutral" size="L" />
          <Btn label="この内容で登録" color="primary" size="L" />
        </template>
      </ActionDialog>
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

import TablePattern1 from "../components/Sample/PageView/CollectionTable.vue";
import ActionDialog from "../components/ActionDialog .vue";
import WipActionDialog from "../components/Wip/ActionDialog.vue";

import { ref } from "vue";

const dropdownItems = ref([
  { id: "1", label: "テスト1" },
  { id: "2", label: "テスト2" },
  { id: "3", label: "テスト3" },
]);

const handleClick = (item) => {
  switch (item.id) {
    case "1":
      handleTest1();
      break;
    case "2":
      handleTest2();
      break;
    case "3":
      handleTest3();
      break;
  }
};

const handleTest1 = () => {
  alert("テスト1の機能を実行");
  // ここでテスト1の機能を実行します。
};

const handleTest2 = () => {
  alert("テスト2の機能を実行");
  // ここでテスト2の機能を実行します。
};

const handleTest3 = () => {
  alert("テスト3の機能を実行");
  // ここでテスト3の機能を実行します。
};
</script>

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

.tableFooter {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 0.75rem 0;
}

.inputColumn {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
}

.fullScreenCreateFormElement {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 480px;
}
</style>
