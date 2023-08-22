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
      <IconBtnDropDownMenuUsage />
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
import IconBtnDropDownMenuUsage from "../components/Sample/IconBtnDropDownMenuUsage.vue";

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
