<template>
    <nav :class="$style.navigationMenu">
    <NavigationMenuItem label="メニュー" :current="true" />
    <NavigationMenuItem label="メニュー" />
    <NavigationMenuItem label="メニュー" />
    <NavigationMenuItem label="メニュー" />
    </nav>
</template>

<script setup>
</script>

<style lang="scss" module>
    .navigationMenu{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.25rem;
        gap: 0.25rem;
        height: calc(100vh - 3.75rem);
        width: 13rem;
        background-color: $surface-main;
    }
</style>