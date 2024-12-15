<template>
  <Table>
    <!--tableHeaderの内容を記述-->
    <template #tableHeader>
      <Th text="タイトル" />
      <Th text="" />
      <Th text="ステータス" />
      <Th text="hoge" />
      <Th text="fuga" />
    </template>
    <template #tableData>
      <!--trはdrawerViewMocTableDataの内容をインポート-->
      <tr v-for="(row, index) in drawerViewMocTableData" :key="index">
        <TdText :text="row.title" :caption="row.caption" :minWidth="row.minWidth" />
        <TdBtn>
          <!--drawerView用のActionDrawerは別のコンポーネントで定義したい-->
          <ActionDrawer contentTitle="詳細表示" contentWidth="30rem">
            <template #drawerTrigger>
              <Btn label="詳細表示" color="neutral" size="M" />
            </template>
            <!--drawerBodyも、drawerViewMocTableDataの内容をインポート-->
            <template #drawerBody>
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
        </TdBtn>
        <TdStatus :text="row.status" />
        <TdText :text="row.hoge" />
        <TdText :text="row.fuga" />
      </tr>
    </template>
  </Table>
</template>

<script setup>
import { drawerViewMocTableData } from "../../../mockdata/drawerViewMockData";
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
