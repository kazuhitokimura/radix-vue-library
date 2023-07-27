<template>
  <div :class="$style.col">
  <h1>タイトルが入ります</h1>
  <p :class="$style.caption">何かしらの文章</p>
  <Btn label="テスト" color="neutral" size="L"/>
  <Btn label="テスト" color="primary" size="L"/>
  <Btn label="テスト" color="text" size="L"/>
  <Btn label="テスト" color="neutral" size="L" disabled="true"/>
  <Btn label="テスト" color="primary" size="L" disabled="true"/>
  <Btn label="テスト" color="text" size="L" disabled="true"/>
  <Btn label="テスト" color="neutral" size="L" isLoading="true" disabled="true" />
  <Btn label="テスト" color="primary" size="L" isLoading="true" disabled="true" />
  <Btn label="テスト" color="text" size="L" isLoading="true" disabled="true" />

  </div>
</template>

<style lang="scss" module>
h1{
  color: $red-700;
}

.col{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
}
.caption{
  color: $text-link;
  }
</style>