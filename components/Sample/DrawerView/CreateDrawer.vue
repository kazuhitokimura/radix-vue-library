<template>
  <ActionDrawer contentTitle="登録" contentWidth="30rem">
    <template #drawerTrigger>
      <Btn label="登録" color="primary" size="L" />
    </template>
    <template #drawerBody>
      <div :class="$style.inputColumn">
        <InputElement label="タイトル" :mandatory="true">
          <Input :value="title" />
        </InputElement>
        <InputElement label="キャプション">
          <Input :value="caption" />
        </InputElement>
        <InputElement label="ステータス">
          <Input :value="status" />
        </InputElement>
        <InputElement label="hoge">
          <Input :value="hoge" />
        </InputElement>
        <InputElement label="fuga">
          <Input :value="fuga" />
        </InputElement>
        <p :class="$style.requiredCaption">*は必須項目です</p>
      </div>
    </template>
  </ActionDrawer>
</template>

<script setup>
import ActionDrawer from "../../ActionDrawer.vue";
import Btn from "../../Btn.vue";
import InputElement from "../../InputElement.vue";
import Input from "../../Input.vue";

// InputElementのlabelとvalueに表示する内容をpropsで受け取る
const props = defineProps({
  title: String,
  caption: String,
  status: String,
  hoge: String,
  fuga: String,
  toggleDrawer: Function,
});
</script>

<style lang="scss" module>
.inputColumn {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.requiredCaption {
  @include required-caption-base();
}
</style>
