<template>
  <div :class="$style.pageHeader">
    <LinkText text="戻る" nuxtLink="/" :chevronLeft="true" />
    <div :class="$style.actionWrapper">
      <Btn label="この内容で登録" size="L" />
    </div>
  </div>
  <div :class="$style.pageContentWrapper">
    <h1 :class="$style.h1">登録</h1>
    <div :class="$style.inputColumn">
      <InputElement label="タイトル" mandatory="true">
        <Input placeholder="タイトル" value="" />
      </InputElement>
      <InputElement label="タイトル">
        <Select triggerText="カテゴリを選択" />
      </InputElement>
      <InputElement label="項目">
        <Textarea placeholder="項目" :rows="15" value="" />
      </InputElement>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});
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
  max-width: 920px;
  padding: 0px 120px 32px 32px;
}

.inputColumn {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.h1 {
  margin-bottom: 1.75rem;
}
</style>
