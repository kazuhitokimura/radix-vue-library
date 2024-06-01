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
      <tr>
        <TdText
          text="タイトルタイトルタイトルタイトル"
          caption="これはキャプションです。この列はminWidth指定しています。"
          minWidth="15rem"
        />
        <TdBtn>
          <ActionDrawer contentTitle="詳細表示" contentWidth="30rem">
            <template #drawerTrigger>
              <Btn label="詳細表示" color="neutral" size="M" />
            </template>
            <template #drawerBody>
              <div :class="$style.inputColumn">
                <InputElement label="タイトル" :mandatory="true"
                  ><Input value="タイトルタイトルタイトルタイトル"
                /></InputElement>
                <InputElement label="タイトル"><Input value="テキスト" /></InputElement>
                <InputElement label="タイトル"><Input value="テキスト" /></InputElement>
                <InputElement label="タイトル"><Input value="テキスト" /></InputElement>
                <InputElement label="項目"><Input value="テキスト" /></InputElement>
                <MessageDialog>
                  <template #dialogTrigger
                    ><Btn label="削除" color="destructive" size="M"
                  /></template>
                  <template #dialogTitle>削除します。よろしいですか？</template>
                  <template #dialogDescription>
                    メッセージダイアログのコンポーネントをRadix以外のコンポーネントから呼び出すと正常に動作する。
                  </template>
                  <template #dialogAction
                    ><Btn label="削除" color="high-destructive"
                  /></template>
                </MessageDialog>
              </div>
            </template>
            <template #drawerFooter>
              <Btn label="キャンセル" color="text" size="L" />
              <Btn label="この内容で保存" color="primary" size="L" />
            </template>
          </ActionDrawer>
        </TdBtn>
        <TdStatus text="ステータスが入ります" />
        <TdText text="テキスト" />
        <TdText text="テキスト" />
      </tr>
      <tr>
        <TdText
          text="タイトルタイトルタイトルタイトル"
          caption="これはキャプションです。この列はminWidth指定しています。"
          minWidth="15rem"
        />
        <TdBtn>
          <ActionDrawer contentTitle="詳細表示" contentWidth="30rem">
            <template #drawerTrigger>
              <Btn label="詳細表示" color="neutral" size="M" />
            </template>
            <template #drawerBody>
              <div :class="$style.inputColumn">
                <InputElement label="タイトル" :mandatory="true"
                  ><Input value="タイトルタイトルタイトルタイトル"
                /></InputElement>
                <InputElement label="タイトル"><Input value="テキスト" /></InputElement>
                <InputElement label="タイトル"><Input value="テキスト" /></InputElement>
                <InputElement label="タイトル"><Input value="テキスト" /></InputElement>
                <InputElement label="項目"><Input value="テキスト" /></InputElement>
                <MessageDialog>
                  <template #dialogTrigger
                    ><Btn label="削除" color="destructive" size="M"
                  /></template>
                  <template #dialogTitle>削除します。よろしいですか？</template>
                  <template #dialogDescription>
                    メッセージダイアログのコンポーネントをRadix以外のコンポーネントから呼び出すと正常に動作する。
                  </template>
                  <template #dialogAction
                    ><Btn label="削除" color="high-destructive"
                  /></template>
                </MessageDialog>
              </div>
            </template>
            <template #drawerFooter>
              <Btn label="キャンセル" color="text" size="L" />
              <Btn label="この内容で保存" color="primary" size="L" />
            </template>
          </ActionDrawer>
        </TdBtn>
        <TdStatus text="ステータスが入ります" />
        <TdText text="テキスト" />
        <TdText text="テキスト" />
      </tr>
    </template>
  </Table>
</template>

<style lang="scss" module>
.inputColumn {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>
