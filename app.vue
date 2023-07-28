<template>
  <HeaderMenu />
  <div :class="$style.wholeWrapper">
  <NavigationMenu />
  <main>
  <h1>タイトルが入ります</h1>
  <p>文章が入ります</p>
  <h2>タイトルが入ります</h2>
  <p>文章が入ります</p>
  <h3>タイトルが入ります</h3>
  </main>
  </div>
</template>

<script setup>
</script>

<style lang="scss" module>
.wholeWrapper{
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
}

main{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  gap: 1.25rem;
  height: 100%;
  padding: 0 2rem;
  background-color: $surface-main;
}
</style>