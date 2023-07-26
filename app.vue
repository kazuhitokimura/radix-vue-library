<template>
  <div>
  <h1>タイトルが入ります</h1>
  <p :class="$style.caption">何かしらの文章</p>
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