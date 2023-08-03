<template>
  <button :class="$style.drawerTrigger" @click="toggleDrawer">
    <slot name="drawerTrigger" />
  </button>
  <DrawerContent
    v-if="drawerIsOpen"
    :class="$style.drawerContent"
    :style="{ width: contentWidth }"
  >
    <div :class="$style.drawerHeader">
      <LoadingSpinner v-if="isLoading" />
      <h2 :class="$style.contentTitle">{{ contentTitle }}</h2>
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
  contentTitle: {
    type: String,
    default: "タイトル",
  },
  contentWidth: {
    type: String,
    default: "40rem",
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" module>
.drawerTrigger {
  width: fit-content;
  height: fit-content;

  /*フォーカス時のスタイルがslotと2重で当たらないようにする*/

  &:focus {
    outline: none;
  }
}
.drawerHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  gap: 0.5rem;
  width: 100%;
}

.contentTitle {
  flex: 1;
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
  padding: 1rem 1.5rem;
  flex: 1;
  overflow-y: scroll;
}

.drawerFooter {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  width: 100%;
  z-index: $z-index-30;
}
</style>
