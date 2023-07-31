<template>
    <HeaderMenu />
    <div :class="$style.gridWrapper">
    <NavigationMenu />
    <main :class="$style.main">
    <div :class="$style.pageHeader">
    <LinkText text="戻る" :chevronLeft="true" />
    <Btn size="L">ボタン</Btn>
    </div>
    <div :class="$style.pageContentWrapper">
    <h1 :class="$style.h1">このページのタイトルが入ります</h1>
    <p>文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。</p>
    <h2 :class="$style.h2">見出し2が入ります</h2>
    <p>文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。</p>
    <h3 :class="$style.h3">見出し3が入ります</h3>
    <p>文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。</p>
    <h4 :class="$style.h4">見出し4が入ります</h4>
    <p>文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。</p>
    <h5 :class="$style.h5">見出し5が入ります</h5>
    <p>文章が入ります。文章が入ります。文章が入ります。文章が入ります。文章が入ります。</p>
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
    align-items: center;
    height: 100%;
    width: 100%;
  }

  .pageHeader{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.5rem 2rem;
  }

  .pageContentWrapper{
    display: flex;
    flex-direction: column;
    width: 840px;
    padding: 0px 120px 32px 32px;
  }
  
  .h1{
    margin-bottom: 28px;
  }
  .h2{
        margin-top: 40px;
        margin-bottom: 24px;
    }
  .h3{
        margin-top: 36px;
        margin-bottom: 20px;
    }
  .h4{
        margin-top: 32px;
        margin-bottom: 16px;
    }
  .h5{
        margin-top: 28px;
        margin-bottom: 12px;
    }    
  </style>