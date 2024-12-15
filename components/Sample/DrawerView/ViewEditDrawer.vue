<template>
  <ActionDrawer contentTitle="詳細表示" contentWidth="30rem">
    <template #drawerTrigger>
      <Btn label="詳細表示" color="neutral" size="M" />
    </template>
    <!--drawerBodyも、drawerViewMocTableDataの内容をインポート-->
    <template #drawerBody="{ row }">
      <div :class="$style.inputColumn">
        <InputElement label="タイトル" :mandatory="true">
          <Input :value="row.title" />
        </InputElement>
        <InputElement label="キャプション">
          <Input :value="row.caption" />
        </InputElement>
        <InputElement label="ステータス">
          <Input :value="row.status" />
        </InputElement>
        <InputElement label="hoge">
          <Input :value="row.hoge" />
        </InputElement>
        <InputElement label="fuga">
          <Input :value="row.fuga" />
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
import { drawerViewMocTableData } from "../../../mockdata/drawerViewMockData";
import ActionDrawer from "../../ActionDrawer.vue";
import Btn from "../../Btn.vue";
import InputElement from "../../InputElement.vue";
import Input from "../../Input.vue";
import RowDeleteDialog from "./RowDeleteDialog.vue";
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
