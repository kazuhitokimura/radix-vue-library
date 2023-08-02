<template>
  <Btn
    :label="triggerLabel"
    :color="triggerBtnColor"
    :size="size"
    @click="toggleDrawer"
  />
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
      <slot name="drawerBody"></slot>
    </div>
    <div :class="$style.drawerFooter">
      <slot name="drawerFooter"></slot>
    </div>
  </DrawerContent>
</template>

<script setup>
const drawerIsOpen = ref(false);

const toggleDrawer = () => {
  drawerIsOpen.value = !drawerIsOpen.value;
};

const props = defineProps({
  triggerLabel: {
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
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  gap: 1.5rem;
  flex: 1;
}

.drawerFooter {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  width: 100%;
}
</style>
