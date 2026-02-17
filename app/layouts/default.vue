<template>
  <div class="layout-wrapper">
    <TheHeader />
    <main>
      <slot />
    </main>
  </div>
</template>

<style>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>
