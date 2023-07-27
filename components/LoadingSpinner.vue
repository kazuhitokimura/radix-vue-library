<template>
    <div :class="[$style.spinner, $style[color]]"></div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    color: {
        type: String,
        default: 'primary'
    },
    size: {
        type: String,
        default: 'M'
    },
})
</script>

<style lang="scss" module>
.spinner {
  width: 1rem;
  height: 1rem;
  border-radius: $radius-full;
  text-indent: -9999em;
  border-top: 2px solid ;
  border-right: 2px solid ;
  border-bottom: 2px solid ;
  border-left: 2px solid ;
  animation: animate 0.8s linear infinite;
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* color別のスタイル */
.primary {
  border-top-color: $surface-sub;
  border-right-color: $surface-sub;
  border-bottom-color: $surface-sub;
  border-left-color: $primary-main;
}

.text {
  border-top-color: $surface-sub;
  border-right-color: $surface-sub;
  border-bottom-color: $surface-sub;
  border-left-color: $text-main;
}

.white {
  border-top-color: $surface-sub;
  border-right-color: $surface-sub;
  border-bottom-color: $surface-sub;
  border-left-color: $text-white;
}
</style>