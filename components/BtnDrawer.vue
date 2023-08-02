<template>
  <Btn :label="triggerText" :color="triggerBtnColor" :size="size" @click="toggleDrawer" />
  <DrawerContent
    v-if="drawerIsOpen"
    :class="$style.drawerContent"
    :style="{ width: contentWidth }"
  >
    <div :class="$style.drawerHeader">
      <h2>タイトル</h2>
      <IconBtn
        icon="close"
        ariaLabel="閉じる"
        color="text"
        size="L"
        @click="toggleDrawer"
      />
    </div>
    <div :class="$style.drawerBody">
      <slot name="drawerContent" />
    </div>
    <div :class="$style.drawerFooter">
      <Btn text="閉じる" color="text" size="L" @click="toggleDrawer" />
    </div>
  </DrawerContent>
</template>

<script setup>
const drawerIsOpen = ref(false);

const toggleDrawer = () => {
  drawerIsOpen.value = !drawerIsOpen.value;
};

const props = defineProps({
  triggerText: {
    type: String,
    default: "ドロワーを開く",
  },
  triggerBtnColor: {
    type: String,
    default: "neutral",
  },
  size: {
    type: String,
    default: "L",
  },
  contentWidth: {
    type: String,
    default: "40rem",
  },
});
</script>

<style lang="scss" module>
.drawerHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;
}

.drawerContent {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.drawerBody {
  width: 100%;
  padding: 1rem;
  flex: 1;
}

.drawerFooter {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;
}
</style>
