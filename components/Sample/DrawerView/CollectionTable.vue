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
          <!--ViewEditDrawerのpropsにdrawerViewMocTableDataの内容をインポート-->
          <ViewEditDrawer
            :title="row.title"
            :caption="row.caption"
            :status="row.status"
            :hoge="row.hoge"
            :fuga="row.fuga"
          />
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
import ViewEditDrawer from "./ViewEditDrawer.vue";
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
