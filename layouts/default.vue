<template>
  <div>
    <HeaderMenu />
    <div :class="$style.gridWrapper">
      <NavigationMenuPattern1 />
      <main :class="$style.main">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" module>
.gridWrapper {
  display: grid;
  display: grid;
  grid-template-columns: 13rem 1fr;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 2rem;
}
</style>
