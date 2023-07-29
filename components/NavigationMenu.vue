<template>
    <nav :class="$style.navigationMenu">
    <ul :class="$style.itemUl">
    <li :class="$style.itemLi">
        <NavigationMenuItem label="メニュー" :current="true" />
    </li>
    <li :class="$style.itemLi">
        <NavigationMenuItem label="メニュー" />
    </li>
    <li :class="$style.itemLi">
        <NavigationMenuItem label="メニュー" />
    </li>
    <li :class="$style.itemLi">
        <NavigationMenuItem label="メニュー" />
    </li>
    </ul>
    </nav>
</template>

<script setup>
</script>

<style lang="scss" module>
    .navigationMenu{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 4px;
        height: calc(100vh - 3.75rem);
        width: 13rem;
        background-color: $surface-main;
    }

    .itemUl{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.25rem;
        width: 100%;
    }

    .itemLi{
        width: 100%;
    }
</style>