<template>
  <div>
    <HeaderMenu />
    <div :class="$style.gridWrapper">
      <NavigationMenuPattern2 />
      <main :class="$style.main">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import NavigationMenuPattern2 from "../components/Sample/NavigationMenuPattern2.vue";
</script>

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
}
</style>
