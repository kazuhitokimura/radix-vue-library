<template>
  <div :class="$style.pageHeader">
    <LinkText text="戻る" :chevronLeft="true" />
    <div :class="$style.actionWrapper">
      <Btn label="アクション" size="L" />
      <Pattern1DetailPageDropDownMenu />
    </div>
  </div>
  <div :class="$style.pageContentWrapper">
    <h1 :class="$style.h1">今週のグッドデザインを紹介します（7/31〜8/4）</h1>
    <div :class="$style.chipWrapper">
      <Chip text="カテゴリ" />
    </div>
    <p :class="$style.p">
      今週からいよいよ8月。今日は、8月1週（7/31〜8/4）にアップした、とれたてグッドデザイン5点をまとめてご紹介します！
    </p>
    <h2 :class="$style.h2">7/31 クレヨン[海のクレヨン]</h2>
    <p :class="$style.p">宇宙から見た地球の色のクレヨン。</p>
    <h3 :class="$style.h3">デザインの解説</h3>
    <p :class="$style.p">
      宇宙から撮影した衛星写真に写る、地球上に実存する海の色から抽出して作られた12色のクレヨン。QRコードから特設サイトへアクセスすることで、衛星写真、地図、テキスト、音声によって、海の場所や色の理由を学ぶことができます。
    </p>
    <h4 :class="$style.h4">ポイント</h4>
    <p :class="$style.p">
      子どもから大人まで「海＝青」ではない、地球の美しさや色の豊かさに触れてほしいという想いが込められています。
    </p>
    <h2 :class="$style.h2">8/1 住宅・ワーキングスペース・シェアキッチン[母の家]</h2>
    <p :class="$style.p">
      設計者の「母の家」の一部をまちに開き、ニュータウンの課題解決を目指したプロジェクト。
    </p>
    <h3 :class="$style.h3">デザインの解説</h3>
    <p :class="$style.p">
      東京郊外のニュータウンにある住宅の一部を、住民が交流できるシェアキッチンやワーキングスペースへと改修。高齢化や子どもの自立による空き家化が進む地域で、住民同士がつながり生き生きとした時間を過ごせる拠点となっています。
    </p>
    <h4 :class="$style.h4">ポイント</h4>
    <p :class="$style.p">
      各地のニュータウンが潜在的に持つ課題を解決する、未来への重要なアクションを示す好例です。
    </p>
    <h2 :class="$style.h2">まとめ</h2>
    <p :class="$style.p">
      これらの斬新なデザインは、単なる視覚的な美しさだけでなく、私たちの生活や社会に対する深い洞察と課題解決の取り組みを反映しています。海の多様な色彩を探求するクレヨンから、地域社会のつながりを強化する共有スペースへの改修まで、それぞれが私たちに新しい視点と感動を提供してくれるでしょう。
    </p>
    <h2 :class="$style.h2">詳細</h2>
    <TablePattern1Detail />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});

import Pattern1DetailPageDropDownMenu from "../components/Sample/Pattern1DetailPageDropDownMenu.vue";
import TablePattern1Detail from "../components/Sample/TablePattern1Detail.vue";
</script>

<style lang="scss" module>
// ページ内のwrapper、containerにあたるようなスタイルは共通化しないでおく
.pageHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
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
  max-width: 840px;
  padding: 1rem 7.5rem 2rem 2rem;
}

/* タイポグラフィは要調整 */
/* 左メニューが白いので文章が右に寄っているのが気になる */

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
  font-size: 1.05rem;
  line-height: 2;
  color: $gray-700;
}
</style>
