<template>
  <NavigationMenu>
    <ul :class="$style.itemUl">
      <li :class="$style.itemLi">
        <NavigationMenuItem label="パターン1" nuxtLink="/" />
      </li>
      <li :class="$style.itemLi">
        <NavigationMenuItem label="パターン2" :current="true" nuxtLink="/pattern2" />
      </li>
    </ul>
  </NavigationMenu>
</template>

<script setup></script>

<style lang="scss" module>
.itemUl {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  width: 100%;
}

.itemLi {
  width: 100%;
}
</style>
