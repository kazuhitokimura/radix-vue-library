<template>
  <div :class="$style.pageHeader">
    <LinkText text="戻る" :chevronLeft="true" />
    <div :class="$style.actionWrapper">
      <Btn label="アクション" size="M" />
      <IconBtn icon="more_horiz" size="M" />
    </div>
  </div>
  <div :class="$style.pageContentWrapper">
    <h1 :class="$style.h1">今週のグッドデザインを紹介します（7/31〜8/4）</h1>
    <div :class="$style.chipWrapper">
      <Chip text="カテゴリ" />
    </div>
    <p :class="$style.p">
      今週からいよいよ8月。今日は、8月1週（7/31〜8/4）にアップした、とれたてグッドデザイン5点をまとめてご紹介します！
      <br />
      このページはコンテンツにmax-widthを指定しています。コンテンツの説明がテーブル表示になっています。
    </p>
    <h2 :class="$style.h2">作品一覧</h2>
    <SingleViewRelatedInfoTable />
    <h2 :class="$style.h2">詳細</h2>
    <SingleViewInfoTable />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});

import SingleViewRelatedInfoTable from "../../components/Sample/PageView/SingleViewRelatedInfoTable.vue";
import SingleViewInfoTable from "../../components/Sample/PageView/SingleViewInfoTable.vue";
</script>

<style lang="scss" module>
// ページ内のwrapper、containerにあたるようなスタイルは共通化しないでおく
.pageHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
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
  padding: 1rem 2rem 4rem 2rem;
  max-width: 1200px;
}

.h1 {
  margin-bottom: 1rem;
}

.chipWrapper {
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  margin-bottom: 1.5rem;
}

.h2 {
  margin-top: 3rem;
  margin-bottom: 1.25rem;
}
.h3 {
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}
.h4 {
  font-size: 1.1rem;
  margin-top: 2.25rem;
  margin-bottom: 1rem;
}
.h5 {
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}

.p {
  font-size: 1rem;
  line-height: 1.75rem;
  color: $gray-600;
}
</style>
