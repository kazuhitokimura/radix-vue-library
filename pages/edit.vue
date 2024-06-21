<template>
  <div :class="$style.pageHeader">
    <LinkText text="保存せず戻る" nuxtLink="/detail" :chevronLeft="true" />
    <div :class="$style.actionWrapper">
      <Btn label="この内容で保存" size="L" />
    </div>
  </div>
  <div :class="$style.singleColumnPageContentWrapper">
    <h1 :class="$style.h1">編集</h1>
    <div :class="$style.inputColumn">
      <InputElement label="タイトル" :mandatory="true">
        <Input
          placeholder="タイトル"
          value="今週のグッドデザインを紹介します（7/31〜8/4）"
        />
      </InputElement>
      <InputElement label="カテゴリ">
        <Select :options="selectOption" />
      </InputElement>
      <InputElement label="項目">
        <Textarea
          placeholder="項目"
          :rows="15"
          value="今週からいよいよ8月。今日は、8月1週（7/31〜8/4）にアップした、とれたてグッドデザイン5点をまとめてご紹介します！

##7/31 クレヨン[海のクレヨン]
宇宙から見た地球の色のクレヨン。
宇宙から撮影した衛星写真に写る、地球上に実存する海の色から抽出して作られた12色のクレヨン。QRコードから特設サイトへアクセスすることで、衛星写真、地図、テキスト、音声によって、海の場所や色の理由を学ぶことができます。子どもから大人まで「海＝青」ではない、地球の美しさや色の豊かさに触れてほしいという想いが込められています。

##8/1 住宅・ワーキングスペース・シェアキッチン[母の家]
設計者の「母の家」の一部をまちに開き、ニュータウンの課題解決を目指したプロジェクト。
東京郊外のニュータウンにある住宅の一部を、住民が交流できるシェアキッチンやワーキングスペースへと改修。高齢化や子どもの自立による空き家化が進む地域で、住民同士がつながり生き生きとした時間を過ごせる拠点となっています。各地のニュータウンが潜在的に持つ課題を解決する、未来への重要なアクションを示す好例です。

###見出し3が入ります
文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。

####見出し4が入ります
文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。

#####見出し5が入ります
文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。"
        />
      </InputElement>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});

import { ref } from "vue";

const selectOption = ref([
  "カテゴリ1が入ります",
  "カテゴリ2が入ります",
  "カテゴリ3が入ります",
]);
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
.singleColumnPageContentWrapper {
  @include single-column-page-contents-wrapper();
}

.inputColumn {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.h1 {
  margin-bottom: 24px;
}
</style>
