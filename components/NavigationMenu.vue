<!-- メモ：slotで中身を変更できるようにする -->

<template>
  <nav :class="$style.navigationMenu">
    <slot></slot>
  </nav>
</template>

<script setup></script>

<style lang="scss" module>
.navigationMenu {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
  height: calc(100vh - 3.75rem);
  width: 13rem;
  background-color: $surface-main;
}
</style>
