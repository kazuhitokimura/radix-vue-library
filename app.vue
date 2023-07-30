<template>
  <HeaderMenu />
  <div :class="$style.gridWrapper">
  <NavigationMenu />
  <main>
  <h1>タイトルが入ります</h1>
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
  padding: 32px;
  background-color: $surface-main;
}

.tableFooter{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 12px 0;
}
</style>