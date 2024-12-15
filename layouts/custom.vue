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
    label: "テーブルとページ",
    current: false,
    nuxtLink: "/",
  },
  {
    label: "テーブルとドロワー",
    current: true,
    nuxtLink: "/drawer-view",
  },
]);
</script>

<style lang="scss" module>
.gridWrapper {
  display: grid;
  display: grid;
  grid-template-columns: 9.75rem 1fr;
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
