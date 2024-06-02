<template>
  <div>
    <HeaderMenu />
    <div :class="$style.gridWrapper">
      <NavigationMenu :items="menuItems" />
      <main :class="$style.main">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const menuItems = ref([
  {
    label: "UIのパターン",
    isSubheader: true,
  },
  {
    label: "パターン1",
    current: false,
    nuxtLink: "/",
  },
  {
    label: "パターン2",
    current: true,
    nuxtLink: "/pattern2",
  },
]);
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
  overflow-x: scroll;
}
</style>
