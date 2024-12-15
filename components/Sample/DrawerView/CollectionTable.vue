<template>
  <Table>
    <template #tableHeader>
      <Th text="タイトル" />
      <Th text="" />
      <Th text="項目" />
      <Th text="項目" />
      <Th text="項目" />
    </template>
    <template #tableData>
      <tr v-for="(row, index) in mockTableData" :key="index">
        <TdText :text="row.title" :caption="row.caption" :minWidth="row.minWidth" />
        <TdBtn>
          <ActionDrawer contentTitle="詳細表示" contentWidth="30rem">
            <template #drawerTrigger>
              <Btn label="詳細表示" color="neutral" size="M" />
            </template>
            <template #drawerBody>
              <div :class="$style.inputColumn">
                <InputElement
                  v-for="(item, idx) in row.items"
                  :key="idx"
                  :label="item.label"
                  :mandatory="item.mandatory || false"
                >
                  <Input :value="item.value" />
                </InputElement>
                <p :class="$style.requiredCaption">*は必須項目です</p>
                <MessageDialog>
                  <template #dialogTrigger>
                    <Btn label="削除" color="destructive" size="M" />
                  </template>
                  <template #dialogTitle>削除します。よろしいですか？</template>
                  <template #dialogDescription>
                    削除すると取り消すことができません。
                  </template>
                  <template #dialogAction>
                    <Btn label="削除" color="high-destructive" />
                  </template>
                </MessageDialog>
              </div>
            </template>
            <template #drawerFooter>
              <Btn label="キャンセル" color="neutral" size="L" />
              <Btn label="この内容で保存" color="primary" size="L" />
            </template>
          </ActionDrawer>
        </TdBtn>
        <TdStatus :text="row.status" />
        <TdText text="テキスト" />
        <TdText text="テキスト" />
      </tr>
    </template>
  </Table>
</template>

<script>
import { mockTableData } from "../../../mockdata/drawerViewMockData";

export default {
  data() {
    return {
      mockTableData,
    };
  },
};
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
