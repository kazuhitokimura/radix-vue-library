<template>
  <ActionDrawer contentTitle="詳細表示" contentWidth="30rem">
    <template #drawerTrigger>
      <Btn label="詳細表示" color="neutral" size="M" />
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
        <RowDeleteDialog />
      </div>
    </template>
    <template #drawerFooter>
      <Btn label="キャンセル" color="neutral" size="L" />
      <Btn label="この内容で保存" color="primary" size="L" />
    </template>
  </ActionDrawer>
</template>

<script setup>
import { ref } from "vue";
import { drawerViewMocTableData } from "../../../mockdata/drawerViewMockData";
import ActionDrawer from "../../ActionDrawer.vue";
import Btn from "../../Btn.vue";
import InputElement from "../../InputElement.vue";
import Input from "../../Input.vue";
import RowDeleteDialog from "./RowDeleteDialog.vue";

// InputElementのlabelとvalueに表示する内容をpropsで受け取る
const props = defineProps({
  title: String,
  caption: String,
  status: String,
  hoge: String,
  fuga: String,
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
