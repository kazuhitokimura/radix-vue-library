<template>
  <div>
  <h1>タイトルが入ります</h1>
  <p :class="$style.caption">何かしらの文章</p>
  <Btn label="テスト" />
  </div>
</template>

<style lang="scss" module>
h1{
  color: $red-700;
}
.caption{
  color: $text-link;
  }
</style>