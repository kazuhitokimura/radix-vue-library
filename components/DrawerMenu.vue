<template>
  <Btn text="開くボタン" color="neutral" size="L" @click="toggleDrawer" />
  <DrawerContent v-if="drawerIsOpen">
    <Btn text="閉じるボタン" color="neutral" size="L" @click="toggleDrawer" />
  </DrawerContent>
</template>

<script setup>
const drawerIsOpen = ref(false);

const toggleDrawer = () => {
  drawerIsOpen.value = !drawerIsOpen.value;
};
</script>
<style lang="scss" module></style>
