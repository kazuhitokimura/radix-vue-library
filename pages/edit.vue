<template>
  <div :class="$style.pageHeader">
    <LinkText text="保存せず戻る" nuxtLink="/detail" :chevronLeft="true" />
    <div :class="$style.actionWrapper">
      <Btn label="この内容で保存" size="L" />
    </div>
  </div>
  <div :class="$style.pageContentWrapper">
    <h1 :class="$style.h1">編集</h1>
    <Input />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});
</script>

<style lang="scss" module>
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
  width: 840px;
  padding: 0px 120px 32px 32px;
}

.h1 {
  margin-bottom: 1.75rem;
}
</style>
