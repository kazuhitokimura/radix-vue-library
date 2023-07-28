<template>
    <nav :class="$style.navigationMenu">
    <NavigationMenuBtn label="メニュー" :current="true" />
    <NavigationMenuBtn label="メニュー" />
    </nav>
</template>

<script setup>
</script>

<style lang="scss" module>
    .navigationMenu{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0rem 0.25rem;
        gap: 0.25rem;
        height: 100vh;
        width: 13rem;
    }
</style>