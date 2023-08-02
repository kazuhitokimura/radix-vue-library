<template>
  <div :class="$style.pageHeader">
    <LinkText text="戻る" :chevronLeft="true" />
    <div :class="$style.actionWrapper">
      <Btn label="アクション" size="L" />
      <Pattern1DetailPageDropDownMenu />
    </div>
  </div>
  <div :class="$style.pageContentWrapper">
    <h1 :class="$style.h1">タイトルタイトルタイトルタイトル</h1>
    <p>
      文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。
    </p>
    <h2 :class="$style.h2">見出し2が入ります</h2>
    <p>
      文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。
    </p>
    <h3 :class="$style.h3">見出し3が入ります</h3>
    <p>
      文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。
    </p>
    <h4 :class="$style.h4">見出し4が入ります</h4>
    <p>
      文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。
    </p>
    <h5 :class="$style.h5">見出し5が入ります</h5>
    <p>
      文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。
    </p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});

import Pattern1DetailPageDropDownMenu from "../components/Sample/Pattern1DetailPageDropDownMenu.vue";
</script>

<style lang="scss" module>
// ページ内のwrapper、containerにあたるようなスタイルは共通化しないでおく
.pageHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
}

.actionWrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
}
.pageContentWrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 920px;
  padding: 0px 120px 32px 32px;
}

.h1 {
  margin-bottom: 1.75rem;
}
.h2 {
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
}
.h3 {
  margin-top: 2.25rem;
  margin-bottom: 1.25rem;
}
.h4 {
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}
.h5 {
  margin-top: 1.75rem;
  margin-bottom: 0.75rem;
}
</style>
