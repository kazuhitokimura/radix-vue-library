<template>
<header :class=$style.header>
<img :class=$style.logo src="../public/LOGO.svg" alt="ロゴ">
<button :class=$style.user>
<div :class="$style.userWrapper">
ユーザー名
<span :class="$style.team">組織名</span>
</div>
</button>
</header>
</template>

<script setup>
</script>

<style lang="scss" module>
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    height: 3.75rem;
    width: 100%;
    background-color: $surface-main;
}

.logo{
    width: 3.5rem;
}

.user{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
    height: 100%;
    cursor: pointer;
    padding: 0.5rem 1rem;

    &:hover{
        background-color: $overlay-hover;
    }

    &:active{
        background-color: $overlay-active;
    }

    &:focus-visible{
        outline : 2px solid $focus-main;
    }
}

.userWrapper{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.team{
    font-size: $text-S;
    color: $text-sub;
}
</style>