<template>
  <div :class="$style.drawerContent">
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss" module>
.drawerContent {
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  background-color: $surface-main;
  z-index: $z-index-20;
  box-shadow: $shadow-20;
}
</style>
