<template>
  <HeaderMenu />
  <div :class="$style.gridWrapper">
  <NavigationMenu />
  <main>
  <h1>タイトルが入ります</h1>
  </main>
  </div>
</template>

<script setup>
</script>

<style lang="scss" module>
.gridWrapper{
  display: grid;
  display: grid;
  grid-template-columns: 13rem 1fr;
}

main{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  padding: 0 2rem;
  background-color: $surface-main;
}
</style>