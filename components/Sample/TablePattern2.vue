<template>
  <Table>
    <template #tableHeader>
      <Th text="タイトル" />
      <Th text="" />
      <Th text="項目" />
      <Th text="項目" />
    </template>
    <template #tableData>
      <tr>
        <TdText
          text="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
          caption="キャプション"
        />
        <TdBtn>
          <BtnDrawer
            triggerLabel="詳細表示"
            color="neutral"
            size="M"
            contentWidth="30rem"
          >
            <template #drawerBody>
              <InputElement label="タイトル" :mandatory="true"
                ><Input
                  value="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
              /></InputElement>
              <InputElement label="タイトル"><Input value="テキスト" /></InputElement>
              <InputElement label="タイトル"><Input value="テキスト" /></InputElement>
              <InputElement label="タイトル"><Input value="テキスト" /></InputElement>
              <Btn label="削除" color="destructive" size="M" />
            </template>
            <template #drawerFooter>
              <Btn label="キャンセル" color="text" size="L" />
              <Btn label="保存" color="primary" size="L" />
            </template>
          </BtnDrawer>
        </TdBtn>
        <TdText text="テキスト" />
        <TdText text="テキスト" />
      </tr>
      <tr>
        <TdText
          text="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
          caption="キャプション"
        />
        <TdBtn>
          <BtnDrawer
            triggerLabel="詳細表示"
            color="neutral"
            size="M"
            contentWidth="30rem"
          >
            <template #drawerBody>
              <InputElement label="タイトル" :mandatory="true"
                ><Input
                  value="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
              /></InputElement>
              <InputElement label="タイトル"><Input value="テキスト" /></InputElement>
              <InputElement label="タイトル"><Input value="テキスト" /></InputElement>
              <InputElement label="タイトル"><Input value="テキスト" /></InputElement>
              <Btn label="削除" color="destructive" size="M" />
            </template>
            <template #drawerFooter>
              <Btn label="キャンセル" color="text" size="L" />
              <Btn label="保存" color="primary" size="L" />
            </template>
          </BtnDrawer>
        </TdBtn>
        <TdText text="テキスト" />
        <TdText text="テキスト" />
      </tr>
    </template>
  </Table>
</template>
