<template>
    <HeaderMenu />
    <div :class="$style.gridWrapper">
    <NavigationMenu />
    <main :class="$style.main">
    <div :class="$style.pageTitleWrapper">
    <div :class="$style.pageTitle">
        <h1>ページのタイトルが入ります</h1>
        <p :class="$style.pageCaption">このページに関する説明が入ります。これは必須ではありません。</p>
    </div>
    <Btn label="ボタン" size="L" />
    <IconBtn icon="more_horiz" color="neutral" size="L" ariaLabel="その他の操作"/>
    </div>
    <Table />
    <div :class="$style.tableFooter">
    <PageNation />
    </div>
    </main>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style lang="scss" module>
  
  body{
    background-color: $bg-main;
  }
  .gridWrapper{
    display: grid;
    display: grid;
    grid-template-columns: 13rem 1fr;
  }
  
  .main{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    padding: 32px;
  }

  .pageTitleWrapper{
    display: flex;
    justify-content: space-between;
    gap: 8px;
    margin-bottom: 28px;
  }

  .pageTitle{
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex: 1;
  }
  
  .pageCaption{
    color: $text-sub;
  }
  .tableFooter{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 12px 0;
  }
  </style>