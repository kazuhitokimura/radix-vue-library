<template>
  <nav :class="$style.navigationMenu">
    <NavigationMenuItem
      v-for="item in items"
      :key="item.label"
      :label="item.label"
      :isSubheader="item.isSubheader"
      :current="item.current"
      :nuxtLink="item.nuxtLink"
    />
  </nav>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" module>
.navigationMenu {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding: 4px;
  min-height: calc(100vh - 3.75rem);
  height: 100%;
  width: 13rem;
  background-color: $gray-50;
  border-right: 1px solid $gray-100;
}
</style>
