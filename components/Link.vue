<template>
    <NuxtLink :to="nuxtLink" :class="$style.nuxtLink">
    <span v-show="chevronLeft" class="material-icons-outlined" :class="$style.icon">chevron_left</span>
        <span :class="$style.link"><slot>{{ text }}</slot></span>
    <span v-show="chevronRight" class="material-icons-outlined" :class="$style.icon">chevron_right</span>
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
  text: {
      type: String,
      default: 'リンク'
  },  
  nuxtLink: {
      type: String,
      default: '/'
  },
  chevronLeft: {
      type: Boolean,
      default: false
  },
  chevronRight: {
      type: Boolean,
      default: false
  },
})
</script>

<style lang="scss" module>
.nuxtLink{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
}

.link{
    @include link-base();
}

.icon{
    @include text-body1();
    color: $text-link;
    line-height: 0;
    text-decoration: none;
}
</style>