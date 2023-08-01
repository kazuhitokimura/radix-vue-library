<template>
  <input
    :class="$style.input"
    type="text"
    value="インプット"
    placeholder="プレースホルダー"
  />
</template>

<script setup></script>

<style lang="scss" module>
.input {
  @include input-base();
}
</style>
