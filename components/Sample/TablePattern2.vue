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
          <BtnDrawer
            triggerLabel="詳細表示"
            triggerBtnColor="neutral"
            triggerBtnSize="M"
            contentTitle="詳細表示"
            contentWidth="30rem"
          >
            <template #drawerBody>
              <InputElement label="タイトル" :mandatory="true"
                ><Input value="タイトルタイトルタイトルタイトル"
              /></InputElement>
              <InputElement label="項目"><Input value="テキスト" /></InputElement>
              <InputElement label="項目"><Input value="テキスト" /></InputElement>
              <InputElement label="項目"><Input value="テキスト" /></InputElement>
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
        <TdText text="テキスト" />
      </tr>
      <tr>
        <TdText
          text="タイトルタイトルタイトルタイトル"
          caption="これはキャプションです。この列はminWidth指定しています。"
          minWidth="15rem"
        />
        <TdBtn>
          <BtnDrawer
            triggerLabel="詳細表示"
            triggerBtnColor="neutral"
            triggerBtnSize="M"
            contentTitle="詳細表示"
            contentWidth="30rem"
          >
            <template #drawerBody>
              <InputElement label="タイトル" :mandatory="true"
                ><Input value="タイトルタイトルタイトルタイトル"
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
        <TdText text="テキスト" />
      </tr>
    </template>
  </Table>
</template>
